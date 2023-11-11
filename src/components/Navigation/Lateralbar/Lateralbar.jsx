import React, { useEffect, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProgressContext } from "../../Context/ProgressContext";

import throttle from "lodash/throttle";

const paths = ["/", "/about", "/work", "/projects", "/contact", "/more"];

function ProgressBar() {
  const { scrollPercentage, setScrollPercentage } = useContext(ProgressContext);
  const navigate = useNavigate();
  const location = useLocation();

  const lastPageRef = useRef(getCurrentPage());
  const totalSections = paths.length; // Je suppose que vous avez oublié de le mentionner dans votre exemple initial.

  function computeScrollPercentage(scrollPosition, totalHeight) {
    if (totalHeight <= window.innerHeight) {
      return 100;
    }
    return (scrollPosition / (totalHeight - window.innerHeight)) * 100;
  }

  function getCurrentPage() {
    const pathname = location.pathname;
    return paths.indexOf(pathname);
  }

  const handleScroll = throttle(() => {
    const totalHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;
    const percentageScrolled = computeScrollPercentage(
      scrollPosition,
      totalHeight
    );
    const currentPage = getCurrentPage();
    const sectionPercentage = 100 / totalSections;

    if (lastPageRef.current !== currentPage) {
      const newProgress = currentPage * sectionPercentage;
      updateProgress(newProgress);
      lastPageRef.current = currentPage;

      return;
    }

    const totalProgress =
      currentPage * sectionPercentage +
      percentageScrolled * (sectionPercentage / 100);
    updateProgress(totalProgress);
  }, 30);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  function updateProgress(progress) {
    if (progress !== scrollPercentage) {
      setScrollPercentage(progress);
      localStorage.setItem("scrollProgress", String(progress));
    }
  }

  const handleClick = (event) => {
    const sectionHeight = window.innerHeight / totalSections;
    const clickPosition =
      event.clientY - event.currentTarget.getBoundingClientRect().top;

    const sectionIndex = Math.floor(clickPosition / sectionHeight);
    const percentageInSection =
      (clickPosition - sectionIndex * sectionHeight) / sectionHeight;

    // Pourcentage de progression global basé sur la position du clic
    const globalPercentage =
      sectionIndex * (100 / totalSections) +
      percentageInSection * (100 / totalSections);

    setScrollPercentage(globalPercentage);
    localStorage.setItem("scrollProgress", String(globalPercentage));

    if (sectionIndex !== getCurrentPage()) {
      navigate(paths[sectionIndex], {
        state: { scrollTo: percentageInSection },
      });
    } else {
      const pageHeight = document.documentElement.scrollHeight;

      if (pageHeight <= window.innerHeight) {
        // Si le contenu ne déborde pas
        setScrollPercentage((sectionIndex + 1) * (100 / totalSections));
      } else {
        setScrollPercentage(globalPercentage);
        localStorage.setItem("scrollProgress", String(globalPercentage));

        const scrollPosition =
          (pageHeight - window.innerHeight) * percentageInSection;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const percentage = location.state?.scrollTo;
    if (percentage !== undefined) {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight > 0) {
        const scrollPosition = pageHeight * percentage;
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    // Styles pour la barre entière

    <div onClick={handleClick} className="progressBarContainer">
      <div
        className="colorBar"
        style={{ height: `${scrollPercentage + 1}%` }}
      />
      <div
        className="unfilledBar"
        style={{
          top: `${scrollPercentage + 1}%`,
          height: `${100 - scrollPercentage - 1}%`,
        }}
      ></div>

      {paths.map(
        (path, index) =>
          scrollPercentage > (100 / totalSections) * (index + 0.5) && (
            <div
              className="progressBar-smallButton"
              key={index}
              style={{
                top: `${(100 / totalSections) * (index + 0.5) - 1}%`,
              }}
            />
          )
      )}

      {/* Gros rond à la fin de la barre */}
      <div
        className="progressBar-bigButton"
        style={{
          bottom: `calc(100% - ${scrollPercentage + 1.2}%)`,
        }}
      />
    </div>
  );
}

export default ProgressBar;

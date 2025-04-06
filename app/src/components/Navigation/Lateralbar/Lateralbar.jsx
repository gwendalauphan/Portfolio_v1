import React, { useContext, useRef, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ProgressContext } from "../../Context/ProgressContext";

import throttle from "lodash/throttle";

const paths = ["/", "/about", "/work", "/projects", "/contact", "/more"];



// Supposons que tous les imports nécessaires sont là, y compris ProgressContext, useNavigate, etc.

const ProgressBar = React.memo(() => { // Utilisation de React.memo
  const { scrollPercentage, setScrollPercentage } = useContext(ProgressContext);
  const navigate = useNavigate();
  const location = useLocation();

  const lastPageRef = useRef(getCurrentPage());
  const totalSections = paths.length; // Supposé défini ailleurs

  const computeScrollPercentage = useCallback((scrollPosition, totalHeight) => { // useCallback pour mémoriser la fonction
    if (totalHeight <= window.innerHeight) {
      return 100;
    }
    return (scrollPosition / (totalHeight - window.innerHeight)) * 100;
  }, []);

  function getCurrentPage() { // Défini comme une fonction régulière
    const pathname = location.pathname;
    return paths.indexOf(pathname);
  }

  const handleScroll = useMemo(() => throttle(() => { // Utilisation de useMemo
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
  }, 30), [totalSections, computeScrollPercentage, getCurrentPage]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const updateProgress = useCallback((progress) => { // Utilisation de useCallback
    if (progress !== scrollPercentage) {
      setScrollPercentage(progress);
      localStorage.setItem("scrollProgress", String(progress));
    }
  }, [scrollPercentage, setScrollPercentage]);

  const handleClick = useCallback((event) => { // Utilisation de useCallback
    // ... le reste de la logique de handleClick reste inchangé
  }, [totalSections, navigate, getCurrentPage, setScrollPercentage]);

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
});

export default ProgressBar;

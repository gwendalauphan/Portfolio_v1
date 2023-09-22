import React, { useState, useEffect, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProgressContext } from '../../Context/ProgressContext';

const paths = ['/', '/about', '/work', '/projects', '/contact', '/more'];
const totalSections = 6;

function ProgressBar() {
  const { scrollPercentage, setScrollPercentage } = useContext(ProgressContext);
  const [programmaticScroll, setProgrammaticScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  let lastPage = getCurrentPage();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  

  useEffect(() => {
    if (programmaticScroll) {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = pageHeight * (scrollPercentage % (100 / totalSections)) / 100;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      setProgrammaticScroll(false);
    }
  }, [scrollPercentage, programmaticScroll]);
  
  function getCurrentPage() {
    const pathname = location.pathname;
    return paths.indexOf(pathname);
  }
  
  

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
    
      let percentageScrolled;
    
      if (totalHeight <= window.innerHeight) { // Si le contenu ne déborde pas
        percentageScrolled = 100;
    } else {
        percentageScrolled = (scrollPosition / (totalHeight - window.innerHeight)) * 100;
    }
    
    const currentPage = getCurrentPage();
    const sectionPercentage = 100 / totalSections;
    
    // Réinitialisez le pourcentage de défilement lorsque la page change
    if (lastPage !== currentPage) {
        setScrollPercentage(currentPage * sectionPercentage);
        lastPage = currentPage;
        return;
    }
    
    const totalProgress = currentPage * sectionPercentage + percentageScrolled * (sectionPercentage / 100);
    
    setScrollPercentage(totalProgress);
    localStorage.setItem('scrollProgress', String(totalProgress));
    
    };
    

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, programmaticScroll]);

  const handleClick = (event) => {
    const sectionHeight = window.innerHeight / totalSections;
    const clickPosition = event.clientY - event.currentTarget.getBoundingClientRect().top;
    
    const sectionIndex = Math.floor(clickPosition / sectionHeight);
    const percentageInSection = (clickPosition - sectionIndex * sectionHeight) / sectionHeight;
    
    // Pourcentage de progression global basé sur la position du clic
    const globalPercentage = sectionIndex * (100 / totalSections) + percentageInSection * (100 / totalSections);

    setScrollPercentage(globalPercentage);
    localStorage.setItem('scrollProgress', String(globalPercentage));

    if (sectionIndex !== getCurrentPage()) {
      navigate(paths[sectionIndex], { state: { scrollTo: percentageInSection } });
    } else {
      const pageHeight = document.documentElement.scrollHeight;
  
      if (pageHeight <= window.innerHeight) { // Si le contenu ne déborde pas
        setScrollPercentage((sectionIndex + 1) * (100 / totalSections));
      } else {
        setScrollPercentage(globalPercentage);
        localStorage.setItem('scrollProgress', String(globalPercentage));
  
        const scrollPosition = (pageHeight - window.innerHeight) * percentageInSection;
  
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  
  useEffect(() => {
    const percentage = location.state?.scrollTo;
    
    if (percentage !== undefined) {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (pageHeight > 0) { // Check if the page is scrollable
        const scrollPosition = pageHeight * percentage;
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);


  return (
    // Styles pour la barre entière
    
    <div onClick={handleClick} className="progressBarContainer">
      <div className="colorBar" style={{ height: `${scrollPercentage + 1}%` }} />
        <div 
          className="unfilledBar" 
          style={{ 
              top: `${scrollPercentage + 1}%`,
              height: `${100 - scrollPercentage - 1}%`
          }}
          ></div>

      
      {paths.map((path, index) => (
        scrollPercentage > (100 / totalSections) * (index + 0.5) && (
          <div className="progressBar-smallButton"
            key={index}
            style={{
              top: `${(100 / totalSections) * (index + 0.5) - 1}%`,
            }}
          />
        )
      ))}

  
      {/* Gros rond à la fin de la barre */}
      <div className="progressBar-bigButton"
        style={{
          bottom: `calc(100% - ${scrollPercentage + 1.2}%)`,
        }}
      />

      
    </div>
    
  );
}

export default ProgressBar;

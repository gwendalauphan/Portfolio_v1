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
    
    <div onClick={handleClick} style={{ 
      position: 'fixed', 
      top: 0, 
      right: 0, 
      width: '8px',  // ajustez la largeur ici
      height: '100%', 
      backgroundColor: 'rgba(229, 229, 229, 0.3)',  // réduction de l'opacité
      borderRadius: '4px',  // arrondissement des bords
      backdropFilter: 'blur(2px)',  // flou
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',  // ombre magique
      zIndex: 9999 
    }}>

      
      <div style={{  // Styles pour la barre de progression colorée
        width: '100%', 
        height: `${scrollPercentage}%`, 
        backgroundColor: '#915EFF', 
         
        borderRadius: '4px',  // arrondissement des bords
        boxShadow: '0 2px 4px rgba(145, 94, 255, 0.4)'  // ombre
      }} /> 
      

  
      {paths.map((path, index) => (
        scrollPercentage > (100 / totalSections) * (index + 0.5) && (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: `${(100 / totalSections) * (index + 0.5) - 1}%`,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#915EFF',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, opacity 0.3s ease'

            }}
          />
        )
      ))}

  
      {/* Gros rond à la fin de la barre */}
      <div
        style={{
          position: 'absolute',
          bottom: `calc(100% - ${scrollPercentage +1}%)`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          backgroundColor: '#915EFF',
          cursor: 'pointer',
        }}
      />
      
    </div>
    
  );
}

export default ProgressBar;

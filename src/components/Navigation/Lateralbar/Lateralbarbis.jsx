import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ProgressBar() {
  const location = useLocation();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function getCurrentPage() {
    const pathname = location.pathname;
    const paths = ['/', '/about', '/work', '/projects', '/contact', '/more'];
    return paths.indexOf(pathname);
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      let percentageScrolled;

      if (totalHeight === 0) {  // if no content to scroll
        percentageScrolled = 0;
      } else {
        percentageScrolled = (scrollPosition / totalHeight) * 100;
      }

      const currentPage = getCurrentPage();
      const pageFactor = 20;
      const totalProgress = currentPage * pageFactor + percentageScrolled * 0.2;

      setScrollPercentage(totalProgress);
      localStorage.setItem('scrollProgress', String(totalProgress));
    };

    // Initial update when page changes
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '6px', height: '100%', backgroundColor: '#E5E5E5' }}>
    <div style={{
      width: '100%',
      height: `${scrollPercentage}%`,
      backgroundColor: '#915EFF',
      transition: 'height 0.3s ease',
      boxShadow: '0 2px 4px rgba(145, 94, 255, 0.4)'  // effet de débordement
    }} />
  </div>
  );
}

export default ProgressBar;

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
    <div style={{ position: 'fixed', top: 0, right: 0, width: '5px', height: `${scrollPercentage}%`, backgroundColor: 'purple' }} />
  );
}

export default ProgressBar;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll } from '../../Context/ScrollContext';

function ScrollToTop() {
    const location = useLocation();
    const { setHasScrolled } = useScroll();
  
    useEffect(() => {
      setHasScrolled(false);
      window.scrollTo(0, 0);
      
      const timer = setTimeout(() => {
        setHasScrolled(true);
      }, 20);
  
      return () => clearTimeout(timer); 
    }, [location.pathname]); // Déclenchez l'effet à chaque changement de route
  }

export default ScrollToTop;
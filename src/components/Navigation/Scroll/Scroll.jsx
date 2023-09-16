import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Scroll.css'

const routesOrder = ['/', '/about', '/world1', '/world2', '/world3', '/world4'];


const useScrollNavigation = (currentRoute) => {
    const navigate = useNavigate();
    const currentIndex = routesOrder.indexOf(currentRoute);
  
    let totalScroll = 0;
    const scrollThreshold = 150;
    const maxScroll = scrollThreshold * 2;  // ou toute autre valeur que vous trouvez appropriée
  
    const handleScroll = (event) => {
      // Ajouter l'animation à la première détection du scroll
      document.body.querySelector('.page-container').classList.add('begin-scroll-animation');
      setTimeout(() => {
        document.body.querySelector('.page-container').classList.remove('begin-scroll-animation');
      }, 300);
  
      totalScroll += event.deltaY;
  
      // Réinitialiser totalScroll s'il dépasse les limites
      if (currentIndex === 0 && totalScroll < 0) totalScroll = 0; // Si on est en haut et qu'on essaie de scroller vers le haut
      if (currentIndex === routesOrder.length - 1 && totalScroll > 0) totalScroll = 0; // Si on est en bas et qu'on essaie de scroller vers le bas
      if (Math.abs(totalScroll) > maxScroll) totalScroll = Math.sign(totalScroll) * maxScroll; // Ne permet pas un scroll trop excessif
  
      if (totalScroll > scrollThreshold && currentIndex < routesOrder.length - 1) {
        totalScroll = 0;
        navigate(routesOrder[currentIndex + 1]);
      } else if (totalScroll < -scrollThreshold && currentIndex > 0) {
        totalScroll = 0;
        navigate(routesOrder[currentIndex - 1]);
      }
    };
  
    useEffect(() => {
      window.addEventListener('wheel', handleScroll);
      return () => window.removeEventListener('wheel', handleScroll);
    }, [currentRoute]);
  
    return handleScroll;
  };
  

export default useScrollNavigation;

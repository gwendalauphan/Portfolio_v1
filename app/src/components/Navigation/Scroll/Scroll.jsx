import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useCallback } from 'react';
import throttle from 'lodash/throttle'; // Assurez-vous d'importer throttle de lodash
import './Scroll.css'
import { useScroll } from '../../Context/ScrollContext';

const routesOrder = ['/', '/about', '/work', '/projects', '/contact', '/more'];


const useScrollNavigation = (currentRoute, isEnabled) => {
    const { setHasScrolled } = useScroll();
    const navigate = useNavigate();
    const currentIndex = routesOrder.indexOf(currentRoute);

    let totalScroll = 0;
    const scrollThreshold = 150;
    const maxScroll = scrollThreshold * 2;

    // Référence pour éviter de rechercher à chaque fois
    const pageContainer = useRef(document.body.querySelector('.page-container'));

    const handleScroll = useCallback(throttle((event) => {

        // Le code existant de handleScroll
        // Remplacez les appels à querySelector avec pageContainer.current

        // Si le bouton Ctrl est pressé
        if (event.ctrlKey) return;

        // Vérifier si la page est entièrement défilée
        const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
        const atTop = window.scrollY === 0;

        // S'il y a encore du contenu à voir dans la page actuelle, ne pas déclencher la navigation
        if (event.deltaY > 0 && !atBottom) return;
        if (event.deltaY < 0 && !atTop) return;

        // Ajouter l'animation à la première détection du scroll
        pageContainer.current.classList.add('begin-scroll-animation');
        setTimeout(() => {
            pageContainer.current.classList.remove('begin-scroll-animation');
        }
        , 300);

        totalScroll += event.deltaY;

        // Réinitialiser totalScroll s'il dépasse les limites
        if (currentIndex === 0 && totalScroll < 0) totalScroll = 0; // Si on est en haut et qu'on essaie de scroller vers le haut
        if (currentIndex === routesOrder.length - 1 && totalScroll > 0) totalScroll = 0; // Si on est en bas et qu'on essaie de scroller vers le bas
        if (Math.abs(totalScroll) > maxScroll) totalScroll = Math.sign(totalScroll) * maxScroll; // Ne permet pas un scroll trop excessif

        if (totalScroll > scrollThreshold && currentIndex < routesOrder.length - 1) {
            setHasScrolled(false);
            totalScroll = 0;
            navigate(routesOrder[currentIndex + 1]);
        } else if (totalScroll < -scrollThreshold && currentIndex > 0) {
            setHasScrolled(false);
            totalScroll = 0;
            navigate(routesOrder[currentIndex - 1]);
        }


    }, 100), [currentIndex]); // Ici, 100ms est un délai de throttle. Ajustez-le au besoin.

    useEffect(() => {
        if (!isEnabled) {
            window.addEventListener('wheel', handleScroll);
        }

        return () => {
            window.removeEventListener('wheel', handleScroll);
            handleScroll.cancel(); // Annuler le throttle en cours lors du nettoyage
        };
    }, [currentRoute, isEnabled, handleScroll]); // Ajouter handleScroll aux dépendances

    return handleScroll;
};

export default useScrollNavigation;

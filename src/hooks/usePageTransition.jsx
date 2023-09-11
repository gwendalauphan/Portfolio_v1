import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageRotations } from '../constants'

function usePageTransition(setTargetRotation, currentRotation) {
    const location = useLocation();

    useEffect(() => {
        const pageId = location.pathname.replace('/', '') || 'home';
        const coordinates = pageRotations[pageId];

        // Si nous sommes sur la page d'accueil, reset la rotation
        if (pageId === 'home') {
            setTargetRotation({ x: 0, y: 0 });
            return;
        }

        if (coordinates) {
            // Votre logique pour déterminer la rotation cible en fonction de la rotation actuelle
            const targetX = currentRotation.current.x + coordinates.x;
            const targetY = currentRotation.current.y + coordinates.y;

            setTargetRotation({ x: targetX, y: targetY });
        }
    }, [location, setTargetRotation]);
}

export default usePageTransition;
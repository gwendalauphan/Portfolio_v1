import React from 'react';
import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';
const World3Page = () => {
  const location = useLocation();

  useScrollNavigation(location.pathname);
  return (
    <div className='page-container'>
      <h2>Monde 3</h2>
      <p>Le Monde 3 est mystérieux. Que découvrirez-vous ?</p>
    </div>
  );
}

export default World3Page;

import React from 'react';
import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

const World4Page = () => {
  const location = useLocation();

  useScrollNavigation(location.pathname);
  return (
    <div className='page-container'>
      <h2>Monde 4</h2>
      <p>Le dernier monde, Monde 4. Profitez de votre exploration !</p>
    </div>
  );
}

export default World4Page;

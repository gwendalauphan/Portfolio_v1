import React, { useContext } from 'react';
import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

import { ToggleContext } from '../components/Context/ToggleContext';

const ContactPage = () => {
  const location = useLocation();

  const { isEnabled } = useContext(ToggleContext);

  useScrollNavigation(location.pathname);
  return (
    <div className={`page-container ${!isEnabled ? '' : 'masque'}`}>
      <h2>Monde 3</h2>
      <p>Le Monde 3 est mystérieux. Que découvrirez-vous ?</p>
    </div>
  );
}

export default ContactPage;

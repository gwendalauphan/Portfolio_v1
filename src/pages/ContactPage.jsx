import React, { useContext } from 'react';
import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

import { ToggleContext } from '../components/Context/ToggleContext';

import Form from '../components/Contact/Form/Form';

const ContactPage = () => {
  const location = useLocation();

  const { isEnabled } = useContext(ToggleContext);

  useScrollNavigation(location.pathname, isEnabled);
  
  return (
    <div className={`page-container ${!isEnabled ? '' : 'masque'}`}>

      <Form />
    </div>
  );
}

export default ContactPage;

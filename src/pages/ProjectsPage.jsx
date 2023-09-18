import React from 'react';
import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

const ProjectsPage = ({ isEnabled }) => {
  const location = useLocation();

  useScrollNavigation(location.pathname);
  return (
    <div className={`page-container ${!isEnabled ? '' : 'masque'}`}>
      <h2>Monde 2</h2>
      <p>Bienvenue dans le Monde 2. Quelles aventures vous attendent ici ?</p>
    </div>
  );
}

export default ProjectsPage;

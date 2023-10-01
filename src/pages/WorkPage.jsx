import React, { useContext } from 'react';
import { motion } from "framer-motion";

import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

import SectionWrapper from '../hoc/SectionWrapper';

import { ToggleContext } from '../components/Context/ToggleContext';

import Experience from '../components/Experiences/Missions/Missions';

const pageVariants = {
  initial: { scale: 0.9, y: "-50%", opacity: 0 },
  in: { scale: 1, y: "0%", opacity: 1 },
  out: { scale: 0.75, y: "-50%", opacity: 0 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
};


const WorkPage = () => {
  const location = useLocation();

  const { isEnabled } = useContext(ToggleContext);

  useScrollNavigation(location.pathname, isEnabled);
  
  return (
    
    <div className={`page-container ${!isEnabled ? '' : 'masque'}`}>

      <Experience />
      
    </div>
    
  );
}

export default SectionWrapper(WorkPage, "work");

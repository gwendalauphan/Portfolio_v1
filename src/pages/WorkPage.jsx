import React, { useContext } from 'react';
import { motion } from "framer-motion";

import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

import SectionWrapper from '../hoc/SectionWrapper';

import { ToggleContext } from '../components/Context/ToggleContext';

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

  useScrollNavigation(location.pathname);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      
    >
    <div className={`page-container ${!isEnabled ? '' : 'masque'}`}>

      <h2>Monde 1</h2>
      <p>Vous êtes maintenant dans le Monde 1. Explorez et découvrez ses merveilles !</p>
    </div>
    </motion.div>
  );
}

export default SectionWrapper(WorkPage, "");

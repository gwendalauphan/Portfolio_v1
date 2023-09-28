import React, { useContext } from 'react';
import { motion } from "framer-motion";

import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

import SectionWrapper from '../hoc/SectionWrapper';
import About from '../components/Intro/About/About';
import Tech from '../components/Experiences/Tech/Tech';

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


const AboutPage = () => {
  const location = useLocation();

  const { isEnabled } = useContext(ToggleContext);

  useScrollNavigation(location.pathname, isEnabled);
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      
    >
    <div className={`page-container ${!isEnabled ? '' : 'masque'}`}>

      <About />
      <Tech />
    </div>
    </motion.div>
  );
}

export default SectionWrapper(AboutPage, "");

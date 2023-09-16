import React from 'react';
import { motion } from "framer-motion";

import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';

import SectionWrapper from '../hoc/SectionWrapper';
import About from '../components/Intro/About/About';

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


const World1Page = () => {
  const location = useLocation();

  useScrollNavigation(location.pathname);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      
    >
    <div className='page-container'>

      <h2>Monde 1</h2>
      <p>Vous êtes maintenant dans le Monde 1. Explorez et découvrez ses merveilles !</p>
      <About />
    </div>
    </motion.div>
  );
}

export default SectionWrapper(World1Page, "");

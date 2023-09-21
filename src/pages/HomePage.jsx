import React, { useContext } from 'react';

import HomeSection from '../components/Intro/Home/Home2';

import { styles } from '../styles';
import "../index.css"

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

const HomePage = () => {
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
      <div className={`page-container mt-10 ${!isEnabled ? '' : 'masque'}`}>
        <div className={`${styles.paddingX}  ml-40 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Gwendal</span>
            </h1>
          </div>
          
        </div>
        <div className="home-section-parent">
          <HomeSection />
        </div>

        </div>
        
      
    </motion.div>
  );
}

export default HomePage;

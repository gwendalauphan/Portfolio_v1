import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../components/Intro/About/About';

import { motion } from "framer-motion";
import useScrollNavigation from '../components/Navigation/Scroll/Scroll';
import { useLocation } from 'react-router-dom';


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
        <h2>Page d'Accueil</h2>
        <p>Bienvenue sur la page d'accueil ! Naviguez vers les mondes pour explorer davantage.</p>
        <About />
      </div>
    </motion.div>
  );
}

export default HomePage;

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import useScrollNavigation from "../components/Navigation/Scroll/Scroll";
import { useLocation } from "react-router-dom";

import SectionWrapper from "../hoc/SectionWrapper";

import { ToggleContext } from "../components/Context/ToggleContext";

import Experience from "../components/Experiences/Missions/Missions";

import { useScroll } from "../components/Context/ScrollContext";



const pageVariants = {
  initial: { scale: 0.9, y: "-50%", opacity: 0 },
  in: { scale: 1, y: "0%", opacity: 1 },
  out: { scale: 0.75, y: "-50%", opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const WorkPage = () => {

  const location = useLocation();

  const { setHasScrolled } = useScroll();
  
  useEffect(() => {
    setHasScrolled(false);
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setHasScrolled(true);
    }, 20);

    return () => clearTimeout(timer); 
  }, [location.pathname]); // Déclenchez l'effet à chaque changement de route
  

  const { isEnabled } = useContext(ToggleContext);

  useScrollNavigation(location.pathname, isEnabled);

  useEffect(() => {
    if (isEnabled) {
      document.body.classList.add("no-select");
    } else {
      document.body.classList.remove("no-select");
    }
  }, [isEnabled]);

  
  return (
    
    <div className={`page-container ${!isEnabled ? "" : "masque"}`}>
    
      <Experience />

    </div>
    
  );
};

export default SectionWrapper(WorkPage, "work");

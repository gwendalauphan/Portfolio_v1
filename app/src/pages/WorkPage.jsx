import React, { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";

import SectionWrapper from "../hoc/SectionWrapper";

import { ToggleContext } from "../components/Context/ToggleContext";

import Experience from "../components/Experiences/Missions/Missions";
import Experience_mobile from "../components/Experiences/Missions/Missions_mobile";

import { useScroll } from "../components/Context/ScrollContext";

import useIsMobile from "../hooks/useIsMobile";

//import useScrollNavigation from "../components/Navigation/Scroll/Scroll";

const WorkPage = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

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

  //useScrollNavigation(location.pathname, isEnabled); //Utilisation de la navigation par scroll (haut et bas de page)

  useEffect(() => {
    if (isEnabled) {
      document.body.classList.add("no-select");
    } else {
      document.body.classList.remove("no-select");
    }
  }, [isEnabled]);

  return (
    <div className={`page-container ${!isEnabled ? "" : "masque"}`}>
      {isMobile ? (
        <Experience_mobile />
      ) : (
        <Experience />
      )}
    </div>
  );
};

export default SectionWrapper(WorkPage, "work");

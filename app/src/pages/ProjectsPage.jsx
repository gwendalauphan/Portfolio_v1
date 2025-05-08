import { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { ToggleContext } from "../components/Context/ToggleContextDefinition";

import Projects from "../components/Works/Projects/Projects";

import { useScroll } from "../hooks/useScroll";

//import useScrollNavigation from "../components/Navigation/Scroll/Scroll";

const ProjectsPage = () => {
  const location = useLocation();

  const { setHasScrolled } = useScroll();

  useEffect(() => {
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
      <Projects />
    </div>
  );
};

export default ProjectsPage;

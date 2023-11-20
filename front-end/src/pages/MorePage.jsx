import React, { useContext, useEffect } from "react";

import { ToggleContext } from "../components/Context/ToggleContext";

import SectionWrapper from "../hoc/SectionWrapper";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

//import { useLocation } from "react-router-dom";
//import useScrollNavigation from "../components/Navigation/Scroll/Scroll";

const MorePage = () => {
  

  const { isEnabled } = useContext(ToggleContext);

  //const location = useLocation();
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
      <motion.div className="mb-4" variants={textVariant()}>
        <p className={`${styles.sectionSubText} keyword-blue`}>In My Mind</p>
        <h2
          className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}
        >
          <span className="keyword-purple">More.</span>
        </h2>
      </motion.div>
      <div className="inner-div" style={{ flex: 1 }}>
        <pre
          className="code-snippet mt-6"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            marginBottom: "24px",
          }}
        >
          <span className="prompt">gwendal@portfolio:~$</span>{" "}
          <span className="command">${"ls ~/more/ | less"}</span>
        </pre>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "7rem", // cela déplace le texte vers le bas
          height: "30vh", // cela prend la moitié de la hauteur de la fenêtre
          fontWeight: "bold",
          fontSize: "7rem", // ajustez cette taille selon ce qui semble bon pour vous
          textShadow: "30px 30px 40px black", // ceci ajoute une ombre noire prononcée
        }}
      >
        Coming Soon!!
      </div>
    </div>
  );
};

export default SectionWrapper(MorePage, "MorePage");

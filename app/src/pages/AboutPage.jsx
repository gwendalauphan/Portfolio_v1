import { useContext, useEffect, useState, useRef } from "react";

import { useLocation } from "react-router-dom";

import About from "../components/Intro/About/About";
import Tech from "../components/Experiences/Tech/Tech";

import { ToggleContext } from "../components/Context/ToggleContextDefinition";

import { useScroll } from "../hooks/useScroll";

//import useScrollNavigation from "../components/Navigation/Scroll/Scroll";

const AboutPage = () => {
  const location = useLocation();

  const { setHasScrolled } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setHasScrolled(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Déclenchez l'effet à chaque changement de route

  const { isEnabled } = useContext(ToggleContext);

  //useScrollNavigation(location.pathname, isEnabled); //Utilisation de la navigation par scroll (haut et bas de page)

  const [hoveredCardData, setHoveredCardData] = useState(null);
  const parentRef = useRef(null);
  const descriptionRef = useRef(null);
  const [parentTop, setParentTop] = useState(0);
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);

  const handleCardHoverChange = (data) => {
    if (parentRef.current) {
      setParentTop(parentRef.current.getBoundingClientRect().top);
    }

    if (data.isHovered) {
      setHoveredCardData(data);
    } else if (!isDescriptionHovered) {
      // Ne cachez pas la div si la souris est dessus
      setHoveredCardData(null);
    }
  };

  useEffect(() => {
    if (isEnabled) {
      document.body.classList.add("no-select");
    } else {
      document.body.classList.remove("no-select");
    }
  }, [isEnabled]);

  return (
    <>
      <div
        ref={parentRef}
        className={`page-container ${!isEnabled ? "" : "masque"}`}
      >
        <About />

        <Tech onCardHoverChange={handleCardHoverChange} />

        {hoveredCardData && (
          <div
            ref={descriptionRef}
            onMouseEnter={() => setIsDescriptionHovered(true)}
            onMouseLeave={() => {
              setIsDescriptionHovered(false);
              setHoveredCardData(null); // Cachez la div quand la souris quitte la div de description
            }}
            className=" bg-white text-black p-2"
            style={{
              position: "absolute",
              top: `${hoveredCardData.top - parentTop + 20}px`,
              left: `${hoveredCardData.left + hoveredCardData.width / 2}px`,
              transform: "translateX(-50%)", // pour centrer horizontalement
              zIndex: 1000,
            }}
          >
            <div className="text-center font-bold">{hoveredCardData.name}</div>
            {hoveredCardData.description}
            <div className="text-center">
              <a
                href={hoveredCardData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-green cursor-pointer"
                style={{ zIndex: 2000 }}
              >
                Learn More
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutPage;

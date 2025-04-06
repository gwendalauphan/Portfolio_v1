import MarqueeCards from "./Marquee";
import { technologies, tools } from "../../../constants";
import { useInView } from "react-intersection-observer";

import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "../../Context/ScrollContext";

// Card.jsx

const Card = ({ onHoverChange, icon, name, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const cardRef = useRef(null); // 1. Ajoute cette référence

  const handleMouseEnter = () => {
    const rect = cardRef.current.getBoundingClientRect(); // 2. Capture la position et les dimensions

    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
      if (onHoverChange) {
        onHoverChange({
          isHovered: true,
          name: name,
          description: description,
          link: link,
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      }
    }, 500); // Set timeout of 1 second
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current); // Clear the timeout if mouse leaves before 1 second
    setIsHovered(false);
  };

  useEffect(() => {
    if (onHoverChange && !isHovered) {
      onHoverChange({
        isHovered: false,
      });
    }
  }, [isHovered]);

  return (
    <div
      className="p-1 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative image_wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <img src={icon} alt="" className="w-full h-full" />
    </div>
  );
};

const Tech = ({ onCardHoverChange }) => {
  const { hasScrolled } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref} // Attacher la référence ici
      className="w-full flex justify-center mt-10 sm:mt-16 lg:mt-20 mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 max-w-[90%]"
      style={{ maxWidth: "90%" }}
    >
      {inView && hasScrolled && (
        <div className="w-full flex flex-col ">
          <div className="w-full flex flex-col pb-4">
            <MarqueeCards direction="left">
              {technologies.map((technology) => (
                <Card
                  key={technology.name}
                  onHoverChange={onCardHoverChange}
                  icon={technology.icon}
                  name={technology.name}
                  description={technology.description}
                  link={technology.link}
                />
              ))}
            </MarqueeCards>
          </div>

          <div className="w-full flex flex-col pb-4">
            <MarqueeCards direction="right">
              {tools.map((tool) => (
                <Card
                  key={tool.name}
                  onHoverChange={onCardHoverChange}
                  icon={tool.icon}
                  name={tool.name}
                  description={tool.description}
                  link={tool.link}
                />
              ))}
            </MarqueeCards>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tech;

import MarqueeCards from "./Marquee";
import { technologies, tools } from "../../../constants";

import React, { useState, useEffect, useRef } from "react";

// Card.jsx

const Card = ({ icon, name, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 500); // Set timeout of 1 second
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current); // Clear the timeout if mouse leaves before 1 second
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      // Clear the timeout when the component is unmounted
      clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="w-20 h-20 image_wrapper relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={icon} alt="" className="w-full h-full" />
      {isHovered && (
        <div
          className="absolute bg-white text-black p-2"
          style={{
            top: "-5%",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 1000,
          }}
        >
          <div className="text-center font-bold">{name}</div>
          {description}
          <div className="text-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const Tech = () => {
  return (
    <div
      className="w-full flex justify-center mt-20 mx-auto"
      style={{ maxWidth: "90%" }}
    >
      <div className="w-full flex flex-col ">
        <div className="w-full flex flex-col pb-4">
          <MarqueeCards direction="left">
            {technologies.map((technology) => (
              <Card
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
                icon={tool.icon}
                name={tool.name}
                description={tool.description}
                link={tool.link}
              />
            ))}
          </MarqueeCards>
        </div>
      </div>
    </div>
  );
};

export default Tech;

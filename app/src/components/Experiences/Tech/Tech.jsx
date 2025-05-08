import MarqueeCards from "./Marquee";
import { technologies, tools } from "../../../constants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useScroll } from "../../../hooks/useScroll";

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
  }, [isHovered]); // Added 'onHoverChange' to the dependency array

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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full flex justify-center mt-10 sm:mt-16 lg:mt-20 mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 max-w-[90%]"
    >
      {/* le DOM existe toujours ; on anime seulement quand visible */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView && hasScrolled ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full flex flex-col"
      >
        {/* Ligne technologies */}
        <div className="w-full flex flex-col pb-4">
          <MarqueeCards direction="left">
            {technologies.map((t) => (
              <Card key={t.name} onHoverChange={onCardHoverChange} {...t} />
            ))}
          </MarqueeCards>
        </div>

        {/* Ligne outils */}
        <div className="w-full flex flex-col pb-4">
          <MarqueeCards direction="right">
            {tools.map((t) => (
              <Card key={t.name} onHoverChange={onCardHoverChange} {...t} />
            ))}
          </MarqueeCards>
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;

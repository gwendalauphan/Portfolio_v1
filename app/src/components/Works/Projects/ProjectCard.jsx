import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import { github } from "../../../assets";

const fadeInCard = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ProjectCard = ({
  index,
  handleCardDisplay,
  displayedCount,
  name,
  shortDescription,
  longDescription,
  tags,
  media,
  source_code_link,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // L'animation se déclenchera une seule fois
    threshold: 0.1, // L'animation se déclenche lorsque 10% de l'élément est visible
  });

  //const [displayedCardsCount, setDisplayedCardsCount] = useState(0);
  const cardCountedRef = useRef(false);

  useEffect(() => {
    if (inView) {
      handleCardDisplay();
    }
  }, [inView, handleCardDisplay]);

  const [isHoveredImage, setIsHoveredImage] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const handleMouseEnterVideo = () => {
    setIsHoveredImage(true);
    setShouldLoadVideo(true);
  };

  const handleMouseLeaveVideo = () => {
    setIsHoveredImage(false);
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0; // reset to start
    }
    setShouldLoadVideo(false);
  };

  const videoRef = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeInCard("up", "spring", (index - displayedCount) * 0.2, 2)}
      style={{ opacity: isHoveredCard ? 1 : 0.95 }}
      className="inner-div pb-2"
    >
      <motion.div
        animate={{
          scale: isHoveredCard ? 1.05 : 1,
        }} // <-- Ici, nous changeons l'échelle
        transition={{ type: "spring", stiffness: 100 }}
        className={`relative rounded-xl ${
          isHoveredCard ? "shadow-card-project" : ""
        }`}
        //variants={fadeIn("up", "spring", index * 0.2, 2)}
        onMouseEnter={() => setIsHoveredCard(true)}
        onMouseLeave={() => setIsHoveredCard(false)}
      >
        <Tilt
          tiltEnable={false}
          className="bg-black-200 p-5 rounded-2xl xs:w-[360px] sm:w-[360px] w-full"
        >
          <div className="relative w-full ">
            {/* Ajout de la couche d'assombrissement */}

            <motion.div
              animate={{ opacity: isHoveredCard ? 1 : 0.75 }} // rend plus clair lors du survol
              transition={{ duration: 0.2 }}
              className="media-container relative w-full cursor-pointer"
              onMouseEnter={handleMouseEnterVideo}
              onMouseLeave={handleMouseLeaveVideo}
              onClick={() => console.log("Show project clicked")}
            >
              <motion.video
                ref={videoRef}
                preload="none"
                src={shouldLoadVideo ? media.video : undefined}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHoveredImage && media.video ? 1 : 0,
                  scale: isHoveredCard ? 1.07 : 1,
                }}
                transition={{
                  duration: 1,
                  scale: { type: "spring", stiffness: 100 },
                }}
                className="absolute inset-0 object-cover rounded-xl "
              />
              <motion.img
                src={media.image}
                alt={name}
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  opacity: isHoveredImage && media.video ? 0 : 1,
                  scale: isHoveredCard ? 1.07 : 1,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { type: "spring", stiffness: 100 },
                }}
                className=" inset-0 object-cover rounded-xl "
              />

              <div className="absolute -top-10 left-1/2 w-full max-w-full transform -translate-x-1/2 flex justify-center px-2">
                <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight text-shadow-card-project text-center">
                  {name}
                </h3>
              </div>

              <div className="absolute top-2 right-2 z-10">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: isHoveredCard ? 1 : 0.8 }} // rend plus clair lors du survol
            transition={{ duration: 0.1 }}
          >
            <div className="mt-5">
            <p className="mt-2 text-secondary text-xs xs:text-sm sm:text-base leading-relaxed">
              {shortDescription}
            </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-[10px] sm:text-[12px]">
              {tags.technos.map((tag, index) => (
                <p
                  key={`techno-${name}-${tag.name}-${index}`}
                  className={`text-${tag.color}`}
                  style={{ color: tag.color }}
                >
                  {` #${tag.name} `}
                  &nbsp;
                </p>
              ))}
              {tags.themes.map((tag, index) => (
                <p
                  key={`theme-${name}-${tag.name}-${index}`}
                  className={`text-${tag.color}`}
                  style={{ color: tag.color }}
                >
                  {` #${tag.name} `}
                  &nbsp;
                </p>
              ))}
            </div>

            <div className="relative pt-2 pb-3 flex flex-col h-full">
              {" "}
              {/* Conteneur commun */}
              {/* Texte par défaut */}
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{
                  y: isHoveredCard ? -20 : 0,
                  opacity: isHoveredCard ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute text-white flex"
              >
                {tags.frame.map((tag, index) => (
                  <p
                    key={`frame-${name}-${tag.name}-${index}`}
                    className={`text-[12px] sm:text-[14px] text-${tag.color}`}
                  >
                    {` ${tag.name}  -`}
                    &nbsp;
                  </p>
                ))}
              </motion.div>
              {/* Texte au survol */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHoveredCard ? 0 : 20,
                  opacity: isHoveredCard ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute flex items-center space-x-2 text-white text-[14px] sm:text-[16px]"
                onClick={() => console.log("Show project clicked")}
              >
                <span className="text-white hover:text-custom-green cursor-pointer">
                  Show project
                </span>
                <div className="w-8 h-[1px] bg-white"></div>
              </motion.div>
            </div>
          </motion.div>
          {/* ... autres contenus de la carte ... */}
        </Tilt>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

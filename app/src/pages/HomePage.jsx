import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeSection from "../components/Intro/Home/Home";

import { styles } from "../styles";
import "../index.css";

import { motion } from "framer-motion";

import { ToggleContext } from "../components/Context/ToggleContext";

//import { useLocation } from "react-router-dom";
//import useScrollNavigation from "../components/Navigation/Scroll/Scroll";

const pageVariantsTitle = {
  initial: { scale: 0.9, y: "-50%", opacity: 0 },
  in: { scale: 1, y: "0%", opacity: 1 },
  out: { scale: 0.75, y: "-50%", opacity: 0 },
};

const pageVariantsSection = {
  initial: { scale: 0.9, y: "50%", opacity: 0 },
  in: { scale: 1, y: "0%", opacity: 1 },
  out: { scale: 0.75, y: "50%", opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const HomePage = () => {
  

  const { isEnabled } = useContext(ToggleContext);

  useEffect(() => {
    if (isEnabled) {
      document.body.classList.add("no-select");
    } else {
      document.body.classList.remove("no-select");
    }
  }, [isEnabled]);

  return (
    <>
      <div className={`page-container mt-10 xs:mt-14 ${!isEnabled ? "" : "masque"}`}>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsTitle}
          transition={pageTransition}
        >
          <div
            className={`${styles.paddingX} mx-auto flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-20 sm:h-40 md:h-60 lg:h-80 violet-gradient" />

            </div>

            {/* Text content */}
            <div>
              <h1
                className={`${styles.heroHeadText} text-white Home-Title-text-shadow text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
              >
                Hi, I'm <span className="text-[#915EFF]">Gwendal Auphan</span>
              </h1>
              <h2
                className={`${styles.heroSubHeadText} text-white Home-Title-text-shadow mt-2 text-lg sm:text-xl md:text-2xl`}
              >
                Passionate about{" "}
                <span className="text-[#35CFA9]">coding</span> and{" "}
                <span className="text-[#35CFA9]">adventure</span>
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsSection}
          transition={pageTransition}
        >
          <div className="
            mt-[-50px] sm:mt-[-150px] md:mt-[-200px] lg:mt-[-250px]
            overflow-hidden
          ">
            <HomeSection />
          </div>
        </motion.div>

        <div className="absolute w-full flex justify-center items-center">
          <Link to="/about">
            <div className="w-[40px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 shadow-custom border-color-custom">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.75,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3.5 rounded-full bg-secondary mb-2 shadow-custom color-custom"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;

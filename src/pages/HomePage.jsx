import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeSection from "../components/Intro/Home/Home";

import { styles } from "../styles";
import "../index.css";

import { motion } from "framer-motion";
import useScrollNavigation from "../components/Navigation/Scroll/Scroll";
import { useLocation } from "react-router-dom";

import { ToggleContext } from "../components/Context/ToggleContext";

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
  const location = useLocation();

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
    <>
      <div className={`page-container mt-10 ${!isEnabled ? "" : "masque"}`}>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariantsTitle}
          transition={pageTransition}
        >
          <div
            className={`${styles.paddingX}  ml-40 mx-auto flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1
                className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}
              >
                Hi, I'm <span className="text-[#915EFF]">Gwendal Auphan</span>
              </h1>
              <h1
                className={`${styles.heroSubHeadText} text-white Home-Title-text-shadow`}
              >
                Passionate by <span className="text-[#35CFA9]">coding</span> and{" "}
                <span className="text-[#35CFA9]">adventure</span>
              </h1>
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
          <div className="home-section-parent">
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

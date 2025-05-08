import { useRef, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../constants";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";
import { useScroll } from "../../../hooks/useScroll";

import { textVariant } from "../../../utils/motion";

const Projects = () => {
  const { hasScrolled } = useScroll();
  const displayedCardsCountRef = useRef(0);

  const handleCardDisplay = useCallback(() => {
    displayedCardsCountRef.current += 1;
  }, []);

  return (
    <>
      <div className={`page-container`}>
        <motion.div className="mb-4 " variants={textVariant()}>
          <p className={`${styles.sectionSubText} keyword-blue`}>My Opus</p>
          <h2
            className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}
          >
            <span className="keyword-purple">Projects.</span>
          </h2>
        </motion.div>
      </div>
      <div className="inner-div " style={{ flex: 1 }}>
        <pre
          className="code-snippet mt-6 "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            marginBottom: "24px",
          }}
        >
          <span className="prompt">gwendal@portfolio:~$</span>{" "}
          <span className="command">${"ls  ~/projects  -al"}</span>
        </pre>
      </div>

      {hasScrolled && (
        <div className="mt-20 flex flex-wrap gap-10 justify-center w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              handleCardDisplay={handleCardDisplay}
              displayedCount={displayedCardsCountRef.current}
              {...project}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Projects, "Projects", "max-w-9xl");

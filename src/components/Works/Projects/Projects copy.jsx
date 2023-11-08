import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../constants";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";

import { textVariant } from "../../../utils/motion";

function getRowsDistribution(totalProjects) {
  const sqrt = Math.sqrt(totalProjects);
  const potentialRows = Math.floor(sqrt);
  const remainder = totalProjects % potentialRows;

  if (remainder === 0) {
    return Array(potentialRows).fill(totalProjects / potentialRows);
  }

  const baseNumber = Math.floor(totalProjects / potentialRows);
  const rows = Array(potentialRows).fill(baseNumber);
  for (let i = 0; i < remainder; i++) {
    rows[i]++;
  }

  return rows;
}


function Projects() {

  const getRandomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getFarthestIndices = (currentIndex, indices) => {
    let distances = indices.map(index => [index, Math.abs(index - currentIndex)]);
    distances.sort((a, b) => b[1] - a[1]);
    
    // Nous obtenons les deux indices les plus éloignés
    return [distances[0][0], distances[1] && distances[1][0]].filter(Boolean);
};

const generateRandomOrder = (length) => {
    let remainingIndices = Array.from({ length }, (_, i) => i);
    let order = [];
    let current = getRandomIndex(remainingIndices);
    order.push(current);

    while (order.length < length) {
        remainingIndices = remainingIndices.filter(index => index !== current);
        const farthest = getFarthestIndices(current, remainingIndices);
        current = getRandomIndex(farthest);
        order.push(current);
    }

    return order;
};

const alternateOrder = generateRandomOrder(projects.length);

  

  return (
    <>
      <motion.div className="mb-4 px-52" variants={textVariant()}>
        <p className={`${styles.sectionSubText} keyword-blue`}>My Opus</p>
        <h2
          className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}
        >
          <span className="keyword-purple">Projects.</span>
        </h2>
      </motion.div>
      <div className="inner-div px-52" style={{ flex: 1 }}>
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

      <div className="mt-20 flex flex-wrap gap-10 justify-center w-full">
          {projects.map((project, index) => (
            <ProjectCard 
                key={`project-${index}`} 
                index={alternateOrder[index]} // Utilisez l'ordre alterné pour l'animation
                {...project} 
            />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Projects, "Projects", "max-w-9xl");

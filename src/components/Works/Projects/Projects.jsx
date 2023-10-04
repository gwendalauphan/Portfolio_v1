import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../constants";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";

import { textVariant } from "../../../utils/motion";

function Projects() {
  const getRandomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const getFarthestIndices = (currentIndex, indices) => {
    let distances = indices.map((index) => [
      index,
      Math.abs(index - currentIndex),
    ]);
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
      remainingIndices = remainingIndices.filter((index) => index !== current);
      const farthest = getFarthestIndices(current, remainingIndices);
      current = getRandomIndex(farthest);
      order.push(current);
    }

    return order;
  };

  const alternateOrder = generateRandomOrder(projects.length);

  function getRowsDistribution(totalProjects, maxPerRow) {
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

  const projectCount = projects.length;
  const distribution = getRowsDistribution(projectCount, 4);

  let projectIndex = 0;

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
        {distribution.map((count, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-10 w-full">
            {Array.from({ length: count }).map(() => {
              const project = projects[projectIndex++];
              return (
                <ProjectCard
                  key={`project-${projectIndex}`}
                  index={alternateOrder[projectIndex - 1]}
                  {...project}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Projects, "Projects", "max-w-9xl");

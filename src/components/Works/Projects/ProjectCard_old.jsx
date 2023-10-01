import React from 'react';
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";

function ProjectCard({ project ,index }) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt className="tilt bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"         
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}>
      <div className="project-card">
        { /*<img src={project.image} alt={`${project.title} thumbnail`} className="project-image" /> */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-category">{project.category}</p>
        </div>
      </div>
    </Tilt>
    </motion.div>
  );
}

export default ProjectCard;

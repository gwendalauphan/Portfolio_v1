import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from "../../../constants";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";

import { textVariant } from "../../../utils/motion";


function Projects() {


  return (
    <>

    <motion.div className="mb-4" variants={textVariant()}>
    <p className={`${styles.sectionSubText} keyword-blue`}>My Opus</p>
    <h2 className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}><span className="keyword-purple">Projects.</span></h2>
    </motion.div>
    <div className="inner-div" style={{flex: 1}}>
    <pre className="code-snippet mt-6 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', marginBottom: "24px"}}>
            <span className="prompt">gwendal@portfolio:~$</span> <span className="command">${'ls  ~/projects  -al'}</span>
        </pre>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard 
        key={`project-${index}`} 
        index={index} 
        {...project} />
      ))}

    </div>

    </>
  );
}

export default SectionWrapper(Projects, "Projects");

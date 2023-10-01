import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { fadeIn, textVariant } from "../../../utils/motion";

import { github } from "../../../assets";

const ProjectCard = ({ index, name, description, tags, media, source_code_link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
      >

        <div className='relative w-full'>

          
          {isHovered && media.video ? (
            <video src={media.video} autoPlay loop muted playsInline />
          ) : (
            <img src={media.image} alt={name} />
          )}

          <div className='absolute top-[-40px] left-1/2 transform -translate-x-1/2'>
              <h3 className='text-white font-bold text-[28px] text-shadow-card-project'>
                  {name}
              </h3>
          </div>


          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.technos.map((tag, index) => (
              <p
                  key={`techno-${name}-${tag.name}-${index}`}
                  className={`text-[14px] text-${tag.color}`}
                  style={{ color: tag.color }}
              >
                  #{tag.name}
              </p>
          ))}
          {tags.thèmes.map((tag, index) => (
              <p
                  key={`theme-${name}-${tag.name}-${index}`}
                  className={`text-[14px] text-${tag.color}`}
                  style={{ color: tag.color }}
              >
                  #{tag.name}
              </p>
          ))}
      </div>


        
        {/* ... autres contenus de la carte ... */}
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;

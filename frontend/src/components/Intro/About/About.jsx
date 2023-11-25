import React from "react";
import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { fadeIn, textVariant } from "../../../utils/motion";
import { services } from "../../../constants";
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";

import { memoji } from "../../../constants";

import ImageSlider from "./ImageSlider";

import { useInView } from "react-intersection-observer";

import { useScroll } from "../../Context/ScrollContext";

const ServiceCard = ({ index, title, description, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = inView
    ? fadeIn("right", "spring", index * 0.5, 0.75)
    : {
        hidden: { opacity: 0 },
        show: { opacity: 0 },
      };

  return (
    <div ref={ref}>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={animationVariants}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-[20px] py-4  min-h-[280px] flex justify-evenly items-center flex-col"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }} //{/* Adjust RGBA values as needed */}
          >
            <div className="flex flex-row items-center justify-between w-full px-2">
              {" "}
              {/* Conteneur flex pour l'icône et le titre */}
              <img
                src={icon}
                alt="web-development"
                className="w-16 h-16 object-contain mr-4" //{/* Adjust size as needed */}
              />
              <h3 className="text-white text-[20px] font-bold">{title}</h3>
            </div>

            <div className="px-7">
              <p
                className="text-white text-[15px] mt-2 "
                style={{ textAlign: "justify", fontWeight: 450 }}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

const About = () => {
  const { hasScrolled } = useScroll();
  return (
    <>
      <motion.div className="mb-4" variants={textVariant()}>
        <p className={`${styles.sectionSubText} keyword-blue`}>Overview</p>
        <h2
          className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}
        >
          About <span className="keyword-purple">me.</span>
        </h2>
      </motion.div>

      <div className="w-full flex flex-col-reverse sm:flex-row">
        <div className="Home-pageContainer md:w-[75%]">
          <div className="Home-contentSection ">
            <pre className="code-snippet">
              <span className="prompt">gwendal@portfolio:~$</span>{" "}
              <span className="command">uname -a</span>
            </pre>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="Home-sectionSubText"
            >
              Currently finalizing my master's in{" "}
              <span className="keyword-purple">Math-Info</span> with a focus on{" "}
              <span className="keyword-blue">AI</span>, I navigate between the
              realms of academia and my apprenticeship at the{" "}
              <span className="keyword-purple">DGFiP</span>.
              <br />
              <br />
              My computing journey began{" "}
              <span className="keyword-blue">five years ago</span>, leading me
              to explore programming with{" "}
              <span className="keyword-purple">
                Python and C, Data science, DevOps
              </span>
              , and most recently,{" "}
              <span className="keyword-blue">web development</span>.
              <br />
              <br />
              Beyond code, I often delve into philosophical reflections,
              exploring the different facets of life, our society, and our
              being.
              <br />
              <br />
              Always in pursuit of efficiency, I dedicate myself to{" "}
              <span className="keyword-blue">creating solutions</span> that not
              only <span className="keyword-purple">solve problems</span> but
              also bring tangible added value.
            </motion.p>
          </div>
        </div>

        <div className="w-full md:w-[35%] flex items-center justify-center">
          <div className="w-[90%] lg:w-[60%] h-[300px] sm:h-[350px] flex justify-center items-center">
            <ImageSlider images={memoji.image} />
          </div>
        </div>
      </div>

      <div className="separator-bar"></div>

      <motion.div
        className="flex items-center justify-center Experise-Title-text-shadow"
        variants={textVariant()}
      >
        <p className={`${styles.heroSubHeadText} animatedText `}>
          My Expertise
        </p>
      </motion.div>

      {hasScrolled && (
        <div className="mt-10 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");

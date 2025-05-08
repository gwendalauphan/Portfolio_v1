import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../../../utils/motion";
import { styles } from "../../../styles";

import { experiences } from "../../../constants";

import { useScroll } from "../../../hooks/useScroll";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
      className="relative pl-10 sm:pl-20 border-l-2 border-gray-500 mb-10 pr-4"
    >
      {/* Icône dans un cercle */}
      <div
        className="absolute left-[-24px] sm:left-[-28px] top-0 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md"
        style={{ backgroundColor: experience.iconBg }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-2/3 h-2/3 object-contain"
        />
      </div>

      <div className="bg-[#1d1836] text-white p-5 rounded-xl shadow-lg w-full">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
          {experience.title}
        </h3>
        <p className="text-secondary text-sm font-semibold">
          {experience.company_name}
        </p>
        <p className="text-gray-400 text-xs mt-1">{experience.date}</p>

        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.points.map((point, idx) => (
            <li key={`point-${idx}`} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { hasScrolled } = useScroll();
  return (
    <>
      <motion.div className="mb-4" variants={textVariant()}>
        <p className={`${styles.sectionSubText} keyword-blue`}>
          Steps Along my Path
        </p>
        <h2
          className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}
        >
          Work <span className="keyword-purple">Experience.</span>
        </h2>
      </motion.div>

      <div
        className="mt-6 flex flex-col pb-4 your-div-class"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "24px" }}
      >
        <div className="inner-div" style={{ flex: 1 }}>
          <pre
            className="code-snippet mt-6 mr-4 ml-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              marginBottom: "24px",
            }}
          >
            <span className="prompt">gwendal@portfolio:~$</span>{" "}
            <span className="command">${"history 3 > work"}</span>
          </pre>
        </div>

        {hasScrolled &&
          experiences.map((exp, index) => (
            <ExperienceCard
              key={`exp-${index}`}
              experience={exp}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default Experience;

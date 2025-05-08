import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../../../utils/motion";
import { styles } from "../../../styles";

import { experiences } from "../../../constants";

import { useScroll } from "../../../hooks/useScroll";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
          {experience.title}
        </h3>
        <p className="text-secondary text-xs sm:text-sm font-semibold m-0">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white text-xs sm:text-sm tracking-wide pl-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
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

        {hasScrolled && (
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default Experience;

import { motion } from "framer-motion";
import { styles } from "../../../styles";
import { textVariant } from "../../../utils/motion";

const ContactHeader = () => {
  return (
    <>
      <motion.div className="mb-4" variants={textVariant()}>
        <p className={`${styles.sectionSubText} keyword-blue`}>Get in Touch</p>
        <h2
          className={`${styles.heroHeadText} text-white Home-Title-text-shadow`}
        >
          <span className="keyword-purple">Contact.</span>
        </h2>
      </motion.div>
      <div className="inner-div" style={{ flex: 1 }}>
        <pre
          className="code-snippet mt-6"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            marginBottom: "24px",
          }}
        >
          <span className="prompt inline sm:hidden ">g@port:~$</span>
          <span className="prompt hidden sm:inline ">gwendal@portfolio:~$</span>{" "}
          <span className="command">${"ping -c 1 localhost"}</span>
        </pre>
      </div>
    </>
  );
};

export default ContactHeader;

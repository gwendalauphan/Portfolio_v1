import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";

const HomeSection = () => {
    return (
        <motion.div 
            className={`${styles.padding} rounded-xl bg-white bg-opacity-10 mt-8 mx-auto w-4/5`}
            variants={textVariant()}
        >
            <motion.div className="flex flex-col items-start">
                <p className={styles.sectionSubText}>Bienvenue</p>
                <h2 className={styles.heroHeadText}>Prénom Nom</h2>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={`${styles.sectionSubText} mt-2`}
                >
                    Je suis développeur doué en TypeScript et JavaScript, spécialisé en React, Node.js et Three.js. Je collabore étroitement pour fournir des solutions efficaces.
                </motion.p>
                <motion.div 
                    className="mt-4"
                    variants={textVariant()}
                >
                    <p className={styles.sectionSubText}>À propos du site</p>
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                    >
                        Ce site est une exploration des mondes et des technologies. Naviguez entre les sections pour découvrir chaque aspect. Bonne visite !
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SectionWrapper(HomeSection, "HomeSection");



import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";

import { styles2 } from "./Home"
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";

const HomeSection = () => {
    return (
        <div className={`${styles2.pageContainer}`}>
            <div className={`${styles2.contentSection}`}>
                <h1 className={styles.sectionHeadText}>Welcome !</h1>
                <p className={styles.sectionSubText}>
                Salut, je suis Gwendal. Passionné de technologies, je développe des scripts et je maintiens des serveurs Linux.
                </p>
                <p className={styles.sectionSubText}>
                Sur ce site, vous pourrez découvrir différents mondes et naviguer comme bon vous semble. Le but est de vous présenter mon univers, mes compétences et mon portfolio de manière unique.
                </p>
                <h2 className={styles.sectionHeadText}>Bonne navigation !</h2>
            </div>
        </div>
    );
};

export default SectionWrapper(HomeSection, "HomeSection");
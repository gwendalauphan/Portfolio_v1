import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";

import { styles2 } from "./Home"
import { styles } from "../../../styles";
import SectionWrapper from "../../../hoc/SectionWrapper";

const HomeSection = () => {
    return (
        <div className="Home-pageContainer">
            <div className="Home-contentSection">
                <pre className="code-snippet">
                    <span className="prompt">gwendal@portfolio:~$</span> <span className="command">uname -a</span>
                </pre>
                <div className="bash-function">

                <p className="Home-sectionSubText">
                As a <span className="keyword-purple">full-stack developer</span>, 
                I specialize in <span className="keyword-blue"> automation, DevOps, and infrastructure deployment. </span> 
                My expertise spans from data science and web development to incorporating agile methodologies and AI-driven solutions.
                <br></br> Excited for <span className="keyword-purple">new projects</span>
                , I’m always poised to tackle <span className="keyword-blue">fresh challenges.</span>
                </p>
                <br></br>

                    <p className="bash-function-header">
                        <span className="func-keyword">func</span> <span className="func-name">explore</span> <span className="bracket-open">{`(){`}</span>
                    </p>
                    <p className="Home-sectionSubText" style={{ marginLeft: '15px', marginBottom: 0 }}>
                    You've landed in a space-themed universe, enjoy your voyage as you explore my world of code and creativity.
                    </p>
                    <p className="bash-function-footer" style={{ marginBottom: "20px" }}>
                        <span className="bracket-close">{`}`}</span>
                    </p>
                    
                </div>
                <h2 className="Home-sectionHeadText"><span className="hash-symbol">#</span> Happy exploring !</h2>
            </div>
        </div>
    );
};





export default SectionWrapper(HomeSection, "HomeSection");
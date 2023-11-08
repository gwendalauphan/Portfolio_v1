import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideIn } from "../../../utils/motion";

import CosmonauteCanvas from "../../canvas/Cosmonaute";

const Annimation = ({
  isRotating,
  rotationDelta,
  setIsRotating,
  setInitialMousePos,
}) => {
  return (
    <>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-[0.75] xl:h-auto md:h-[550px] h-[350px]"
      >
        <CosmonauteCanvas
          isRotating={isRotating}
          rotationDelta={rotationDelta}
          setIsRotating={setIsRotating}
          setInitialMousePos={setInitialMousePos}
        />
      </motion.div>
    </>
  );
};

export default Annimation;

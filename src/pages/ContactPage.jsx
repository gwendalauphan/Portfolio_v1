import React, { useContext, useState, useEffect } from "react";
import useScrollNavigation from "../components/Navigation/Scroll/Scroll";
import { useLocation } from "react-router-dom";

import { ToggleContext } from "../components/Context/ToggleContext";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import Form from "../components/Contact/Form/Form";
import ContactHeader from "../components/Contact/Header/ContactHeader";
import Annimation from "../components/Contact/Annimation/Annimation";

const ContactPage = () => {
  const location = useLocation();

  const { isEnabled } = useContext(ToggleContext);

  useScrollNavigation(location.pathname, isEnabled);

  useEffect(() => {
    if (isEnabled) {
      document.body.classList.add("no-select");
    } else {
      document.body.classList.remove("no-select");
    }
  }, [isEnabled]);

  const [isRotating, setIsRotating] = useState(false);
  const [initialMousePos, setInitialMousePos] = useState(null);
  const [rotationDelta, setRotationDelta] = useState(null);

  useEffect(() => {
    const handleMouseUp = () => setIsRotating(false);
    const handleMouseMove = (event) => {
      if (!isRotating || !initialMousePos) return;

      const deltaX = event.clientX - initialMousePos.x;
      const deltaY = event.clientY - initialMousePos.y;

      // Ici, nous pourrions utiliser un contexte ou un store global (comme Redux) pour stocker ces valeurs et les utiliser dans le composant `Cosmonaute`. Pour simplifier, je vais les passer directement via les props.

      // TODO : Propagez deltaX et deltaY à votre composant `Cosmonaute`.
      setRotationDelta({ x: deltaX * 0.005, y: deltaY * 0.005 });
      setInitialMousePos({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isRotating, initialMousePos]);

  return (
    <div className={`page-container ${!isEnabled ? "" : "masque"}`}>
      <ContactHeader />
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-20 overflow-hidden`}
      >
        <Form />
        <Annimation
          isRotating={isRotating}
          rotationDelta={rotationDelta}
          setIsRotating={setIsRotating}
          setInitialMousePos={setInitialMousePos}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(ContactPage, "contactPage");

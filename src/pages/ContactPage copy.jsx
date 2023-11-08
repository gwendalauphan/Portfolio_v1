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

import ScrollToTop from "../components/Navigation/ScrollOnTop/ScrollOnTop";

const ContactPage = () => {
  const location = useLocation();

  const { isEnabled } = useContext(ToggleContext);

  useScrollNavigation(location.pathname, isEnabled);

  return (
    <div className={`page-container ${!isEnabled ? "" : "masque"}`}>
      <ContactHeader />
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <Form />
        <Annimation />
      </div>
    </div>
  );
};

export default SectionWrapper(ContactPage, "contactPage");

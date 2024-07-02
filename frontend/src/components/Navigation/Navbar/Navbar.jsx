import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import "./Navbar.scss";
import { menu, close } from "../../../assets";

import LogoSVG from "../../../assets/boussole.svg";
import { navLinks } from "../../../constants";

import { useScroll } from "../../Context/ScrollContext";

function Navbar() {
  const controls = useAnimation();
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  const handleRotate = () => {
    setRotation(rotation + 720);
    controls.start({ rotate: rotation + 720 });
    setTimeout(() => {
      navigate("/");
    }, 100); // attendez que l'animation se termine
  };

  //-----------------------------------

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const { setHasScrolled } = useScroll();

  const handleNavClick = (path) => {
    setHasScrolled(false);
    setActive(path);
  };

  //-----------------------------------

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header flex items-center justify-between ">
      <div
        className="header__logo"
        onClick={handleRotate}
        style={{ cursor: "pointer" }}
      >
        <motion.img
          src={LogoSVG}
          alt="Logo"
          className="w-25 h-20 filter invert brightness-200"
          initial={{ rotate: 0 }}
          animate={controls}
          transition={{ duration: 0.5, ease: "linear" }}
        />
      </div>

      <nav className={`navbar  flex items-center`}>
        <ul className="navbar__menu flex space-x-4 sm:space-x-6 lg:space-x-8 list-none hidden sm:flex flex-row ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`navbar__item`}
              style={{ marginLeft: 0, paddingLeft: 15, paddingRight: 15 }}
              onClick={() => handleNavClick(nav.path)}
            >
              <Link
                to={nav.path}
                className={`navbar__link text-[18px] sm:text-lg lg:text-xl font-medium cursor-pointer 
                                ${
                                  active === nav.path
                                    ? "text-white"
                                    : "text-secondary"
                                } hover:text-white`}
              >
                <nav.icon />
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

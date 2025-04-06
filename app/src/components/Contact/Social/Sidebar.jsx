import React, { Component } from "react";
import { SocialIcon } from "react-social-icons/component";
import { IoIosPaper } from "react-icons/io";
import "react-social-icons/github";
import "react-social-icons/gitlab";
import "react-social-icons/linkedin";
import "react-social-icons/discord";
import "react-social-icons/mailto";

import "./Sidebar.css";
import "./ArrowButton.css";

import { socialMediaHandlesLinks, currilculumVitaeLink  } from "../../../constants";


class Sidebar extends Component {
  state = {
    isSidebarVisible: true,
    isArrowRotated: false,
    iconSize: 40, // default size
  };

  toggleSidebarVisibility = () => {
    this.setState((prevState) => ({
      isSidebarVisible: !prevState.isSidebarVisible,
    }));
  };

  toggleSidebarAndArrowDirection = () => {
    this.toggleSidebarVisibility();
    this.setState((prevState) => ({
      isArrowRotated: !prevState.isArrowRotated,
    }));
  };

  updateIconSize = () => {
    let newSize = 50;
    if (window.innerWidth < 640) {
      newSize = 40;
    } else if (window.innerWidth < 1024) {
      newSize = 50;
    } else {
      newSize = 60;
    }

    this.setState({ iconSize: newSize });
  };

  componentDidMount() {
    this.updateIconSize();
    window.addEventListener("resize", this.updateIconSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIconSize);
  }


  render() {
    const { isSidebarVisible } = this.state;
    const { isArrowRotated } = this.state;

    return (
      <div className="sidebar-container">
        <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
          <ul className="social-handle-list">
            {socialMediaHandlesLinks.map((itemSocial) => (
              <li key={itemSocial.name} className="social-handle-item ">
                <SocialIcon
                  url={itemSocial.url}
                  style={{
                    height: this.state.iconSize,
                    width: this.state.iconSize,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor={itemSocial.bgColor ? itemSocial.bgColor : undefined}
                  fgColor={itemSocial.fgColor ? itemSocial.fgColor : undefined}
                />
              </li>
            ))}
          </ul>
          <a
            href={currilculumVitaeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12"
          >
            <IoIosPaper className="xs:h-6 sm:h-8 xs:w-6 sm:w-8" />
          </a>
        </div>
        <div
          className={`arrow ${isArrowRotated ? "rotated" : ""}`}
          onClick={this.toggleSidebarAndArrowDirection}

        >
          <span
          style={{
            width: "15px",
            height: "15px",
          }}></span>

          <span
          style={{
            width: "15px",
            height: "15px",
          }}></span>
        </div>
      </div>
    );
  }
}

export default Sidebar;

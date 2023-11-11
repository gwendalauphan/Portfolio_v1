import React, { Component } from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/gitlab";
import "react-social-icons/linkedin";
import "react-social-icons/discord";
import "react-social-icons/mailto";

import "./Sidebar.css";
import "./ArrowButton.css";

const socialMediaHandlesLinks = [
  {
    name: "gitlab",
    url: "https://gitlab.com/gwendalauphan",
    bgColor: "#D2691E",
  },
  { name: "github", url: "https://github.com/gwendal95" },
  { name: "discord", url: "https://discord.com/users/422845843431882752" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/gwendal-auphan-5519a3214/",
  },
  {
    name: "mailto",
    url: "mailto:gwendalauphan@proton.me",
    bgColor: "brown",
    fgColor: "AliceBlue",
  },
];

class Sidebar extends Component {
  state = {
    isSidebarVisible: true,
    isArrowRotated: false,
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

  render() {
    const { isSidebarVisible } = this.state;
    const { isArrowRotated } = this.state;

    return (
      <div className="sidebar-container">
        <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
          <ul className="social-handle-list">
            {socialMediaHandlesLinks.map((itemSocial) => (
              <li key={itemSocial.name} className="social-handle-item">
                <SocialIcon
                  url={itemSocial.url}
                  style={{ height: 50, width: 50 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor={itemSocial.bgColor ? itemSocial.bgColor : undefined}
                  fgColor={itemSocial.fgColor ? itemSocial.fgColor : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`arrow ${isArrowRotated ? "rotated" : ""}`}
          onClick={this.toggleSidebarAndArrowDirection}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Sidebar;

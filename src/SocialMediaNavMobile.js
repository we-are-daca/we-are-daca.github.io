import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";

class SocialMediaNavMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStyle: {
        height: "100%",
        left: 0,
        width: 0,
        top: 0,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        zIndex: 1,
        position: "fixed"
      },
      menuContent: {
        display: "none",
        position: "relative",
        top: "10%" /* 25% from the top */,
        width: "100%" /* 100% width */,
        textAlign: "center" /* Centered text/links */,
        marginTop:
          "30px" /* 30px top margin to avoid conflict with the close button on smaller screens */,
        zIndex: 2
      }
    };
  }

   handleMenu = () => {
    this.setState({
      isMenuOpen: true,
      menuStyle: {
        ...this.state.menuStyle,
        width: "100%",
        opacity: 1
      },
      menuContent: {
        ...this.state.menuContent,
        display: "block"
      }
    });
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
      menuStyle: {
        ...this.state.menuStyle,
        width: "0%",
        opacity: 0
      },
      menuListStyle: {
        display: "none"
      }
    });
  };

  render = () => (
    <div className="mobile-menu" style={this.state.menuStyle}>
      <div className="overlay-content" style={this.state.menuContent}>
        <NavLink to="/" activeClassName="">
          Stories
        </NavLink>
        <NavLink to="/statistics" activeClassName="">
          Statistics
        </NavLink>
        <NavLink to="/how-to-help" activeClassName="">
          How To Help
        </NavLink>
        <NavLink to="/about" activeClassName="">
          About
        </NavLink>
        <div>
          <a
            href={"https://www.facebook.com/Faces-of-DACA-131331447563706/"}
            target={"_blank"}
          >
            <img id="facebook" src={Facebook} />
          </a>
        </div>
        <div>
          <a href={"https://www.instagram.com/facesofdaca/"} target={"_blank"}>
            <img
              src={Instagram}
              href={"https://www.instagram.com/facesofdaca/"}
              target={"_blank"}
            />
          </a>
        </div>
        <div>
          <a href={"https://twitter.com/facesofdaca"} target={"_blank"}>
            <img src={Twitter} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaNavMobile;

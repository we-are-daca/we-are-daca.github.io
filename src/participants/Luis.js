import React from "react";
import Loading from "react-loading-bar";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import "react-loading-bar/dist/index.css";
import Info from "../common/Info";
import "../App.css";

import ScrollAnimation from "react-animate-on-scroll";
import ScrollLock from "react-scrolllock";
import MdClose from "react-icons/lib/md/close";
import MdMenu from "react-icons/lib/md/menu";
import Arrow from "react-icons/lib/fa/angle-down";
import Sticky from "react-stickynode";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Billboard from "../img/billboard.jpg";
import { NavLink } from "react-router-dom";

class Luis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "Luis",
      occupation: "Software Engineer",
      timeSinceArrival: "15",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "September 30, 2017",
      isMenuOpen: false,
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
      },
      portraitStyle: {
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/luis_portrait_2.jpg)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "none",
        backgroundSize: "cover",
        height: 400
      }
    };

    this.mobileNavStyle = {
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
      marginTop: 0
    };

    setTimeout(() => {
      this.setState({ show: true });
    }, 1);
  }

  imageLoaded = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 500);
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  determinePath() {
    let path = "";
    switch (window.location.pathname) {
      case "/":
        "Stories";
        path = "Stories";
        break;
    }
    return path;
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

  render() {
    console.log(this.state);
    return (
      <div className="participant">
        <div className="flex-container">
          <Sticky enabled={true}>
            <div className="sidenav">
              <div className="title">
                <ScrollAnimation
                  animateIn={"fadeIn"}
                  animateOnce={"true"}
                  offset={-10}
                >
                  <span>{"Faces Of Daca"}</span>
                </ScrollAnimation>
              </div>
              <div className="navigation">
                <ul>
                  <ScrollAnimation animateIn={"fadeIn"} animateOnce={"true"}>
                    <li>
                      <NavLink to="/" activeClassName="links">
                        Stories
                      </NavLink>
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn={"fadeIn"} animateOnce={"true"}>
                    <li>
                      <NavLink
                        to="/statistics"
                        activeClassName="links"
                      />Statistics
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn={"fadeIn"} animateOnce={"true"}>
                    <li>
                      <NavLink to="/help" activeClassName="links" />How To Help
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn={"fadeIn"}
                    animateOnce={"true"}
                    offset={50}
                  >
                    <li>
                      <NavLink to="/help" activeClassName="links" />About
                    </li>
                  </ScrollAnimation>
                  <div className="social">
                    <div>
                      <div>
                        <img id="facebook" src={Facebook} />
                      </div>
                      <div>
                        <img src={Instagram} />
                      </div>
                      <div>
                        <img src={Twitter} />
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </Sticky>
          <div className="main">
            <div className="mobile-menu" style={this.state.menuStyle}>
              <div className="overlay-content" style={this.state.menuContent}>
                <NavLink to="/" activeClassName="">
                  Stories
                </NavLink>
                <NavLink to="/statistics" activeClassName="">
                  Statistics
                </NavLink>
                <NavLink to="/help" activeClassName="">
                  How To Help
                </NavLink>
                <NavLink to="/help" activeClassName="">
                  About
                </NavLink>
              </div>
            </div>
            {this.state.isMenuOpen && <ScrollLock />}
            <div className="profile">
              <div className="">
                <div className="portrait" style={this.state.portraitStyle}>
                  <MediaQuery query="(max-width: 1224px)">
                    <div className="mobile-nav" style={this.mobileNavStyle}>
                      {this.state.isMenuOpen ? (
                        <MdClose
                          size={36}
                          onClick={this.closeMenu}
                          className="menu-close"
                          color={"black"}
                          style={{ margin: 5 }}
                        />
                      ) : (
                        <MdMenu
                          size={36}
                          onClick={this.handleMenu}
                          className="menu-icon"
                          color={"white"}
                          style={{ margin: 5 }}
                        />
                      )}
                    </div>
                  </MediaQuery>
                </div>
              </div>
              <div className="">
                <div className="dacamentor-name">
                  {`${this.state.name}'s Journey`}
                </div>
              </div>
              <div className="">
                <div className="dacamentor-border-container">
                  <div className="dacamentor-border" />
                </div>
              </div>
              <div className="info-container">
                <Info
                  years={this.state.timeSinceArrival}
                  date={this.state.interviewDate}
                  occupation={this.state.occupation}
                  country={this.state.country}
                />
              </div>
              <div className="">
                <div className="dacamentor-endborder-container">
                  <div className="dacamentor-endborder" />
                </div>
              </div>
              <div className="">
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Tell me a bit about your early years and where you come from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "eofinwoinfowaenf;ow weofnawe;ofn;iowefn;owe ;oefnoawenfo;iwen"
                      }
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Luis;

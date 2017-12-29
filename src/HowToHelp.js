import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Pie } from "react-chartjs-2";
import ReactGA from "react-ga";
import "./App.css";
import "./about.css";
import "./statistics.css";

import ScrollLock from "react-scrolllock";
import MdClose from "react-icons/lib/md/close";
import MdMenu from "react-icons/lib/md/menu";
import Arrow from "react-icons/lib/fa/angle-down";
import Sticky from "react-stickynode";
import SocialMediaNav from "./SocialMediaNav";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";
import Billboard from "./img/billboard.jpg";
import { NavLink } from "react-router-dom";
import Card from "./Card";

class HowToHelp extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-111454076-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
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
        backgroundImage:
          "url(https://dwistynbcri9g.cloudfront.net/statistics_cover.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "none",
        height: "450px",
        width: "90%",
        margin: "0 auto",
        position: "relative",
        filter: "brightness(40%) contrast(70%)"
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
    const data01 = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 278 },
      { name: "Group F", value: 189 }
    ];
    return (
      <div className="participant">
        <div className="flex-container">
          <Sticky enabled={true}>
            <div className="sidenav">
              <div className="title">
                <span>{"Faces Of Daca"}</span>
              </div>
              <SocialMediaNav />
            </div>
          </Sticky>
          <div className="main about-container">
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
                    href={
                      "https://www.facebook.com/Faces-of-DACA-131331447563706/"
                    }
                    target={"_blank"}
                  >
                    <img id="facebook" src={Facebook} />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://www.instagram.com/facesofdaca/"}
                    target={"_blank"}
                  >
                    <img
                      src={Instagram}
                      href={"https://www.instagram.com/facesofdaca/"}
                      target={"_blank"}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://twitter.com/faces_of_daca"}
                    target={"_blank"}
                  >
                    <img src={Twitter} />
                  </a>
                </div>
              </div>
            </div>
            {this.state.isMenuOpen && <ScrollLock />}
            <div className="profile">
              <div className="">
                <div className="portrait-title">
                  <MediaQuery query="(max-width: 1224px)">
                    <div
                      className="mobile-nav about-nav"
                      style={this.mobileNavStyle}
                    >
                      {this.state.isMenuOpen ? (
                        <MdClose
                          size={40}
                          onClick={this.closeMenu}
                          className="menu-close"
                          color={"black"}
                          style={{ margin: 10 }}
                        />
                      ) : (
                        <MdMenu
                          size={40}
                          onClick={this.handleMenu}
                          className="menu-icon"
                          color={"black"}
                          style={{ margin: 10 }}
                        />
                      )}
                    </div>
                  </MediaQuery>
                  <p>DREAM ACT NOW.</p>
                </div>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"Call Your Representative"}</b>
                </p>
                <p>
                  {
                    "Urge Congress to pass a legitimate DREAM Act today by calling your local congressman or the Speaker of the House, Paul Ryan. Find your representative and inform them that you stand with the 800,000 DREAMers, who, without a long-term legislation, are at risk of losing their livelihoods as result of deportation. "
                  }
                </p>
                <div className="help-button-container">
                  <a href="https://callyourrep.co" target="_blank">
                    <div className="help-button">
                      <p>{"Find Your Rep"}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"RSVP our Event"}</b>
                </p>
                <p>
                  {
                    "On January 25, 2017, our team is hosting an event in celebration of the launch of our storytelling project. At this event, we will have panelists sharing their experiences as an extension to the interviews conducted for facesofdaca.us."
                  }
                </p>
                <div className="help-button-container">
                  <a
                    href="http://tinyurl.com/facesodaca-firesidechat-rsvp"
                    target="_blank"
                  >
                    <div className="help-button">
                      <p>{"RSVP Now"}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"Social Media Presence"}</b>
                </p>
                <p>
                  {
                    "A call for action can be as easy as sending a 280-character tweet. Therefore, by having a social media presence you can support DACA recipients by tweeting your local congressman or supporting our website by using the hashtag, #FACESOFDACA, to spread the urgency of our goal and mission to have Congress pass a long-term immigration policy."
                  }
                </p>
                <div className="help-button-container">
                  <a
                    href="https://docs.google.com/document/d/1WgvT3j0ez06mNJKqSIqMMNV7zId-4xO7CKjD7H_0Ew8/edit"
                    target="_blank"
                  >
                    <div className="help-button">
                      <p>{"Tweet"}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"Share Your Story"}</b>
                </p>
                <p>
                  {
                    "Are you DACA recipient? Do you have a story you would like to share with us? Register your contact information for our interviewee list. Your information will only be disclosed to our team, and it will provide you the chance to be placed on our weekly series of stories, which will be advertised on the Faces of DACA website as well as our website’s social media outlet."
                  }
                </p>
                <div className="help-button-container">
                  <a
                    href="https://docs.google.com/forms/d/1PsWFJ-izHmkEOkPuzhvT82WnL5Ql3_vI74ppM7HwDQI"
                    target="_blank"
                  >
                    <div className="help-button">
                      <p>{"Register"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowToHelp;

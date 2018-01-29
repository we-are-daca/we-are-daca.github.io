import React from "react";
import { PulseLoader } from "react-spinners";
import TextField from "material-ui/TextField";
import { orange800 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Pie } from "react-chartjs-2";
import ReactGA from "react-ga";
import SignaturePad from "signature_pad/dist/signature_pad.js";
import "./App.css";
import "./about.css";
import "./letter.css";
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

const data = {
  labels: ["Men", "Women"],
  datasets: [
    {
      data: [14, 11],
      backgroundColor: ["#e67e00", "#F2BF7F"],
      hoverBackgroundColor: ["#e67e00", "#F2BF7F"]
    }
  ]
};

class Privacy extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-111454076-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      isMenuOpen: false,
      isSendingLetter: false,
      name: "",
      email: "",
      isNameValid: true,
      isEmailValid: true,
      hasSigned: true,
      hasSentLetter: localStorage.getItem("fod-hartnell-letter"),
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
        top: "5%" /* 25% from the top */,
        width: "100%" /* 100% width */,
        textAlign: "center" /* Centered text/links */,
        marginTop:
          "30px" /* 30px top margin to avoid conflict with the close button on smaller screens */,
        zIndex: 2
      },
      portraitStyle: {
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

  renderPolicy = () => (
    <div>
      <div className="about-header project">
        <p>
          <b>{"Who we are and what this privacy policy covers."}</b>
        </p>
        <p>
          {
              'Hello! We are the folks behind Faces Of DACA, a storytelling project. Our mission is to collect stories that realize the struggle and celebrates the resilience of DACA recipients. Congress failed to agree on a long term solution before the end of 2017 and we hope to be part of the needle that\'s actively pushing our government to swiftly resolve the removal of #DACA and enact a long term solution.'
          }
        </p>
        <p>
          {
            "This Privacy Policy applies to information that we collect about you when you use facesofdaca.us."
          }
        </p>
        <p>
          {
              "Throughout this Privacy Policy we’ll refer to our website collectively as “Services.”"
          }
        </p>
         <p>
          {
              "Below we explain how we collect, use, and share information about you, along with the choices that you have with respect to that information."
          }
        </p>
      </div>
      <div className="about-header project">
        <p>
          <b>{"Information we collect."}</b>
        </p>
        <p>
          {
              "We only collect information about you if we have a reason to do so–for example, to provide our Services, to communicate with you, or to make our Services better."
          }
        </p>
        <p>
          {
              "We collect information in two ways: if and when you provide information to us, and automatically through operating our services. Let’s go over the information that we collect."
          }
        </p>
      </div>
      <div className="about-header project">
        <p>
          <b>{"Information You Provide to Us."}</b>
        </p>
        <p>
          {
              "It’s probably no surprise that we collect information that you provide to us. The amount and type of information depends on the context and how we use the information. Here are some examples:"
          }
        </p>
        <p>
          {
              "We ask for your name, email and signature for our letter co-sponsored by the Hartnell Foundation to send to our representatives."
          }
        </p>
        <p>
          {
              "We collect some information automatically. Like most online service providers, we collect information that web browsers, mobile devices, and servers typically make available, such as the browser type, IP address, unique device identifiers, language preference, referring site, the date and time of access, operating system, and mobile network information. We collect log information when you use our Services–for example, when you visit facesofdaca.us"
          }
        </p> 
        <p>
          {
              "We may determine the approximate location of your device from your IP address. We collect and use this information to, for example, calculate how many people visit our Services from certain geographic regions. We may also collect information about your precise location via our mobile apps (when, for example, you post a photograph with location information) if you allow us to do so through your mobile device operating system’s permissions."
          }
        </p> 
        
      </div>
      <div className="about-header project">
        <p>
          <b>{"How we use information."}</b>
        </p>
        <p>
          {
              "To provide our Services and further develop our Services."
          }
        </p>
        <p>
          {
              "To monitor and protect the security of our Services, detect and prevent fraudulent transactions and other illegal activities, fight spam, and protect the rights and property of facesofdaca.us and others;"
          }
        </p>
        <p>
          {
              "To communicate with you about news updates of Faces Of DACA and confirmation of delivery of letter to our representatives in Congress."
          }
        </p> 
        
      </div>
       <div className="about-header project">
        <p>
          <b>{"Sharing information."}</b>
        </p>
        <p>
          {
              "We do not sell our users’ private personal information."
          }
        </p>
        <p>
          {
              "We may disclose information about you to our subsidiaries, our employees, and individuals who are our independent contractors that need to know the information in order to help us provide our Services or to process the information on our behalf. We require our subsidiaries, employees, and independent contractors to follow this Privacy Policy for personal information that we share with them."
          }
        </p>
        <p>
          {
              "We may share and disclose information with your consent or at your direction."
          }
        </p> 
        
      </div>
      <div className="about-header project">
        <p>
          <b>{"Privacy Policy Changes."}</b>
        </p>
        <p>
          {
              "Although most changes are likely to be minor, Faces Of DACA may change its Privacy Policy from time to time. Faces Of DACA encourages visitors to frequently check this page for any changes to its Privacy Policy. If we make changes, we will notify you by revising the change log below, and, in some cases, we may provide additional notice (Sending you a notification through e-mail). Your continued use of the Services after any change in this Privacy Policy will constitute your consent to such change."
          }
        </p>
        <p>
          {
              "We may disclose information about you to our subsidiaries, our employees, and individuals who are our independent contractors that need to know the information in order to help us provide our Services or to process the information on our behalf. We require our subsidiaries, employees, and independent contractors to follow this Privacy Policy for personal information that we share with them."
          }
        </p>
        <p>
          {
              "We may share and disclose information with your consent or at your direction."
          }
        </p> 
        
      </div>
      <div className="letter-line-separator" />
    </div>
  );

  render() {
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
                <NavLink to="/events" activeClassName="">
              Events
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
                  <a href={"https://twitter.com/facesofdaca"} target={"_blank"}>
                    <img src={Twitter} />{" "}
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
                </div>
              </div>
                {this.renderPolicy()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;

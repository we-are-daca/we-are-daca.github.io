import React from "react";
import { PulseLoader } from "react-spinners";
import { ShareButtons, generateShareIcon } from "react-share";
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

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon("facebook");
const TwitterIcon = generateShareIcon("twitter");

class Letter extends React.Component {
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
      hasSentLetter: localStorage.getItem("fod-hartnell-letter") || true,
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

  componentDidMount = () => {
    if (!this.state.hasSentLetter) {
      this.canvas = document.querySelector("canvas");
      this.signaturePad = new SignaturePad(this.canvas);
      var rect = this.canvas.parentNode.getBoundingClientRect();
      console.log(rect);
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
      //window.addEventListener("resize", this.resizeCanvas);
      //this.resizeCanvas();
    }
  };

  resizeCanvas = () => {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvas.getContext("2d").scale(ratio, ratio);
    this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  };

  handleSendLetter = () => {
    // localStorage.setItem('fod-hartnell-letter', 'true');
  };

  checkNameIsValid = name => name.length > 0 && name.split(" ").length > 1;

  checkEmailIsValid = email => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  };

  renderLetterButtons = () => (
    <div className="letter-buttons-container">
      <div
        className="letter-button-container"
        onClick={() => {
          this.signaturePad.clear();
        }}
      >
        <div className="letter-button">
          <p>{"Clear Signature"}</p>
        </div>
      </div>
      <div
        className="letter-button-container"
        onClick={() => {
          const isEmailValid = this.checkEmailIsValid(this.state.email);
          const isNameValid = this.checkNameIsValid(this.state.name);
          const isCanvasNotEmpty = !this.signaturePad.isEmpty();
          let isSendingLetter = false;

          if (isEmailValid && isNameValid && isCanvasNotEmpty) {
            this.handleSendLetter();
            isSendingLetter = true;
          }
          this.setState({
            isEmailValid,
            isNameValid,
            hasSigned: isCanvasNotEmpty,
            isSendingLetter
          });
        }}
      >
        <div className="letter-button">
          <p>{"Send"}</p>
        </div>
      </div>
    </div>
  );

  renderLetter = () => (
    <div>
      <div className="about-header project">
        <p>
          <b>{"LETTER TO CONGRESS"}</b>
        </p>
        <p>
          {
            "Join The Hartnell Foundation and Faces Of DACA to urge our representatives to continue fighting for a DREAM ACT by signing our call to action! Each letter will be faxed to our representatives Jimmy Panetta, Dianne Feinstein, and Kamala Harris."
          }
        </p>
        <p>
          {"Concerned about privacy? Visit our "}
          <span>
            <Link to={"/privacy"}>{"Privacy Policy"} </Link>
            {" for more information."}
          </span>
        </p>
      </div>
      <div className="letter-line-separator" />
      <div className="about-header team">
        <p>
          <b>{"Draw Your Signature Below"}</b>
        </p>
        <div className="canvas-container">
          <canvas id="signature-pad" className="signature-pad" />
        </div>
        <div className="letter-inputs">
          <MuiThemeProvider>
            <TextField
              className="signature-name"
              hintText={"Full Name"}
              onBlur={() => {
                const isNameValid = this.checkNameIsValid(this.state.name);
                this.setState({
                  isNameValid
                });
              }}
              underlineFocusStyle={{ borderColor: orange800 }}
              onChange={event =>
                this.setState({
                  name: event.target.value
                })}
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <TextField
              hintText={"Email Address"}
              underlineFocusStyle={{ borderColor: orange800 }}
              onBlur={() => {
                const isEmailValid = this.checkEmailIsValid(this.state.email);
                this.setState({
                  isEmailValid
                });
              }}
              onChange={event =>
                this.setState({
                  email: event.target.value
                })}
            />
          </MuiThemeProvider>
        </div>
        {!this.state.isNameValid && (
          <p className="letter-validation-message">
            {"Please enter your full name."}
          </p>
        )}
        {!this.state.isEmailValid && (
          <p className="letter-validation-message">
            {"Please enter a valid email."}
          </p>
        )}
        {!this.state.hasSigned && (
          <p className="letter-validation-message">
            {"Please draw your signature."}
          </p>
        )}
        {this.state.isSendingLetter ? (
          <div className="letter-loading">
            <PulseLoader
              color={"#e67e00"}
              loading={this.state.isSendingLetter}
            />
          </div>
        ) : (
          this.renderLetterButtons()
        )}
      </div>
    </div>
  );

  renderLetterSentSuccess = () => (
    <div>
      <div className="about-header project">
        <p>
          <b>{"THANK YOU"}</b>
        </p>
        <p>
          {
            "Your letter has been sent and we will send you an email when we've delivered your message."
          }
        </p>
        <p>
          {
            "Ask your friends and family to join you, Faces Of DACA and The Hartnell Foundation in signing this letter for our representatives in Congress!"
          }
        </p>
        <div className="share">
          <FacebookShareButton url={window.location.href} quote={
              'Join Faces Of DACA, the Hartnell Foundation and myself in writing to our representatives for a clean Dream Act!'} 
            hashtag={'#DefendDACA'}      
         >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="share-padded">
          <TwitterShareButton 
            url={window.location.href}
            title={'Join Faces Of DACA, the Hartnell Foundation and myself in writing to our representatives for a clean Dream Act!'}
            hashtags={['DefendDACA', 'DreamAct', 'DreamActNow']}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
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
              {this.state.hasSentLetter ? (
                this.renderLetterSentSuccess()
              ) : (
                this.renderLetter()
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Letter;

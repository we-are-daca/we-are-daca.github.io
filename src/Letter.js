import React from "react";
import uuid from 'uuid/v4'
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
import { zipcodes } from './constants';
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
      s3UploadUrl: 'https://6shpfx5ftj.execute-api.us-west-1.amazonaws.com/dev/requestUploadUrl',
      show: false,
      isMenuOpen: false,
      isSendingLetter: false,
      name: "",
      email: "",
      occupation: '',
      address: '',
      cityAndState: '',
      zipcode: '',
      phoneNumber: '',
      isNameValid: true,
      isEmailValid: true,
      isOccupationValid: true,
      isAddressValid: true,
      isCityAndStateValid: true,
      isZipcodeValid: true,
      isPhoneNumberValid: true,
      hasSigned: true,
      hasSentLetter: localStorage.getItem("fod-hartnell-letter") || false,
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

  componentDidMount = () => {
    if (!this.state.hasSentLetter) {
      this.canvas = document.querySelector("canvas");
      this.signaturePad = new SignaturePad(this.canvas, {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)'
      });
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

  dataURItoBlob = (dataURI) => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var _ia = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
        _ia[i] = byteString.charCodeAt(i);
    }

    var dataView = new DataView(arrayBuffer);
    var blob = new Blob([dataView], { type: mimeString });
    return blob;
}

  handleSendLetter = () => {
    // localStorage.setItem('fod-hartnell-letter', 'true');

    const dataUrl = this.signaturePad.toDataURL();
    const blob = this.dataURItoBlob(dataUrl);
    const id = uuid()

    fetch('https://6shpfx5ftj.execute-api.us-west-1.amazonaws.com/dev/requestUploadUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: id,
        type: 'image/png'
      })
    })
    .then(function(response) {
      return response.json()
    }, function(err) {
      console.log(err);
    })
    .then(function(json) {
      console.log(json);
      return fetch(json.uploadUrl, {
        method: 'PUT',
        body: blob,
        headers: {
          'x-amz-acl': 'public-read'
        }
      })
    }, (err) => console.log(err))
    .then(() => {
        return fetch('https://6shpfx5ftj.execute-api.us-west-1.amazonaws.com/dev/supporter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            occupation: this.state.occupation,
            image_key: id
          })
        })
    }, (err) => console.log(err));
  };

  checkNameIsValid = name => name.length > 0 && name.split(" ").length > 1;

  checkPositionIsValid = position => position.length > 0;

  checkAddressIsValid = address => address.length > 0;
  
  checkCityAndStateisValid = place => place.length > 0;

  checkNumberIsValid = number => /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(number);

  checkZipCodeIsValid = zipcode => zipcodes.indexOf(zipcode) > -1;

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
          const isOccupationValid = this.checkPositionIsValid(this.state.occupation);
          const isAddressValid = this.checkAddressIsValid(this.state.isAddressValid);
          const isCityAndStateValid = this.checkCityAndStateisValid(this.state.cityAndState);
          const isPhoneNumberValid = this.checkNumberIsValid(this.state.phoneNumber);
          const isZipcodeValid = this.checkZipCodeIsValid(this.state.zipcode);
          let isSendingLetter = false;

          console.log(isZipcodeValid);
          console.log(zipcodes);

          if (isEmailValid && isNameValid && isCanvasNotEmpty && isOccupationValid) {
            this.handleSendLetter();
            isSendingLetter = true;
          }
          this.setState({
            isEmailValid,
            isNameValid,
            hasSigned: isCanvasNotEmpty,
            isSendingLetter,
            isOccupationValid,
            isAddressValid,
            isCityAndStateValid,
            isPhoneNumberValid,
            isZipcodeValid,
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
              className="signature-field"
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
              className="signature-field"
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
          <MuiThemeProvider>
            <TextField
              className="signature-field"
              hintText={"Title / Occupation"}
              underlineFocusStyle={{ borderColor: orange800 }}
              onBlur={() => {
                const isOccupationValid = this.checkPositionIsValid(this.state.occupation);
                this.setState({
                  isOccupationValid,
                });
              }}
              onChange={event =>
                this.setState({
                  occupation: event.target.value
                })}
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <TextField
              className="signature-field"
              hintText={"Address"}
              underlineFocusStyle={{ borderColor: orange800 }}
              onBlur={() => {
                const isAddressValid = this.checkAddressIsValid(this.state.address);
                this.setState({
                  isAddressValid,
                });
              }}
              onChange={event =>
                this.setState({
                  address: event.target.value
                })}
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <TextField
              className="signature-field"
              hintText={"City and State"}
              underlineFocusStyle={{ borderColor: orange800 }}
              onBlur={() => {
                const isCityAndStateValid = this.checkCityAndStateisValid(this.state.cityAndState);
                this.setState({
                  isCityAndStateValid,
                });
              }}
              onChange={event =>
                this.setState({
                  cityAndState: event.target.value
                })}
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <TextField
              className="signature-field"
              hintText={"Zipcode"}
              underlineFocusStyle={{ borderColor: orange800 }}
              onBlur={() => {
                const isZipcodeValid = this.checkZipCodeIsValid(this.state.zipcode);
                this.setState({
                  isZipcodeValid,
                });
              }}
              onChange={event =>
                this.setState({
                  zipcode: event.target.value
                })}
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <TextField
              className="signature-field"
              hintText={"Phone Number"}
              underlineFocusStyle={{ borderColor: orange800 }}
              onBlur={() => {
                const isPhoneNumberValid = this.checkNumberIsValid(this.state.phoneNumber);
                this.setState({
                  isPhoneNumberValid,
                });
              }}
              onChange={event =>
                this.setState({
                  phoneNumber: event.target.value
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
        {!this.state.isOccupationValid && (
          <p className="letter-validation-message">
            {"Please enter your title/occupation."}
          </p>
        )}
        {!this.state.isAddressValid && (
          <p className="letter-validation-message">
            {"Please enter your address."}
          </p>
        )}
        {!this.state.isCityAndStateValid && (
          <p className="letter-validation-message">
            {"Please enter your city and state."}
          </p>
        )}
        {!this.state.isZipcodeValid && (
          <p className="letter-validation-message">
            {"Please enter your zipcode."}
          </p>
        )}
        {!this.state.isPhoneNumberValid && (
          <p className="letter-validation-message">
            {"Please enter your phone number."}
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

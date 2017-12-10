import React from "react";
import Loading from "react-loading-bar";
import { Link } from "react-router-dom";
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
      interviewDate: "September 30, 2017"
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

  render() {
    console.log(this.state);
    return (
      <div className="participant">
        <Loading color={"blue"} show={this.state.show} showSpinner={false} />
        <div className="flex-container">
          <Sticky enabled={true}>
            <div className="sidenav">
              <div className="title">
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={"true"} offset={-10}>
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
            <div className="mobile-nav">
              <span>{this.determinePath()}</span>
            </div>
            <div className="profile">
              <div className="">
                <div className="portrait">
                  <img
                    src={`https://dwistynbcri9g.cloudfront.net/${this.state
                      .image}`}
                    alt={this.state.name}
                    onLoad={this.imageLoaded}
                  />
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

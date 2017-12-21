import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Pie } from "react-chartjs-2";
import "./App.css";
import "./statistics.css";

import ScrollLock from "react-scrolllock";
import MdClose from "react-icons/lib/md/close";
import MdMenu from "react-icons/lib/md/menu";
import Arrow from "react-icons/lib/fa/angle-down";
import Sticky from "react-stickynode";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";
import Billboard from "./img/billboard.jpg";
import { NavLink } from "react-router-dom";

const data = {
	labels: [
		'Men',
		'Women',
	],
	datasets: [{
		data: [14, 11],
		backgroundColor: [
		'#e67e00',
		'#F2BF7F',
		],
		hoverBackgroundColor: [
		'#e67e00',
		'#F2BF7F',
		]
	}]
};

const laborData = {
  labels: [
		'College Graduates',
		'Students',
    'Working with High School / GED Diploma'
	],
	datasets: [{
		data: [10, 12, 2],
		backgroundColor: [
		'#e67e00',
		'#F2BF7F',
		],
		hoverBackgroundColor: [
		'#e67e00',
		'#F2BF7F',
    '#B86500'
		]
	}] 
}

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        backgroundImage: 'url(https://dwistynbcri9g.cloudfront.net/statistics_cover.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'none',
        height: '450px',
        width: '90%',
        margin: '0 auto',
        position: 'relative',
        filter: 'brightness(40%) contrast(70%)'
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
    const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]
    return (
      <div className="participant">
        <div className="flex-container">
          <Sticky enabled={true}>
            <div className="sidenav">
              <div className="title">
                <span>{"Faces Of Daca"}</span>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <NavLink to="/">Stories</NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/statistics" activeClassName="links">
                      Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/help" activeClassName="links" />How To Help
                  </li>
                  <li>
                    <NavLink to="/help" activeClassName="links" />About
                  </li>
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
              <div className="header">
                <div className="">
                </div>
                <div className="portrait-title">
                  <MediaQuery query="(max-width: 1224px)">
                      <div className="mobile-nav" style={this.mobileNavStyle}>
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
                <p>24* out of 800,000</p>
                </div>
              </div>
              <div className="">
                <div className="dacamentor-interview stats">
                  <p>
                    <b>
                      {
                        "Introduction"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        'The purpose of this Empirical Research is to provide Congress qualitative data utilizing community-based participatory methods through awareness of intersectionality to articulate an understanding of these diverse experiences of DACA recipients. There is little known about this population. '
                      }
                    </span>
                  </p>
                </div>
              </div>
               <div className="dacamentor-interview stats">
                  <p>
                    <b>
                      {
                        "Methodology"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        'Using structured style interviews, we interviewed a total of Twenty- four eligible DACA Latinos/as. These interviewees are between the ages of 18-35 years old and were recruited through social media outlets and required to inform themselves about our project through our call for participants published through Medium. Our call  consisted of what DACA is, the state of DACA, our goal of our project and the potential harms of publicly sharing their personal stories. These twenty-four participants were informed, aware and now stand with us in hopes of sharing their stories to help Congress reach a positive solution for the greater DACA community. '
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview stats">
                  <p>
                    <b>
                      {
                        "Gender of participants and occupations"
                      }
                    </b>
                  </p>
                  <div style={{display: 'inline-block', width: '50%'}}>
                    <Pie data={data} height={250} options={{
                      layout: { 
                        padding: {
                          top: 20,
                          right: 40,
                          bottom: 20
                        }
                      }
                    }
                    } />
                  </div>
                  <div style={{display: 'inline-block', width: '50%'}}>
                    <Pie data={laborData}  height={260} options={{
                      layout: { 
                        padding: {
                          top: 20,
                          left: 40,
                          bottom: 20
                        }
                      }
                    }
                    } />
                  </div>
                  <p>
                    <span className="dacamentor-response stats">
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                      }
                    </span>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;

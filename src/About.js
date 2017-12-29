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

class About extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      isMenuOpen: false,
      cards: [
        {
          name: "Daniel",
          occupation: "Computer Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "daniel_about.jpg",
          link: "/7d56bb43/irais-journey"
        },
        {
          name: "Sammy",
          occupation: "Computer Science Major",
          timeSinceArrival: "13",
          country: "Mexico",
          image: "sammy_about.jpg",
          link: "/20852c70/luis-journey"
        },
        {
          name: "Corina",
          occupation: "Computer Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "corina_about.jpg",
          link: "/a782b502/sandra-journey"
        },
        {
          name: "Mia",
          occupation: "Student Ambassador",
          timeSinceArrival: "17",
          country: "Mexico",
          image: "mia_about.jpg",
          link: "/c05de409/leo-journey"
        },
        {
          name: "Chris",
          occupation: "Animal Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "chris_about.jpg",
          link: "/d1d1f873/liz-journey"
        }
      ],
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
              <div className="about-header project">
                <p>
                  <b>{"What is DACA?"}</b>
                </p>
                <p>
                  {
                    "In 2012, the Obama administration created the DACA program. DACA stands for Deferred Action For Childhood Arrivals, allowing hundreds of thousands of young undocumented people to remain in the country. By submitting biometric data to the government, passing a background check, maintaining a clean criminal record and paying a $495 fee, it allows young and undocumented immigrants to legally work and receive protection from deportation. Recipients can renew DACA on a basis of two-year increments."
                  }
                </p>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"What is Faces Of DACA?"}</b>
                </p>
                <p>
                  {
                    "Our project, Faces Of DACA, aims to show the outside world a more comprehensive picture of DACA recipients. We want to bring attention to recipients whose stories have never been heard, considered nor celebrated. The Trump administration has removed the DACA program, leaving as many as 800 thousand DACA recipients remaining hopeful of Congress delivering a solution."
                  }
                </p>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"How can I help?"}</b>
                </p>
                <p>
                  {
                    "Head over to our How To Help section to see how you can join the fight. Your participation matters--Congress failed to agree on a long term solution and has left DACA recipients in the dark for the holidays. Democracy works when we all work together. A phone call to your representative can help them prioritize the DREAM Act. Only when we show in numbers, we can make a difference."
                  }
                </p>
              </div>
              <div className="line-separator" />
              <div className="about-header team">
                <p>
                  <b>{"Faces Of DACA Team"}</b>
                </p>
                <p>
                  {
                    "Faces OF DACA was conceived in September 2017 by Daniel Diaz."
                  }
                </p>
                <p>
                  {
                    "This project would not have been possible over the course of three months without our many contributors. Special thanks to Cathy Tran, Brian De Anda, and Elias Ramirez whose contributions helped shape what the project is today. Lastly, a big thank you to all of our participants for being so courageous in sharing their story and time with us."
                  }
                </p>
              </div>
              <div className="about-team about-team-mobile">
                <div className="about-profile about-profile-mobile">
                  <div className="profile-pic-d profile-pic" />
                  <div className="profile-breakdown">
                    <div>
                      <p className="profile-name">
                        <b>{"Daniel"}</b>
                        <p>{"Creator"}</p>
                      </p>
                    </div>
                    <p>
                      Daniel Diaz is a Mexico City native, Cal State Monterey
                      Bay graduate and a DACA recipient. Upon hearing about the
                      removal of DACA, Daniel set in motion the storytelling
                      project that became Faces Of DACA. His professional
                      development as a software engineer at places like Uber
                      allowed him to craft this project in which he hopes to
                      share the untold stories from America's undocumented youth
                      and further increase the urgency for Congress to enact a
                      long-term solution in replacement of DACA.
                    </p>
                  </div>
                </div>
                <div className="about-profile about-profile-mobile">
                  <div className="profile-pic-a profile-pic" />
                  <div className="profile-breakdown">
                    <div>
                      <p className="profile-name">
                        <b>{"Corina"}</b>
                        <p>{"Head Researcher"}</p>
                      </p>
                    </div>
                    <p>
                      Corina De La Torre is a Latinx Research Assistant and a
                      recent graduate from the University of California, Santa
                      Cruz where she obtained BAs in Psychology and in Feminist
                      Studies with a concentration in Law, Politics and Social
                      Change. Corina is currently seeking graduate programs to
                      pursue her PHD in Social Psychology and her research
                      interests are on issues of Identity, culture, and economic
                      injustices within the Latinx community. Based on her
                      dedication to serve her community, Corina took partnership
                      in the Faces Of DACA project.
                    </p>
                  </div>
                </div>

                <div className="about-profile about-profile-mobile">
                  <div className="profile-pic-c profile-pic" />
                  <div className="profile-breakdown">
                    <div>
                      <p className="profile-name">
                        <b>{"Chris"}</b>
                        <p>{"Editor In Chief"}</p>
                      </p>
                    </div>
                    <p>
                      Christopher Rendon is an aspiring writer from the Central
                      Coast area, who recently graduated from UCLA with his B.A.
                      in English. Offering his knowledge on writing and editing,
                      his willingness to join the project stems from the direct
                      effects Trump’s decision to rescind DACA has had on his
                      community. He strongly believes every Dreamer deserves the
                      same respect and civil liberties as any citizen for they,
                      too, embody the quotidian American experience. Alongside
                      his hard working colleagues, his hope is for Congress to
                      assure the safety of every DACA recipient.
                    </p>
                  </div>
                </div>
                <div className="about-profile about-profile-mobile">
                  <div className="profile-pic-b profile-pic" />
                  <div className="profile-breakdown">
                    <div>
                      <p className="profile-name">
                        <b>{"Mia"}</b>
                        <p>{"Co-Researcher"}</p>
                      </p>
                    </div>
                    <p>
                      Mia Castillo is a Salinas, California native and a current
                      intensive psychology major at the University of California,
                      Santa Cruz. Mia was motivated to join this project because
                      of her passion for research that sheds light on the
                      experiences of historically marginalized communities such
                      as her own. Mia sincerely hopes that this project can urge
                      Congress to not only see the importance of DACA but also
                      the great need for an empathetic immigration policy that
                      values human rights.
                    </p>
                  </div>
                </div>
                <div className="about-profile about-profile-mobile">
                  <div className="profile-pic-e profile-pic" />
                  <div className="profile-breakdown">
                    <div>
                      <p className="profile-name">
                        <b>{"Sammy"}</b>
                        <p>{"Jack Of All Trades"}</p>
                      </p>
                    </div>
                    <p>
                      Samuel Villavicencio is a California native. He is a
                      graduate from CSUMB headed to the Silicon Valley to work
                      as a software engineer. His awareness of the difficulties
                      surrounding immigration faced by his peers has driven him
                      to join this project. He wants to see Congress stand for
                      the people who sacrifice so much to give back to the
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import ScrollUp from 'react-scroll-up';
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
import "./App.css";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      numLoaded: 0,
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
      cards: [
        {
          name: "Luis",
          occupation: "Software Engineer",
          country: "Mexico",
          image: "luis_portrait.jpg",
          link: "/36432e39/luis-journey"
        },
        {
          name: "Xochitl",
          occupation: "Behavioral Specialist",
          timeSinceArrival: "19",
          country: "Mexico",
          image: "xochitl_portrait_1.jpg",
          link: "/5be2766a/xochitl-journey"
        },
        {
          name: "Jorge",
          occupation: "Crop Management Major",
          timeSinceArrival: "11",
          country: "Mexico",
          image: "jorge_journey.jpg",
          link: "/08504f4c/jorge-journey"
        },
        {
          name: "Katherine",
          occupation: "Socielogy Major",
          timeSinceArrival: "11",
          country: "El Salvador",
          image: "katherine_portrait.jpg",
          link: "/eb241513/katherine-journey"
        },
        {
          name: "Edgar",
          occupation: "Software Engineer",
          timeSinceArrival: "10",
          country: "Mexico",
          image: "edgar_journey.jpg",
          link: "/00c13752/edgar-journey"
        },
        {
          name: "Miriam",
          occupation: "Software Engineer",
          timeSinceArrival: "11",
          country: "Mexico",
          image: "miriam_journey.jpg",
          link: "/0ec6370e/miriam-journey"
        },
        {
          name: "Jonathan",
          occupation: "Field Representative",
          timeSinceArrival: "21",
          country: "Mexico",
          image: "jonathan_portrait_1.jpg",
          link: "/5e286af3/jonathan-journey"
        },
        {
          name: "Estefania",
          occupation: "Kinesiology Major",
          timeSinceArrival: "14",
          country: "Mexico",
          image: "steph_journey.jpg",
          link: "/eb241513/estefania-journey"
        },
        {
          name: "Daniel",
          occupation: "Aspiring Software Engineer",
          timeSinceArrival: "18",
          country: "Mexico",
          image: "daniel_1_journey.jpg",
          link: "/a65e9bc1/daniel-journey"
        },
        {
          name: "Yareli",
          occupation: "Software Engineer",
          timeSinceArrival: "18",
          country: "Mexico",
          image: "yareli_journey.jpg",
          link: "/c5b03d37/yareli-journey"
        },
        {
          name: "Miguel",
          occupation: "Embedded Vision Engineer",
          timeSinceArrival: "11",
          country: "Mexico",
          image: "miguel_portrait.jpg",
          link: "/82b67ab1/miguel-journey"
        },
        {
          name: "Lesly",
          occupation: "Software Engineer",
          timeSinceArrival: "10",
          country: "Mexico",
          image: "lesly_portrait.jpg",
          link: "/aa9574739f97/lesly-journey"
        },
        {
          name: "Elvin",
          occupation: "Investor & Entrepreneur",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "elvin_journey.jpg",
          link: "/4102ff4a/elvin-journey"
        },
        {
          name: "Irais",
          occupation: "Computer Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "irais_portrait.jpg",
          link: "/7d56bb43/irais-journey"
        },
         {
          name: "Luis",
          occupation: "Computer Science Major",
          timeSinceArrival: "13",
          country: "Mexico",
          image: "luis_2_journey.jpg",
          link: "/20852c70/luis-journey"
        },
        {
          name: "Sandra",
          occupation: "Computer Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "sandra_journey.jpg",
          link: "/a782b502/sandra-journey"
        },
        {
          name: "Leo",
          occupation: "Student Ambassador",
          timeSinceArrival: "17",
          country: "Mexico",
          image: "leo_journey.jpg",
          link: "/c05de409/leo-journey"
        },
        {
          name: "Liz",
          occupation: "Animal Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "liz_journey.jpg",
          link: "/d1d1f873/liz-journey"
        },
        {
          name: "Octavio",
          occupation: "Business Owner",
          timeSinceArrival: "13",
          country: "Mexico",
          image: "octavio_journey.jpg",
          link: "/0e9be67f/octavio-journey"
        },
          {
          name: "Rosie",
          occupation: "Pest Control Advisor",
          timeSinceArrival: "26",
          country: "Mexico",
          image: "rosie_journey.jpg",
          link: "/168ed629/rosie-journey"
        },
      ]
    };

    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 10);
  }

  imageLoaded = () => {
    const oneMore = this.state.numLoaded + 1;
    const params = {
      show: true,
      numLoaded: oneMore
    };

    if (oneMore === this.state.cards.length) {
      console.log("here");
      params.show = false;
    }
    this.setState(params);
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
    const inner =
      '<use class="sqs-use--icon" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook-icon"></use><use class="sqs-use--mask" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook-mask"></use>';
    return (
      <div>
        <div className="billboard-container" />
        <div id="billboard-title">
          <div
            className="mobile-nav"
            ref={input => {
              this.mobileNav = input;
            }}
          >
            {this.state.isMenuOpen ? (
              <MdClose
                size={36}
                onClick={this.closeMenu}
                className="menu-close"
                color={"black"}
              />
            ) : (
              <MdMenu
                size={36}
                onClick={this.handleMenu}
                className="menu-icon"
                color={"white"}
              />
            )}
          </div>
          <p>{"FACES OF DACA"}</p>
          <p>{
            "A storytelling series sharing the diverse experiences of DACA (Deferred Action for Childhood Arrivals) recipients in America. According to U.S. Citizenship and Immigration Services, there are currently 690,000 of 800,000 eligible undocumented immigrants who are enrolled in the DACA program, which was created five years ago. As of September 5th, 2017, the Trump administration has rescinded the program, leaving the future of these 690,000 individuals uncertain."
            }</p>
          <div className="arrow bounce">
            <Link to="stories" spy={true} smooth={true} duration={500}>
              <Arrow size={42} color={"white"} />
            </Link>
          </div>
        </div>
        {this.state.isMenuOpen && <ScrollLock />}
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
          </div>
        </div>
        <Element name="stories">
          <div className="App" style={{ overflowX: "hidden" }}>
            <div className="flex-container">
              <Sticky enabled={true}>
                <div className="sidenav">
                  <div className="title">
                    <span>{"Faces Of Daca"}</span>
                  </div>
                  <div className="navigation">
                    <ul>
                      <li>
                        <NavLink to="/" activeClassName="links">
                          Stories
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/statistics" activeClassName="links">
                          Statistics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/how-to-help" activeClassName="links">
                          How To Help
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" activeClassName="links">
                          About
                        </NavLink>
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
                <div className="mobile-nav">
                </div>
                <div className="row dacas">
                  {this.state.cards.map((card, i) => (
                    <Card
                      name={card.name}
                      occupation={card.occupation}
                      key={i}
                      imageLoaded={this.imageLoaded}
                      timeSinceArrival={card.timeSinceArrival}
                      country={card.country}
                      image={card.image}
                      link={card.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

export default App;

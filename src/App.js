import React, { Component } from "react";
import ReactGA from "react-ga";
import { Link, Element } from "react-scroll";
import ScrollUp from "react-scroll-up";
import ScrollLock from "react-scrolllock";
import MdClose from "react-icons/lib/md/close";
import MdMenu from "react-icons/lib/md/menu";
import Arrow from "react-icons/lib/fa/angle-down";
import MdChevronRight from "react-icons/lib/md/chevron-right";
import Sticky from "react-stickynode";
import SocialMediaNav from "./SocialMediaNav";
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
    ReactGA.initialize("UA-111454076-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
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
        top: "5%" /* 25% from the top */,
        width: "100%" /* 100% width */,
        textAlign: "center" /* Centered text/links */,
        marginTop:
          "30px" /* 30px top margin to avoid conflict with the close button on smaller screens */,
        zIndex: 2
      },
      cards: [
        {
          name: 'Aylin',
          occupation: 'Kinesiology Major',
          country: 'Mexico',
          image: 'aylin_portrait_2.jpg',
          link: '/1ede71bd/aylin-journey'
        },
        {
          name: "Luis",
          occupation: "Software Engineer",
          country: "Mexico",
          image: "luis_portrait.jpg",
          link: "/36432e39/luis-journey"
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
          name: "Jorge",
          occupation: "Crop Management Major",
          timeSinceArrival: "11",
          country: "Mexico",
          image: "jorge_journey.jpg",
          link: "/08504f4c/jorge-journey"
        },
        {
          name: "Katherine",
          occupation: "Sociology Major",
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
          occupation: "Computer Science Major",
          timeSinceArrival: "18",
          country: "Mexico",
          image: "daniel_1_journey.jpg",
          link: "/a65e9bc1/daniel-journey"
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
          name: "Liz",
          occupation: "Animal Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "liz_journey.jpg",
          link: "/d1d1f873/liz-journey"
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
          name: "Irais",
          occupation: "Computer Science Major",
          timeSinceArrival: "15",
          country: "Mexico",
          image: "irais_portrait.jpg",
          link: "/7d56bb43/irais-journey"
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
        }
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
          <p>
            {
              "An ongoing storytelling series sharing the diverse experiences of DACA (Deferred Action for Childhood Arrivals) recipients in America. According to U.S. Citizenship and Immigration Services, there are currently 690,000 of 800,000 eligible undocumented immigrants who are enrolled in the DACA program, which was created five years ago. As of September 5th, 2017, the Trump administration has rescinded the program, leaving the future of these 690,000 individuals uncertain."
            }
          </p>
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
            <NavLink to="/events" activeClassName="">
              Events
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
                <img src={Twitter} />
              </a>
            </div>
          </div>
        </div>
        <div className="social-placeholder" />
        <Element name="stories">
          <div className="App" style={{ overflowX: "hidden" }}>
            <div className="flex-container">
              <Sticky enabled={true}>
                <div className="sidenav">
                  <div className="title">
                    <span>{"Faces Of Daca"}</span>
                  </div>
                  <SocialMediaNav />
                </div>
              </Sticky>
              <div className="main">
                <div className="mobile-nav" />
                <div className="weekly-container">
                  <div>
                    <img className="weekly-participant" src="https://dwistynbcri9g.cloudfront.net/yazmin_hero_1.jpg" />
                    <strong><p className="weekly-name">Yazmin</p></strong>
                    <p className="weekly-title">English Major</p>
                  </div>
                  <div>
                    <div className="weekly-header">
                      <p>WEEKLY STORY</p>
                    </div>
                    <div className="weekly-description">
                      <p>“Our family was doing well until the recession hit, and at that point, we couldn’t afford our apartment anymore.  We decided to have a yard sale even when it was forbidden at the apartment complex, and sold absolutely everything--even our utensils. We only kept our sheets and a few pairs of clothes. We had nothing in our cupboard--not even rice or beans.” 
Yazmin shares her family's experience through the recession as well as how similar experiences shaped her to be "a strong woman, a strong worker, and a strong human being who can look at any obstacle and surpass it"</p>
                      <div className="weekly-arrow">
                          <MdChevronRight size={38} color={'#e67e00'} onClick={() => {this.props.history.push('/b9961768/yazmin-journey')}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="weekly-separator" />
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

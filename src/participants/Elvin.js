
import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import ReactGA from "react-ga";
import Info from "../common/Info";
import "../App.css";

import ScrollLock from "react-scrolllock";
import MdClose from "react-icons/lib/md/close";
import MdMenu from "react-icons/lib/md/menu";
import Arrow from "react-icons/lib/fa/angle-down";
import Sticky from "react-stickynode";
import SocialMediaNav from "../SocialMediaNav";
import SocialMedia from "../SocialMedia";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Billboard from "../img/billboard.jpg";
import { NavLink } from "react-router-dom";

class Elvin extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Elvin",
      occupation: "Investor / Entrepreneur",
      timeSinceArrival: "15",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "September 12, 2017",
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
      portraitStyle: {
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/elvin_hero.jpg)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "none",
        backgroundSize: "cover",
        height: 550,
        width: "90%",
        margin: "0 auto"
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
          <div className="main">
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
                  <a
                    href={"https://twitter.com/facesofdaca"}
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
                <div className="portrait" style={this.state.portraitStyle}>
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
              <SocialMedia />
              <div className="">
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Why don’t you tell me about your early years and where you come from?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in the notorious state of Sinaloa. The state at the time had a really high crime rate and an overall bad economy. It was like the wild west, but with more ruthless individuals and more advanced weapons. We ended up moving a lot across Mexico, eventually ended up in Mexico City. "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Through my early years, my mom told me to focus on school, so I did.  In Mexico city, I ended up doing so well academically I would sometimes be placed with the 3rd graders when I was in 1st. I ended up having perfect grades up until coming to the States--initially due to the fact that I spoke no English. Over time, I lost interest in school and didn’t care at all about anything. I still managed to do really well though."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My dad wanted something better for us and decided to bring us to the U.S. He chose Oregon since he had some cousins living there at the time, making it easier to settle. Before coming to the States, we tried everything possible to come here legally, but it was very difficult at the time. There were a lot of requirements we did not meet. My parents kept on filing the paperwork to get a visa, but kept getting rejected for over a year. My dad eventually got tired of waiting and made the decision to bring us over illegally. I was about 9 years old and had no say."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "A coyote crossing was arranged. I was flown from Mexico City to Tijuana, where I stayed in random safehouses for a couple days until it was safe to cross. Some of these safe houses were really sketchy. One of them had a lot of children; one can only wonder what happened to them. When you think of someone crossing the border illegally, you think of someone walking miles and miles on a hot dessert. It wasn’t like that for me luckily. Surprisingly enough I came in with a red carpet entrance. Wasn’t even checked in a car. The border patrol agent had been paid off. This was post 9/11 as well, so it should’ve been moderately harder to come into the country, but that was not the case.  This brings up the discussion of the Trump wall and its effectiveness."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Trump wants to build a wall, but how effective will it be when border patrol agents are corrupt?"
                      }
                    </span>
                  </p>

                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"we tried everything possible to come here legally, but it was very difficult at the time. There were a lot of requirements we did not meet.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How did you feel when you first came here? "
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was brought here when I was about 9 years old. I guess I was kinda scared at the time. Didn’t know anything or anybody. Everyone always talked about the States and hyped it up a bunch. So, I guess at the same time, I was excited to see what this country had to offer."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Coming to America allowed me to experience different cultures; making me see humanity as a whole. Seeing humanity as a whole made me think a lot, making me change my way of thinking. When I was a sophomore in high school, my brother was a senior about to graduate. He had a 4.0 GPA, he was part of the national honors society, he was german club president, and he won the intel science fair. I thought, ‘Man, this guy was going to an Ivy League school.’ No, he ended up going to a local community college. It drained me because I was in the same track If I had kept doing what I was doing. My carelessness peaked due to the fact that no matter how hard I worked for the next two years, it would mean nothing."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Now that you’ve told me the gist of how it was like arriving, what is an average day for Elvin now?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Well, I recently moved to California after living in Oregon for the last 11 years or so. Before the move, I was in Oregon by myself since my parents went back to Mexico a long time ago. I was working at Nike full-time and spent a lot of time learning about investing."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Now, I spend a lot of time investing in myself, consuming knowledge from books, documentaries, people, etc. I guess I’m building myself to do some real big things in the future. My goal is to retire within the next 5 years. Time is very important since we’re not immortal. By retiring early, I will be able to have infinite free time allowing me to focus on other things other than work. I am currently working at Tesla full time, but plan on joining a law firm very soon."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I spend a lot of time investing in myself, consuming knowledge from books, documentaries, people, etc. I guess I’m building myself to do some real big things in the future. My goal is to retire within the next 5 years.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Why did you move to California?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m looking for bigger things. I was living comfortably working at Nike in Oregon, but felt like I was wasting my time and my potential was being thrown away. When you’re comfortable you’re not learning anything. Ultimately, it’s better to put yourself in uncomfortable situations. Over here there's a larger population, we have many booming industries, and just a lot more successful people who you could learn from. Oregon is a fantastic place to live, but it’s not the utopia for knowledge that I want to pursue."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "We talked about your life story and a little bit about DACA. Did you regain your motivation once you had your permit?  Did you see your future a little clearer?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It did create a mild case of motivation. I wasn’t as stoked as others in my situation though since  I saw it as a piece of document that states that you’re legally illegal. Of course, it’s great to have it since it allows us to drive and join the workforce, but it’s still an incomplete status because we’re limited on certain things and it doesn’t provide a path to citizenship."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Talking about DACA, today we pretty much saw and heard the news of the Trump administration’s decision to remove the DACA program. When you first heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I knew it was going to happen eventually with Trump being so xenophobic. I wasn’t really hurt over the decision. Coincidently, Trump signed the executive order on the day I had my biometrics appointment with USCIS (United States Citizenship and Immigration Services). The employees there seemed drained emotionally. They felt bad for people like me. I don't think this is something anyone should feel down over. If anything everyone should be motivated to do something about it--like this project. A lot of DACA people say that the undocumented are unafraid. I’m unafraid as well. I'm not really scared of anything like this. Worst case scenario, we all go back. I’m not scared to go to a different country really, I would see it as a learning opportunity. I’m a total outlier though."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "There are over 800,000 DACA recipients. If all of us are shipped back to our home countries the economy will be damaged. According to a study done by Center for American progress, it could reduce the GDP $433 billion over the next 10 years. That’s enough money for the US military to buy over 3000 AC130s and keep spreading freedom."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Congress has six months to come up with a solution. What would you tell Congress as they decide the future of DACA?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The thing about Congress is they have no one representing us. Nobody has experienced our situation. Step one in knowing the situation is putting yourself in the situation--our situation. Once they do that, it’ll open their thoughts and they’ll understand how we’re in a screwed situation."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"I would tell them to look at the facts, primarily economically and socially. Majority of these DACA kids were brought here by their parents. It was NEVER their decision to come here in the first place. They were brought here so young that they were able to assimilate into the culture. They all grew up, made friends, and developed lifestyles here in America. Why should this be taken away from them when they’ve done nothing wrong. It’s almost as if these DACA kids are being punished for the actions of their parents."}</span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"The thing about Congress is they have no one representing us. Nobody has experienced our situation. Step one in knowing the situation is putting yourself in the situation--our situation. Once they do that, it’ll open their thoughts and they’ll understand how we’re in a screwed situation.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elvin;

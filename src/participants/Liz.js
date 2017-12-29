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
import SocialMedia from "../SocialMedia";
import SocialMediaNav from "../SocialMediaNav";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Billboard from "../img/billboard.jpg";
import { NavLink } from "react-router-dom";

class Liz extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Liz",
      occupation: "Animal Science Major",
      timeSinceArrival: "20",
      country: "Mexico",
      image: 'rosie_hero_1.jpg',
      interviewDate: "November 11, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/liz_hero.jpg)`,
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
                          color={"white"}
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
                        "Tell me about your early years."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in Mexico City. I’m not sure exactly what region, but I came to the United States when I was seven months old. I really can’t say a whole lot about Mexico because I don’t remember much--I was very young when I was brought over to the States. My parents brought my siblings and I through a visa, and the reason we landed in the Salinas area was because we already had family here. We lived with them for awhile until my dad was able to get a job and we were able to settle down. Being an immigrant, it was very difficult for my dad to get a job. He luckily got a job doing heavy construction. He worked in construction for about 16 years, even though it was very hard work. Him finding another job was nearly impossible. I remember not seeing my dad very often as a child. He would work seven days a week, leaving before the sun came up and returning right around my bed time. He did this all because it was his only option given his legal status. I can definitely say that living here as immigrants really put a toll on my family."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "What else can you tell me about your childhood experiences? Any difficulty assimilating?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "No, I don’t think so. I was very fortunate to be the youngest and be raised in the United States unlike my sisters who are older than I am. Growing up, I didn’t know what it meant to be undocumented--I felt like I was born in the United States. I made many friends in elementary school and throughout middle school so I didn’t have a hard time fitting in. It wasn’t until high school that I started to understand what it was like to be in my situation."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"My parents never forced me to do well, but I knew I had to do well because I knew one of the biggest reasons my parents brought us was so that my siblings and I could have better opportunities--a chance at a better life than I would have if we had stayed in Mexico.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Did your parents emphasize school as you were growing up?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes. I always knew that I should do well in school. My parents never forced me to do well, but I knew I had to do well because I knew one of the biggest reasons my parents brought us was so that my siblings and I could have better opportunities--a chance at a better life than I would have if we had stayed in Mexico. I kept that in mind throughout my elementary, middle school, and high school years. Up until high school, I maintained straight A’s and had a 4.1 GPA."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "To me, if I didn’t do well in school, it felt very disrespectful towards my parents because they’ve gone through so much to be able to give us what we have now. That pressure always stayed with me as I was very scared to fail a class or even get a ‘B’ to avoid feeling any disappointment, despite the fact that I knew my parents would still be supportive."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My parents sacrificed so much for me and my siblings. There’s no way I could ever repay them for what they did. My dad, for 16 years up until he was 50, did extreme labor-intensive work in construction to provide for our family. Despite having severe arthritis in his hips and legs, he kept working. I never saw my mom relaxed. If not in the kitchen, she would be cleaning the house or cleaning other houses to get some money. The amount of work my parents did for us is beyond anything I could ever do. The best I could do is get good grades in school and a good education. With a degree and a stable job, I’ll be able to at least provide them with a roof over their head, food on the table, and love just as they gave me. None of which could’ve been possible if not for DACA."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You touched a bit on your legal status. Can you expand a bit on that? When did you fully comprehend what it meant to be undocumented?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I would say sometime in my junior year of high school. It’s when I started to think about college more, but I soon realized being undocumented meant I wouldn’t be able to go to college. I knew it would be difficult to go to a four year university straight out of high school and it was definitely saddening--I would have been the first in my family to go to a four-year."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "For a while, I had no idea what I would do with my life. I thought I wouldn’t be able to go to college. These thoughts grew on me and lead months of depression. I didn’t see a point in doing well in school. I felt like my whole life I had been putting myself under so much stress to do well in school but for what? What good would my straight A’s do if I couldn’t even apply to colleges? And then my sister told me about this new DACA program, and how I could go to college as a dreamer. I then happily applied to as many colleges as possible. These included: Fresno State, Humboldt, Cal Poly SLO, CSUMB, UCSC, UC Barbara, UC Berkeley, and UC Davis--where I’m at right now. I got accepted to every school I applied to other than Berkeley."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Which one did you really want to go to?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Davis! Ever since I went to middle school, I’ve dreamed of going to Davis. I love animals and Davis is the best school to follow similar passions. I think that’s one of the biggest things I forgot to mention. If I would’ve stayed in Mexico, I would not have found my true passion: rescuing animals. My ultimate goal in life is to open an animal sanctuary for farm animals. All of this would not have been possible to pursue given the state Mexico is in. Like veganism--what even is veganism over there? Over here, it’s much more accepted and it makes me really happy that I’m able to pursue these goals."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "What has your experiences at UC Davis been like?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It’s great--I don’t think I’ve ever been happier. I’m studying animal science and management to pursue my goals. I don’t know if you’ve heard of co-ops, but I’m living there right now. It’s the most amazing experience being able to live with people with similar interest, and also live in a city that’s just so beautiful. It’s a great feeling to be able to learn what I want to learn and know I’m on the right track."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"If I would’ve stayed in Mexico, I would not have found my true passion: rescuing animals. My ultimate goal in life is to open an animal sanctuary for farm animals. All of this would not have been possible to pursue given the state Mexico is in.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Let’s talk a little bit more about the future. You talked about opening a farm animal sanctuary. Assuming nothing crazy happens to us, what else do you have planned for yourself?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In five years, I see myself volunteering in animal sanctuaries, which I do now as well; however, in that timeframe, I’ll be a graduate and completely done with school so I plan on volunteering heavily at sanctuaries. In 10-15 years, I imagine myself running my sanctuary and fulfilling my ultimate dream."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {"Continuing to talk about the future: would you want to become a U.S. citizen in the future?"}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Oh yeah, definitely [laughs]. Opportunities would be easier to pursue and things would feel more possible to achieve. For example, credit. I know I can get credit, but without DACA I wouldn’t have been able to start building credit or to buy land to open my sanctuary."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"As you know, on September 5th, the Trump administration announced the removal of DACA and punted over to Congress to come up with a legislative solution within the next six months. When you first heard, what was your initial reaction?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was very surprised and I was very sad. I didn’t think Trump being president would have such a great impact directly on my life. I knew there were going to be some changes, but I never would have imagined there being a strong possibility of being deported again. It was a huge wave of worry and fear that something was going to happen, especially now that my parents are residents and I could be deported. I wouldn’t want them to have to move back to Mexico after all these years and all this progress they’ve made."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"As Congress works on a solution for DACA--if you had the opportunity to do so, what would you tell them?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I would ask them, ‘What would you do in my shoes if you were born somewhere else where there was danger and poverty? Wouldn’t you want the best for your kids? And how would you feel when you do have that opportunity to live the life you desire with your children and it’s taken away from you?’ We’re all people. We all want what’s best for us and for our offspring. That’s how life should be--it should be all of us looking out for one another and not disregarding someone just because of their legal status."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I would tell Congress, ‘What would you do in my shoes if you were born somewhere else where there was danger and poverty? Wouldn’t you want the best for your kids? And how would you feel when you do have that opportunity to live the life you desire with your children and it’s taken away from you?’\""
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

export default Liz;

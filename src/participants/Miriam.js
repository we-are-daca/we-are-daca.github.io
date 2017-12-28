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
import SocialMediaNav from "../SocialMediaNav"
import SocialMedia from "../SocialMedia";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Billboard from "../img/billboard.jpg";
import { NavLink } from "react-router-dom";

class Miriam extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Miriam",
      occupation: "Software Engineer",
      timeSinceArrival: "11",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "September 30, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/miriam_hero.jpg)`,
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
                    <b>{"Tell me a bit about your early years. "}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in Guadalajara, Jalisco, Mexico and I’m the second oldest of six. I came to the U.S. when I was about 12 years old. My parents decided to bring us because my dad had been living in California for a couple of years already and he had established himself here.  He owned a business and he didn’t want to be away from his family so he brought over myself and my five siblings. I started sixth grade and came straight to Salinas since my family was here. The first couple of months were tough--I didn’t know any English. I spent a lot of time relocating classrooms since I wasn’t able to understand the language. After half a year in elementary school, I moved to middle school where I was placed in all Spanish classes and I had three English classes from 7 am to 5 pm. My parents wanted us to focus on school. They didn’t want me to work or focus on anything else. My dad had two jobs by the time I came here. He started his day at 4 am until noon for the first job and then from noon to midnight the second job to provide for seven of us. "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Although my parents were working 12 hour shifts at a restaurant to provide for us, it was still not enough for the family. I started working shifts at the restaurant on weekends as a waitress to help pay for any expenses I had. I was trying not to be a burden to my parents. I was still learning English, and sometimes I couldn’t get an order right. Someone even made fun of me because I couldn’t speak the language. It was really hard [to process] but that’s when I realized I needed to learn more English."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"[Pauses]"}</span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Some people I knew would be really reluctant to speak English because they were afraid of their accent or pronunciation, but I put myself out there — I realized I needed to work a little bit more to gain control over the language.  I enrolled myself into after school programs so I could learn English faster. After middle school, I went to Alisal High and I continued to enroll myself in after school programs. By the time I was a sophomore, I became a mainstream student with regular classes, along with my English speaking classmates."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"My parents wanted us to focus on school. They didn’t want me to work or focus on anything else. My dad had two jobs by the time I came here. He started his day at 4 am until noon for the first job and then from noon to midnight the second job to provide for seven of us."'
                        }
                      </span>
                    </p>
                  </blockquote>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t apply to college just because I knew my situation. You know my older brother [addressing the interviewer]. He knew about our situation as well. He wasn’t able to get into any college either because of our language barrier. I decided to go to community college and see what my options were. I spent two years there, studying to become a business major. At the time, I wanted to take over my parents’ restaurant and make it grow. I also knew that my parents couldn’t support my college tuition because when I graduated, we didn’t have the support from schools we now have. I had to pay for out of state tuition, which became really expensive for my parents to pay for both mine and my older brother’s tuition as well as provide for four younger siblings, who were also attending school. I managed to get a full time job at McDonald’s - a night shift from 8PM to 4AM. Then I was going to school from 9 AM to 4 PM. In between, I managed to do all my homework and other responsibilities."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Months later, my brother told me about the CS-in-3 program, a program to obtain your computer science degree in 3 years. I joined the program and I completed my undergrad in the appropriate time. To me, becoming economically stable would relieve a lot of stress from my parents. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You mentioned during your time as a waitress you realized that you really had to double down and learn English well. Was there any point in time before that where you thought you didn’t belong here? Has that changed now?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The point where I doubted myself the most was between 6th and 8th grade because it was a really hard time since I was young and I didn’t understand anything. I wanted to go back where I was comfortable, where I had my friends, and I knew everyone in my little town. I was uncomfortable here; I was having a hard time making friends and had a harder time with the language. It was all very new. Now, everything has changed. I met wonderful people here. I met students like me--people who understand us. I’m proud of my roots, I know where I am from and who I am. If I were to go back, it wouldn’t be the same as staying here. I’ve already made my life and established myself here. Between middle school and college, my life changed. It would be very difficult to go back to Mexico and start all over again."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "This is my home. My whole family is here. My friends are here. I have everything here. I built my life here. Although I had a hard time at first and it was difficult to adjust to the change and the culture, I really like it here. "
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"This is my home. My whole family is here. My friends are here. I have everything here. I built my life here. Although I had a hard time at first and it was difficult to adjust to the change and the culture, I really like it here."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Have you gone back to Mexico since you came?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "No. I’ve been in the States for 11 years. I’ve never tried to go back. Although I would like to go back, this is my home country. My life is here. I don’t have a reason to go back other than visit my family and old friends."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You went through college, did computer science, and graduated with your bachelor’s. What have done since?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "During college I interned in New York City at a company called Black Rock, a financial company doing great things with technology. I learned about the technologies and the products that they have. They have a product called Aladdin and it’s used widely across the world. They need a lot of engineers to support it and build upon it. Over the summer, I worked on products like Aladdin. It was really fun. It's definitely challenging. Studying computer science is one of the hardest things I’ve done after learning English. I didn’t know if I was good enough to do well for a career."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"But you were!"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes! I did it! I’m working as a full time analyst now in the San Francisco office. I’m working with the infrastructure team building internal tools. I’m learning a lot of things and I’m really excited what’s next for me. I hope to stay there for quite a while. It’s a really good company. They want to grow as a fin-tech company and I want to be part of the growth, helping out with whatever comes our way."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Besides staying with BlackRock and helping it grow, do you have any other long term plans?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I always wanted to have my own business. My friends know that I want to open my own company. I’m still not sure what it would be about but I want to be a business owner. My ultimate goal is to take it back to Salinas and provide opportunities there. Salinas has a special place in my heart and within the next 5-10 years I want to return and give back to my community. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "We’ve now gotten to know your story. Let’s switch gears to recent events. On Sept 5th, the Trump administration announced it’s decision to rescind DACA. What was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was definitely nerve wrecking. I didn’t know what I was going to do. My other four siblings are undocumented and all of us are DACA recipients. Three of us are software engineers that are starting our careers. BlackRock was aware of my situation and I knew I had their support. I’m more worried about my other siblings because they don’t have that support. My sister is still studying and still needs to finish school to have more stability.  My two other brothers are also trying to get their career paths established. Immediately, I became worried more for my siblings. The announcement caught me off guard. I didn’t know about the build-up and I found out because someone posted it on Facebook. I was clueless with what was going on and I wanted to stay positive but as much as I tried, the thoughts of doubt and uncertainty rolled in: Am I going to have to leave? How am I going to stay in touch with my family?"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It’s a time of uncertainty but we can’t stop here. This isn’t how we’re going to go down."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Lastly, as Congress is deciding a legislative solution for us, what would you like to say to them?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I would just say to have a little compassion. It’s really hard for us. We work hard, we’re not doing anything wrong other than coming here illegally. We’re trying to be good people. We’re not trying to take anyone’s job and we’re working as hard as anybody. We’re Americans. Understand us. Understand our stories. We’re trying the best we can. It would be great if they don’t take away the opportunity they granted us. Even if we can’t get a path to citizenship, if they can let us continue and keep our work permits and DACA permits, that would be enough. We’re not asking for a citizenship, we’re just asking to let us keep DACA. For us, DACA was good relief and we were able to help our families because of it. We’re fighting. Fight for us, please. Let us keep growing. Let me keep the chance to provide for my family. Give me the chance to show you I work as hard as anybody. That's all I have to say."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"For us, DACA was good relief and we were able to help our families because of it. We’re fighting. Fight for us, please. Let us keep growing. Let me keep the chance to provide for my family. Give me the chance to show you I work as hard as anybody. That\'s all I have to say."'
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

export default Miriam;

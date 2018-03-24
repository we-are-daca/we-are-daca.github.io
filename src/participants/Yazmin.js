import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import MediaQuery from "react-responsive";
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

class Yazmin extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Yazmin",
      occupation: "English Major",
      timeSinceArrival: "18",
      country: "Mexico",
      interviewDate: "September 27, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/yazmin_portrait.jpg)`,
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
                          "Tell you about your early years and where you come from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "I’ll start before I was born. From my father's side, there are seven siblings where my father was second to the youngest. My great-grandfather came to the U.S after the Cesar Chavez era. He was well off--he would provide for his family and would cross the border very frequently.  My father followed the footsteps of my grandfather by coming to the U.S to be able to provide for our family. My father hitchhiked from Michoacan, Patzcuaro to Chicago, Illinois where he stayed there for about half a year working as a carnicero [butcher]. Eventually, he hitchhiked his way to Salinas, California--the town my grandfather had been coming to for years to provide for my father and his 6 siblings."
                        }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "My mother brought me here in February of 2000 to Salinas where we shared a two bedroom apartment with six other families.  My father couldn’t handle being with all the other families so we moved into an apartment of our own. Our family was doing well until the recession hit, and at that point, we couldn’t afford our apartment anymore.  We decided to have a yard sale even when it was forbidden at the apartment complex, and sold absolutely everything--even our utensils. We only kept our sheets and a few pairs of clothes. We had nothing in our cupboard--not even rice or beans. During the time, my father had trouble at work. He was being harassed by a woman at work, which later led to him having to give up his job for the fear of harm to our family and especially my mother. The woman at work took it upon herself to go after my pregnant mother for the sole attention of my father."
                        }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "As money became even more scarce, I could tell my parents were becoming very stressed--the kind of stress I had only seen in people in movies. My parents’ attitude changed drastically, especially on my father who was raised in a very masculine environment where a man takes care of his family with no help of anyone whatsoever. It also didn’t help that my dad had it hard as he was growing up: He never finished elementary school, and barely finished 4th grade. My father always had to stand up for himself from siblings since he was one of the youngest, and also very petite in size. He was abused mentally and physically, and I believe that is why he had many insecurities, which led to many of his actions during our shortage of money."
                        }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "The littlest things would upset him which led to the abuse. He would hit me or put me down excessively. There was this time--one and only time--where he hit my mother. It was while she was pregnant with my youngest little sister. It wasn’t so more of a hit but a kick to her leg. From then on, I grew up very quickly. If I learned anything from this environment was that when you look at the enemy in the eyes, you do all you can to stop them."
                        }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "A few months later, my father started becoming extremely sick. The illness began in his leg--it appeared very, very swollen. He started getting treatment but it did not work. After a year, my father became even more ill with breathing problems, sleep apnea, and blood flow outside of his system. Soon after, we were told he had stage four cancer. I didn’t know how to feel. This man I always saw as a monster was suddenly immobile. Although he was not given much hope, he kept a positive attitude. While everyone was enjoying their summer vacation or winter break having fun, I was accompanying my father to his chemotherapies. At his therapy sessions, I would have to go and interpret for him."
                        }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "I was the last one to see him on the day of his death. As I ran into the room, I saw his head lean to his side. I watched my father die; I was the last one to see him alive. He spat up black blood and let go of his last breath. All I can remember is shaking my father to make him wake up and my mom saying: “Well, that’s all we can do.” I called the paramedics, and we prayed and prayed---it was the longest 4 minutes of my life and through it all I did not shed one tear. I was in disbelief and I didn’t know what to feel."
                        }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "[Pauses]"
                        }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                        {
                            "I had to help organize the funeral since my mother couldn't speak English. I can cry now, but at the time I couldn’t. Eventually, I realized I felt relief that my father passed--it’s sad to say it--but I was relieved. Although I was hurt by him in many ways, it has made me stronger. I do not hate him; rather, I thank him. Not for the beatings obviously, but more of the life lessons he gave me all throughout my childhood. I am a strong woman, a strong worker, and a strong human being who can look at any obstacle and surpass it. If life hits you hard, you don't cry but rather, you charge right into it and take what is yours. I became just like my mother, the strongest human being I know. She has surpassed all those years in the dark and made herself a new woman. A new woman that perhaps was there before, but I never got to see. She is my confidant and my hero. Our family may not have a lot but in a way, I am glad we don’t because I would have been blind to the sight of my amazing family that does not quit."
                        }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Wow. I have no words. I just want to thank you again for sharing your story with us and for staying strong throughout the years."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "[Pauses]"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Thank you. My father raised me tough and I'm able to handle my stuff."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You touched a little bit on school--let’s talk about it more. How were your experiences at school?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "In middle school, I was a good student--I never really asked for help. My freshman year in highschool, I had very good grades and good teachers, but I lost interest the following year. I felt hopeless because I just thought: “What was the point? I have no future waiting for me once I graduate.” I went to Salinas High School--a predominantly white high school and I felt left out. I felt like I didn't fit in, and I felt like I didn’t belong. I also felt I didn’t or couldn’t belong in Mexico."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I was in AVID (Advancement via Individual Determination) for all four years of high school. It was during AVID while learning about college applications when I felt support for the first time.  I remember a teacher said, “Raise your hand if you’re a DREAMer and you want to apply to college.” It was when I saw four other hands in the air that I felt that I belonged. I learned people like me were actually applying to schools. So, I applied to CSU Long Beach, East Bay, Monterey, and Fresno. I was waitlisted to all four schools and was told to raise my grades for the following semester. I knew I couldn’t and I gave up on the idea of going straight to university."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "While going to school, I was working at Burger King where I was promoted to manager two weeks before my 18th birthday. It was very difficult because there were a lot people who worked there that were much older than me--some being almost forty. They couldn’t accept that I was seventeen and bossing them around. I felt a lot of resentment and some harassment. I ended up resigning because I found out a lot of them were stealing from the restaurant, and I couldn't afford it being pinned on me as a young manager. Working at the restaurant gave my family stability it had never had. I was able to help my mom and I was able to buy my sisters and my mother Christmas presents while I had that job. Having Christmas presents was something we weren’t able to do growing up."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I took a year off from pursuing school because I felt like I couldn't work and study at the same time. I feel like a lot of people don’t know what they want to do so, I feel like the year I took off helped. I spoke to my sister because I wasn't sure what I wanted to do-- we started discussing about my likes and dislikes and figured it out right away. All I knew was that I always wanted to be a fashion editor, and she reminded me how much I loved writing, and how she thought I was good at it. I won a couple of competitions with my writing so, that’s why I decided to pursue English. I like the major so far and all my teachers have been very supportive. My classes haven't been very difficult--yet. My hope is to transfer to UC Irvine since it has the most diverse campus composed of a lot of immigrants--both undocumented and DREAMers. I’d like to be an English TA and declare a double major with the second degree being Fashion. I’m also looking into taking religion classes and choir."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"I remember a teacher said, “Raise your hand if you’re a DREAMer and you want to apply to college.” It was when I saw four other hands in the air that I felt that I belonged. I learned people like me were actually applying to schools.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Let’s talk a bit about identity. Would you say you consider yourself an American?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Well, I feel like an American is anyone who tries their hardest in life and tries to make a living. It doesn't have to do with race or anything. The history of race is meant to segregate by color. Skin is just a protection layer--take that away and we have the same blood and bones."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Have you gone back to Mexico to visit? If not, would you like to?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I would like to go because I’d like to see everything myself--I want to see this beautiful place for myself. My cousins send me photos of places and I want to visit my family. Those who are still there and those who have passed away. I was looking for programs to go until my father passed. My aunt passed away from cancer and I feel like I could have been there for my family."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Let's switch to current times. On September 5th, the administration rescinded DACA and has left it to Congress to come up with a solution. When you first heard, what was your initial reaction?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I cried. It reminded me of the morning after election night where I stayed in bed and didn't look at my phone. My sister tried texting me and told me that Trump won, but I couldn't bear hearing it. I’m not sure what came upon me, but I will not leave this country. Trump went through a lot like me--I can’t hate him because of this. His father treated him like shit, and he does things to get attention and is persuaded easily by anyone. He’s a puppet. Although he is the most hated person, I would like to get to meet him. We are both vastly similar but in very different aspects."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"The history of race is meant to segregate by color. Skin is just a protection layer--take that away and we have the same blood and bones.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Let's say nothing crazy happens. Within the new few years where do see yourself?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Helping my sister. My second youngest sister wants to go to Stanford--she has 4.3 GPA, volunteers, does sports, and stays up until 2 A.M. doing homework. I would help her with absolutely everything--I’d get a second job and pay for everything."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                          "I also want a better job. I want my mother to know she has the ability to take the day off from working in the fields. I want to be able to say: “I’ll pay for the bills mom, don't worry.”"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Last question. As Congress continues to work towards a solution, what would you tell them if you had the opportunity to say so?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "The United States of America is built on the blood and tears shed of many who have come from all walks of life. At one point in time, this country was the land of liberty. The moment one walks into this land, they feel as if it is their home. I am a proud Mexican woman, yet consider myself American 100%. All my life, I have had dreams of going somewhere else in the world like any child does but even in those dreams, I always come back to the U.S. We are a country of diversity; we are a country of liberty--for it is the backbone of this country. Let’s not forget our democracy, which has its flaws but serves well enough to give justice back to those who deserve it. With prosperity, comes the future and with it, all of us."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Think of your ancestors. Did they have it easy? No. Look at your position you’re in. How did you get so lost? How can you not see the aspiration in humanity? You cannot take your job easily. You have so much power and there are lives in the line here."
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

export default Yazmin;

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
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Billboard from "../img/billboard.jpg";
import { NavLink } from "react-router-dom";

class Sandra extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Sandra",
      occupation: "Computer Science Major",
      timeSinceArrival: "12",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/sandra_hero.jpg)`,
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
                        "I was born in Mexico in 1996. Everything was fine--I lived with, and was initially raised by, my grandparents because my parents were here in the States working. One year, my mom decided to come back to make her own home and planned to stay with us for a couple of years. After a year or two, she decided not to have the family apart anymore. So, out of the blue, she brought us over to the United States. I had a goodbye party at my school and that was it. I was about ten years old when we came, and I didn’t know much about the fact of us not having papers and having to cross the border illegally. Crossing the border wasn’t as bad as I thought it would be. In fact, my parents were well off and they were able to pay someone to cross me over in the easiest way they could find--a car trip."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Once I got to the States, everything was different. I had seen pictures; I had seen videos; I had heard people talk about the United States and how it was so great with it’s many opportunities it offered. It was not what I expected. We were lucky to be one of those families that had relatives living here already. My uncle took us in and it was my family of eight living with my uncles in one house. It was a lot of people for a tiny house. My siblings and my parents shared a room, and we tried to make the most out of it. I think the hardest part was adapting to the language and the culture here. I thought coming over from Mexico, and not knowing any English, would mean people would support me and help me through. However, it wasn’t like that at all. I had a couple of teachers that really discouraged speaking Spanish in classrooms. Even when my mom talked to them about me not knowing any English, they refused to speak Spanish in the class and they wouldn’t explain anything to me in Spanish. I had to make friends, find people that could translate, and just get through it the hard way. Math was still hard for me despite the fact it was all numbers--I just couldn’t read the books."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My mom got tired of the lack of help and she transferred me out to a special school where I was taking classes in both English and Spanish. The teachers there helped me learn and it took me two years to get a good understanding of English. Then, my mom transferred me back to the previous school with the teachers that didn’t care about me. I didn’t want to go back--I didn’t have a good experience there. I wanted to stay at the current school where I could speak Spanish and communicate without having any issues. However, I couldn’t stay at my current school anymore since I was at a level where I could learn school subjects in English. It made me feel sad, but it also made me feel proud because I was out of there and I was at a level where people could understand and speak to me."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My parents always emphasized school. I’ll never forget what my mom told me, ‘As long as you’re in school, I’ll always pay for your education.’ My oldest brother was our biggest example, and the one who had to clear more obstacles than us, since he was the first one to go to community college and had to pay out of pocket. My siblings and I didn’t know about all the opportunities available to us--my brother was the one who taught us everything and showed us it was possible."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"My siblings and I didn’t know about all the opportunities available to us--my brother was the one who taught us everything and showed us it was possible.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How was your high school experience? I ask because this is usually the time where people start becoming adults and start having an idea of what they would like to do. For the many recipients I’ve spoke to, it’s the time where they find out their legal status and how it affects them."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "High school was one of the best experiences I had. My parents made sure I knew what it meant to be undocumented, making sure that I knew of the obstacles and barriers that I was going to run into during this time."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t have many issues in high school. I found friends that were bilingual like me, people who I could relate to on many levels. It wasn’t too bad, but it’s when I realized I needed to get my stuff together and find a way to get scholarships for a university."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t know what I wanted to do exactly, but nursing and veterinary caught my attention. In high school, they say you don’t really think about what you want to do until your senior year and that’s what happened to me. I was really shy my freshman year, and I also wasn’t taking advantage of opportunities so I pushed myself into sports. That gave me a little more confidence as I began talking more, hanging out with more people and started making more friends. I also happened to be pretty good at sports--well, only track [laughs]. I thought it would be possible for me to go to a university through a sports scholarship, but I didn’t work hard enough for it and I decided to seek other opportunities."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My brother started talking to me about technology and my sister started to encourage me to get into technology as well. Both of them always told me, ‘Do technology. Educate yourself in computers, and after you get your education in computers, you can keep going with whatever you want.’ Because of this, I decided to pursue an education in computer science."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"We know you’re in a three year computer science program now. So far, what has your experience been like in the program?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It’s tough [laughs]. It’s tougher than I thought. I’ve have friends that say their college experience has been chill, but, over here, the program is fast paced. It requires a lot more effort; requires a lot more dedication. It’s not something I was expecting, but I know it’s something that will get me somewhere. We get a lot of support and I feel that’s something every college student should have. You have people to talk to you, people to ask for help, and the teachers are always so helpful."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I want to incorporate technology into nursing, but I don’t have any kind of nursing background so I would have to go back to school for that. Right now I’m focused on getting my education in computers and getting a job after I graduate. At that point, I’ll give some serious thought about returning to school for another degree."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"That leads me to my next question. Assuming nothing crazy happens in the coming months, where else do you see yourself in the next few years?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I want to be able to help out other people just like you’re doing right now [addressing the interviewer], but I haven’t thought of a good way to do so. My thinking is that if I start working and I continue growing, maybe then that would be the best way to have influence over something."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "In the vein of future plans, would you like to become a U.S. citizen in the future?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I really would want to at some point, but I don’t think I need to be a citizen to do what I’m doing. It’s a status; [however], if I set my mind to something, I’m going to achieve it, no matter what. It would be nice to be a citizen--it would help out with some of the obstacles, but it’s not something I’m emphasizing right now."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "As we wrap up, let’s talk current events. On Sept 5th, the Trump administration announced it’s decision to rescind DACA and punt it to Congress to come up with a long-term legislative solution. When you first heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I thought it was a lie. I couldn’t believe it. To me it seemed like they announced they were going to take DACA down and try to make it sound like it was for the better because Congress was forced to do something about it. However, I feel like they announced it that way--the whole rolling back on the program--to simply cover up the fact that they weren’t going to support us anymore."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"As Congress works towards a solution for us, what would you tell them if you had the chance?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "All the bad things people have said about us are not true. We’re here because we want to do something better in our lives. We just want to get better. It would be nice if they gave us the opportunity to do so. It would make our lives easier."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"All the bad things people have said about us are not true. We’re here because we want to do something better in our lives. We just want to get better.\""
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

export default Sandra;

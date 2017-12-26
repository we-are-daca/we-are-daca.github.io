import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
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

class Irais extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "Irais",
      occupation: "Computer Science Major",
      timeSinceArrival: "15",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "September 23, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/irais_hero.jpg)`,
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
    console.log(this.state);
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
                    <b>{"Tell me about your early years."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in Oaxaca, Mexico. I was three years old when my parents came to the United States in search of a job. When they left, I got very sick. I wouldn’t eat and it took awhile for me to get better. They came back when I was about 4 years old, and brought my sister and I to the U.S. We originally came to Morgan Hill and we stayed there for a while."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"[Pauses]"}</span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The United States is all I’ve ever known. We came to Salinas when my mom was pregnant with my little sister. Since my family only spoke Spanish, my English was not very good; thus, I wasn't the greatest student. I really liked math though, other subjects were a no. I ended up getting a 100% on one of the state tests: the STAR test. My teacher told me I got a perfect score, and said I can be anything I wanted. He said I can be a doctor--I guess that's where my ambition to become a doctor began."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It didn’t hit me that I was undocumented until my sister told me, ‘You can't go to college.’ I said, ‘Wait, why not?’ She said: ‘You're undocumented. You don't have papers.’ When I got to middle school, it's when it hit me the most. I started to learn about college and thought maybe I can’t make a life here."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"How did that make you feel?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was really depressing. I really wanted to become a doctor and I wanted to help out in my community. I wanted to help the people who had it worse than I did."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In middle school, I did my best. I didn't want to give up just because I couldn't do anything afterwards. In high school, I started doing volunteer work. I thought maybe I can't work but I can still help. I got into the top 25 list of academic performers in high school for my sophomore, junior and senior year. The only reason I wasn’t in it my freshman year was because I got a B in a class. During the time, my sister was in college doing the CS-in-3 program at Hartnell College, the three-year computer science undergrad. She told me about AB-540 and other ways I can go to college. I saw I could get scholarships and I thought, ‘Oh! I didn’t have to give up on my dream.’ She introduced me to computer science and also introduced me to Technovation--a worldwide competition for girls to create an app using MIT App Inventor. With a team, we built an alerting app-- a notification app. It sent a text to a person when you’re entering a sketchy area, a place that’s not secure, and if you didn't reply during a certain amount of time it alerted them. We didn't win, but it was great experience."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"When I got to middle school, it\'s when it hit me the most. I started to learn about college and thought maybe I can’t make a life here."'
                        }
                      </span>
                    </p>
                  </blockquote>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I eventually took a Java course and I thought, ‘You know what, I can be a computer scientist.’ I still want to do something in the medical field, but incorporate computer science instead. Definitely computer science. I also did extracurriculars with Girls Inc. and R.I.S.E (Recruitment in Science Education) while starting to learn about college and the outside world. When it came down to applying to colleges, my choices were: Hartnell, a requirement for our school, San Jose State, Cal Poly, UC Davis, and UC Santa Cruz. I got into Santa Cruz and CSUMB, but I was waitlisted at Davis. At first, I was debating if I want to do the CS-in-3--either take the full scholarship and stay or go out and embrace what's out there. I decided to stay, making my experience with CS-in-3 great thus far."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You’re starting your second year in the CS-in-3. How was your first year?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "First year and a half wasn’t that bad. I felt the stress at times, but as long as I managed my time and gave my full effort, it was great."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You’ll be doing an internship next summer, which should be exciting; however, is there anywhere you’re aiming to work at?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Not really. There is Slack and I like that they volunteer a lot. It’s one of their priorities, which I really like especially since that’s what I did a lot in high school. My goals have changed alot: I dont want to be a doctor anymore, but I still want a small background in the medical field. I feel like it’ll be beneficial to help when someone is in need. Right now though, I really want to be a teacher--a high school level teacher."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I want to build stuff, but I ultimately see myself in three or four years getting my teaching credentials so I can begin teaching."
                      }
                    </span>
                  </p>
                </div>
              </div>
              <div className="dacamentor-interview">
                <p>
                  <b>
                    {
                      "Fastforwarding to current events: On September 5th, the Trump administration decided to rescind DACA, and gave Congress six months to craft a long-term legislative solution. What were your initial reactions?"
                    }
                  </b>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "I was mad. I was sad. We worked so hard to get where we're at right now. I get that people are mad, saying that ‘we’re taking away American jobs,’ but it’s all about trying. If they didn’t try their hardest in getting the job as we did, why do they deserve it more than we do?"
                    }
                  </span>
                </p>
              </div>
              <div className="dacamentor-interview">
                <p>
                  <b>
                    {
                      "As Congress works on a long term solution for us--if you had the opportunity to tell them something, what would to say?"
                    }
                  </b>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "We didn’t come here to have fun, to steal stuff or ruin other people's lives. We came here to better our lives. I guess...I get people want us to do stuff legally, but the law sometimes isn't our greatest protector. Sometimes the law is a little too harsh, and at least for DACA, we came here to continue our lives with our family--we didn't want to be left behind. Some didn't know what was going on; we didn't know we weren’t supposed to be here. We're trying our best here in the United States. It's hard because there's a lot of competition. We’re not doing anything harmful toward society, therefore, we shouldn't have to be suffering like this."
                    }
                  </span>
                </p>
                <blockquote>
                  <p className="dacamentor-quote">
                    <span>
                      {
                        "\"Some didn't know what was going on; we didn't know we weren’t supposed to be here. We're trying our best here in the United States. It's hard because there's a lot of competition. We’re not doing anything harmful toward society, therefore, we shouldn't have to be suffering like this.\""
                      }
                    </span>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Irais;

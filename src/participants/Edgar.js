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

class Edgar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "Edgar",
      occupation: "Software Engineer",
      timeSinceArrival: "23",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/edgar_hero_1.jpg)`,
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
                    <b>
                      {
                        "Tell me a bit about your early years and where you're from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {"I was born in Uruapan, Michoacán..."}
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "And, honestly, I don’t have too many memories from over there. There are those few such as being in my mom’s store or riding around with my dad on his motorcycle, including this one time where I got hurt because we fell while riding the bike (laughs). Those moments are like some of the few things I remember from over there. Also, there was a time where I recall hitting my head on something. I still have the scar from the incident actually. Besides that, I don’t remember too much. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You mentioned being in your mom’s store. Do you recall what items the store sold? Also, what was your father’s occupation? "
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My mom’s store sold stuff for knitting. It’s kind of like an arts and crafts store in general. At least I think that’s what it is now. My grandma has the store today, but I believe they are still selling the same things as before.  My dad was a handyman for a long time. In fact, he had a bunch of different jobs. He ended up—I don’t know how—but ended up finding work in jewelry. When we moved here that was what he was mostly doing, he was jeweler. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"When did you all come over to the U.S?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "We came over in March of 1994. We had a visitors’ visa then we just stayed here, letting our visas expire. I was three years old at the time, but the next month I was about to turn four. I came along with my brother and my parents. Meanwhile, my mother was also pregnant with my sister. I don’t know whether my tia (aunt) was already here, but I for sure could say that my tio (uncle) was already living in the States. My tia was with her daughter, and my tio was not married at the time. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How was your experience overall? Did you know any English when you came here?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "No, I didn’t know any English. However, from what I heard, I was sort of learning the language from watching T.V. I usually watched Cartoon Network, or whatever was on T.V, and that’s how I started speaking English. I went to preschool too, and from there I believe preschool helped a lot. Also, once I got into elementary school, I made a few good friends and they helped me improve my English."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t have a hard time fitting in. It was, in fact, pretty easy. I don’t recall it being super, super difficult getting along with others. The first day we showed up to elementary school, I meet up with these two dudes—this was the recess before we actually went into the classrooms—and they made us go in this line where I am standing next to these two guys. Then we began asking each other “are we all like friends now?” and it’s like, “Yeah we’re friends.” And those are the guys I hung out with all the way through elementary until the 7th grade. So, my first experience meeting other kids, I would say it never felt weird."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"I didn’t know how to feel about [my status], but it comes to a point where you just have to accept the fact until it becomes whatever it is—you make the best of it."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"How were your high school years? "}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "High school was cool. However, high school is when I first learned that I couldn’t get a license. Maybe it was before that, but I definitely recall a talk where my parents were like, ‘Look we can’t get into trouble. You can’t do what others are doing, you won’t be able to vote even though people will bring this stuff up. You also can’t tell anyone.’ My legal status has always been on my mind since middle school, I somehow always knew, but it wasn’t until we talked about me driving where the conversation actually came up. It was weird. I didn’t know how to feel about it, but it comes to a point where you just have to accept the fact until it becomes whatever it is—you make the best of it. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Growing up did your parents emphasize school? "}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yeah, school was always an extremely big deal. When I was going to school, there was a lot of stuff that were still unknown about what was going to happen. I believe it was the year before I graduated when they signed the AB 540. I didn’t even know if I was going to go to college. I honestly didn’t even apply to too many colleges. I only applied to both Cal Poly and San Jose State. I didn’t even know what major I wanted, but I put kinesiology first for Cal Poly while going undecided for San Jose State."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I think in April of my senior year, I got a response back from Cal Poly. My parents, meanwhile, really wanted me to go to San Jose State because it was at a closer distance to them, but I didn’t hear back from them until way later—if I can recall correctly, the news came midway through June. San Jose did accept me, but at that point I had already accepted Cal Poly. "
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"When I was going to school, there was a lot of stuff that were still unknown about what was going to happen. I believe it was the year before I graduated when they signed the AB 540. I didn’t even know if I was going to go to college. I honestly didn’t even apply to too many colleges."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"How was your experience at Cal Poly?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was cool. I really liked my college experience. When I started my first and second year, I didn’t really perform too well because I wasn’t used to the demands of college academics. I honestly thought it was like an extension of high school. High school was not super challenging since all you had to do was finish your work and go to school. In college, however, you are expected to go to school, but a lot of the learning is done on your own. I definitely had a hard time getting adjusted, but, at some point, I figured it out."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I originally tried to do computer science, but at that point in my life where I tried to change my major to computer science I was like not good in school. I don’t know why I selected CS as a potential major, I guess I always thought it was more interesting...Actually, I always have had a keen interest in video games. I think, honestly, that is what first drove me towards the major because I wanted to do stuff for video games. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You graduated with a degree in Kinesiology, what happened next?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I went back to school. This was already at the time when DACA started gaining traction in its first years. I think my parents were the first to tell me about the application. My parents were having immigration trouble and they heard about DACA through their immigration lawyer. From there, I filled out all the forms, I gave them to the lawyer, and she double checked everything. I remember the first packet that we sent was over two-hundred pages. You need all the proof from as far back as you can recall being in the United States. So, I had records of everything from elementary school, pictures of us when we were younger, and the high school, who were super interested in this process, made packets of all the information concerning school records, grades and state standardized test scores. As far as filling out the DACA application, everything was straight-forward."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "After Cal Poly, I wasn’t sure what I wanted to study or do. So, I ended up working with my dad for a while at his store. I graduated from Cal Poly in January so I worked from January to the month of June—whenever the Hartnell summer semester started. This was in 2013. During that time, I reached out to a few counselors from Hartnell and I tried to figure out what my next possible steps could be. I then went to San Jose State where I pretty much barged into a counselor’s office and talked to them for a little while. My whole idea was that I wanted to do nursing so I was looking at ways where I could get my second degree. However, the counselors were telling me that I would be unable to get another bachelor’s degree because at that time the state was hurting for money, and were not admitting any students with a current bachelor’s; this was an issue for all state schools I am pretty sure."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I soon came back to Hartnell College, trying to see if I could get into the nursing program there. I talked to a counselor and told her about my situation. When evaluating my first few years at Cal Poly, however, they said my grades were still pulling me down, and that I wasn’t a very good candidate for the nursing program. All I had to do to be reconsidered for the program was to retake some classes for a better grade, which I was already set on doing. However, the counselor then mentioned a computer science program that had just came up at Hartnell called CSin3--this is after I told her about my interest in Computer Science. I reached out to one of the coordinators, got put on a waitlist, and eventually had an interview with the staff.  Things ended up working out once I got accepted into the CSin3 program."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How was your experience in the computer science program? "
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was good. It was really fast. It is a little bit frustrating that I wish it would have been a bit faster because I felt like a lot of the times I was spinning my wheels. But, it was good. I learned a whole bunch of stuff and I got to work on real-life projects outside of school. And the outside work is where I really attribute most of my knowledge."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In my second year, I got an internship from Apple. And I joined their  IS&T internship program, it is basically a position where you intern during the summer and, if your manager likes you, you can be on board and back to working with Apple. Once you are a full-time employee, you can do up to four rotations within the IS&T department. I just finished my first year in August of 2017, and, yeah, I’ve just been busy as hell."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "So assuming that nothing too crazy happens to people like us, where do you see yourself in the next couple of years?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I probably see myself still working at Apple. Hopefully, by that time, I get enough of a wider knowledge where I’ll be able to move myself somewhere else or start something myself. Hopefully, I can get a home by then, too."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"I remember the first packet that we sent to apply for DACA was over two-hundred pages. You need all the proof from as far back as you can recall being in the United States. So, I had records of everything."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "As we know on September 5th, the Trump administration decided to rescind DACA, giving it up to Congress to find a solution in the next six months. When you first heard about it, what were your initial reactions?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "When I first heard about it, I wasn’t--I mean I was upset--but it was something that I heard coming for months. So, I was prepared. You know, the thing is I don’t feel too bad about it because it sounds like it's going in the right direction right now."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "As Congress works to figure out legislation for us, if you had the chance to say something to them what would you tell them?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "If I had the chance to say something to Congress, I would tell them that the kids that the President is trying to have remove from the United States are all Americans. You can tell from my story, I don’t even know anything from Mexico. I mean my family lives there, but I wouldn’t know where to go, I wouldn’t know what to do. I think that is the same for the majority of us. We are not criminals, there is 0 percent of us that is criminal, and about 80 percent of us are currently employed. We are giving back to the community and we all have shown that we love this country."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"If I had the chance to say something to Congress, I would tell them that the kids that the President is trying to have remove from the United States are all Americans. We are not criminals, there is 0 percent of us that is criminal, and about 80 percent of us are currently employed. We are giving back to the community and we all have shown that we love this country."'
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

export default Edgar;

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
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Billboard from "../img/billboard.jpg";
import { NavLink } from "react-router-dom";

class Luis_2 extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Luis",
      occupation: "Computer Science Major",
      timeSinceArrival: "17",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "October 31, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/luis_2_hero.jpg)`,
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
                        "Tell me about your early years and where you come from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My family and I are from Oaxaca, Mexico. My dad wasn't around much--he’d come to the United States for work. He’d come for a year and then go back to Mexico--always back and forth. My mom would always tell my dad, 'We all have to move to the U.S because it’s the land of opportunity. It would be better for the children, and we would have a better chance to do what we want.' My dad finally agreed, and I was 4 years old when I came over to the States. There was a woman who used her children’s passports to pass us over. I was told they dressed me with girl clothing to cross the border. My parents came through the desert, the way my dad would always come. I can’t say it was a friendly experience, especially for my mom, but we got through it. They told me the story of how my little sister cried, and how I would comfort her by saying, 'Hey, it's going to be alright' with tears streaming down my own face. She’s about a year and a half younger than me."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "We landed in Fresno, and stayed with our family who was here already. My sister and I stayed with my uncle for two months before my parents came and stayed there for a bit. Then we went with my aunt in Castroville and lived there with her for almost two years."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I don't really recall much of my early years, but I do remember going to preschool and hating the bus for the first time. But, on the second day, I remember saying, 'Take me on the bus!' I really liked school: my teacher would call me a learning sponge because I would learn and pick up things quickly."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I was told they dressed me with girl clothing to cross the border. My parents came through the desert, the way my dad would always come. I can’t say it was a friendly experience, especially for my mom, but we got through it.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Did your parents emphasize school?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes, definitely. My mom would always pressure us to complete our homework. She would ask us what we’re doing and to read on our spare time. My parents worked in the fields and usually would have rotating schedules. Also, work would drop in November and December and then pick up again in March during the spring."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "I remember it was tough in the months of winter. We’d live off of our savings, and it was just enough. When my parents worked in lettuce, my dad would look at other jobs. Once the lettuce season stopped, they picked up work in a flower shop--a floreria. At the shop, they would harvest the seeds and come home extremely late; It was mostly done at night. While they worked, we went to school and stayed with someone who would take care of us. Something that I always admired from my parents was how they made sure to attend our parent meeting conferences. They were always there, which motivated me to do my best and honor their work by doing everything I can at school. One of the biggest fears I’ve realized a couple months ago is that I am afraid of disappointing them. It really is my biggest fear."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What else can you tell me about your childhood? Was it hard to assimilate?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I remember, in kindergarten, most of my classmates already spoke English. One of the first words I learned was apple tree. We moved around a lot. We had moved to seven different houses in a span of five years; yet, we went to Sherwood Elementary and always lived in the Salinas area."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Sherwood is an area known for its poverty. I remember taking the S.T.A.R test: we’d be pushed to do well on it, but the scores were always very low. It wasn't a big school and it didn't have a good playground either. Despite this, I still liked school--I liked reading a lot. I liked it so much that I would get in trouble. My teachers would get mad because of how much I read and also for reading at my desk. They would ask me a question about the class discussion and I was always able to answer them, which would upset them more. Afterwards, they would just ask me to put away the book. [Laughs]"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Do you have an idea of why you liked to read so much?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I felt like whenever I came across a good book it was an escape. My parents were pretty poor. We couldn’t afford anything really. In fact, back when we were promoted in elementary school, a lot of my classmates got new phones as graduation gifts. As for us, we weren’t able to afford it. The first phone I ever had was when I was in high school."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Let's talk about your legal status. Were you aware of it as you were growing up?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Um, not in the sense that it was daunting on me. My parents may have talked about it, but I never really understood what it meant. It wasn't until I was in middle school that I realized it was something that was going to affect me. There was this program that people can join to get money for college but my teacher told me, 'Sorry, you can't do this program.' I asked why, and I didn't get a response. It was a bad experience to find out I was different, and knowing about it didn't really hit me until I was in high school. It was during my sophomore year of high school when I realized I didn’t have access to the same opportunities such as financial aid for college. I got the idea that I couldn’t go to college after high school because I was undocumented. I was told college is really expensive, and I saw how my family wasn’t going to be able to support me. I wasn’t going to get any assistance nor any government funding. I was just going to be able to work in the fields--this was my mindset and it got to me."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Tell me more about your high school years and experience."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Like I said, my family never really had money. Growing up, I was always fascinated by technology: I was curious over something as simple as to how a fax machine works. However, my family never had the money for those things. I knew I wanted to do something with technology from a young age--I thought it was one of the most amazing things you could do. I didn’t have a computer nor a phone, but when I did, it was a cheap one--only a nine button phone. Then I just told myself, 'Somehow, you're going to buy a computer,' and I did. I worked in the berry fields for an entire summer and was able to buy myself one. The following Saturday, after buying my computer, I enrolled in a JavaScript course at Hartnell College. The first day--there was nowhere to sit because of how packed it was. The following month, however, there was only four of us. I didn't understand why; I thought the subject was fascinating. I was told I could take the AP test, but I thought I wasn’t good enough at it. After the course, I knew I wanted to study computer science and it was around the time everyone was planning their next move. I started thinking about what I can do given my status, and I wondered if CSUMB would take me."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I always thought of myself as a smart kid. The problem was I only tried a bit--very little--yet still received super good grades. My freshman year in high school, I took Algebra 2 and bombed it as well as my English class. I realized I needed to get myself together and try my best because that was the only way to get ahead in life."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"Growing up, I was always fascinated by technology: I was curious over something as simple as to how a fax machine works. However, my family never had the money for those things. I knew I wanted to do something with technology from a young age--I thought it was one of the most amazing things you could do.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"We know you’re currently a student at Cal State Monterey Bay. How did you end up there?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I heard about the program when Melvin, the advisor of the program, came to speak to my high school class about the program. It was only 3 years and intensive, but I knew it was something I wanted to do. I applied and got accepted."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {"Nice!"}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "At the same time, I was going through some pretty bad self esteem issues; but, I was able to set it aside, working through the math preparation course for the program at a pretty fast pace. It was five sections per week, but they preferred it by hours. I was called in and asked why I wasn't completing my hours. I was told I was going to be let go, and it was a pretty low blow for me. My mom scolded me and made me go talk to Melvin, who told me it was okay, and how I could just prepare for the program for the following year. So, I waited."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I knew I wanted to do computer science regardless. I was able to take two classes at Hartnell, preparing myself and getting familiar with the courses. I had one year to prepare for the program so I took classes alone and worked at McDonald’s on the side, which I was able to do with DACA. My days consisted of going to school and working at McDonald’s; going in at 8pm and getting out at 2am--wake up and repeat. It gave me a small sense of the struggle my parents went through."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Through the DACA program, you were able to get a job at McDonald’s. How did you first hear about the program?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was all over the news. I looked up a break down of qualification diagrams and I thought, 'Oh wow, I can apply to this.' We found a place in Salinas where they helped me apply. They gathered everything from my first grade report card to my college documentation. I was afraid that I didn’t include enough information as well as thinking what if it was too much information I provided. I thought, 'What if I get rejected? Do I get deported?' Submitting a DACA application was a lot of money as well--I remember my parents had a hard time gathering the money, all $600 of it. To them, [however], it was definitely worth it. They knew with DACA, I was going to be able to go to school, get a job and pursue the opportunities I’m interested in."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You’re in college right now--kicking ass--and you’re about to transfer to CSUMB. Let’s talk about future plans. Say nothing crazy happens, where do you see yourself in the next few years?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Let’s say I can still keep my status right now, and be able to go where I want to go, I see myself doing the internships that I’m applying to right now and hopefully getting a job with a startup. My biggest goal is to make something that everyone can use--something which I helped to create. I don’t want to work for a big company like Google. They already have enough people working for them. I’m sure everyone contributes their best to the company, but I want something where I can have an impactful role and be able to say, 'I helped make this product.' I don’t want to move away from here either. I know alumni from the program who have left to pursue opportunities in places like Seattle and New York, but I would like to stay local."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Down the line--maybe within the next three years--I would like to make an impact to our local community. It’s not as bad as everyone makes it out to be. It’s a great community, and I would want to create some foundation, or give to charities as my way of helping those in need. I know it’s not the best of cities, but it’s been here for me and I feel the need to give back to it."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "To continue talking about future plans, would you like to become a citizen in the future?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "For sure, no doubt. I actually had a relationship with someone who had legal status and asked me to get married so I can get my papers. I couldn’t do that to them and said no."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Let’s talk current events. As you know, on September 5th, the Trump administration decided to end DACA and has left it up to Congress to make a legislative plan within the next 6 months. When you first heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t see it coming. It was obvious that he was going to do something, but to say it’s completely gone...I heard rumors and thought, 'Immigration has all my information and can deport me when they wanted to.' That information leads to my family, and possibly getting them in trouble. It was a scary thought. Three months before the announcement, I renewed my DACA so I have a pretty good amount of time left. My sister’s expires pretty soon and she couldn’t renew hers in time--I’m concerned for her."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Last question. As Congress works on a solution in the coming months, if you had the chance to tell them something, what would you tell them?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The message I really want to tell them is to keep in mind that their work will defined the everyday life of ours. When they were talking about DAPA, deferred action for our parents, I was really waiting to see if they were going to do something about it, but it never passed. I always have my parents in my mind. Congress is working on a solution for us, but what about our parents? If you’re going to pass a law that protects our lives, it should also maybe form a pathway to citizenship--a form of safeguard to be able to keep our families whole and safe, living comfortably without having to operate in the shadows."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"If you’re going to pass a law that protects our lives, it should also maybe form a pathway to citizenship--a form of safeguard to be able to keep our families whole and safe, living comfortably without having to operate in the shadows.\""
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

export default Luis_2;

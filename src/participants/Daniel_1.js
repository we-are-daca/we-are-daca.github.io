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

class Daniel_1 extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Daniel",
      occupation: "Computer Science Major",
      timeSinceArrival: "18",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "September 26, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/daniel_1_hero_1.jpg)`,
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
                        "Why don't you tell me a little bit about your early years and where you come from?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was brought here to the U.S. about the age of two. My parents have always emphasized education because my dad finished an electric trade program. When we came here, my dad’s brother was here already and got my father a good job up in Hollister. My mom made sure we learned English as soon as possible. She would enroll us in summer school every summer even if we didn't need it. She said we’d thank her one day, and she was right."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Around 2008 when they passed e-verify, it hit my dad's work and he was laid off. My dad had set aside some savings for our college, and that's what kept our family afloat. Around the same time, he had some medical issues--he discovered a lump, and after a visit to the doctor, he had it surgically removed. Everything was left on my mother to take care of my brother and I, taking us to school, feeding us, and also taking care of my father. It left her no room to really work. It was a good thing my father had our college savings to pay for the bills while he was unable to work. Unfortunately, we ran out of the money so eventually my mother had to get a job. She started to work at Little Caesars, and that's how we were able to continue to pay our rent. We lived in an apartment complex, but after awhile the area starting getting bad. Down the street, a friend’s brother was murdered. My parents tried to keep us away by enrolling us in after school programs, sports, and the YMCA. My parents tried to keep us away from gang violence as much as possible."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The complex where we lived began to build a shed by my room, and the dust would come through the window and affect my asthma. My parents didn't complain because it was cheap rent and we couldn't really afford anything else. I ended up sleeping in the living room, which wasn't bad. I didn't mind it because unlike other families, we didn't have to live with many people. Eventually, the landlady ended up pressuring us to leave, and my mom wasn't taking it anymore so she started to seek help. There was even an article published on the Californian, the local newspaper. So, they started backing off, but they ended up giving us a notice of demolishing our apartment. At that point, we couldn't do much because legally they gave us notice. Thankfully we found a small house to rent. Since my parents knew they were going to pay a lot of rent, we decided to put it towards a good place and area. We ended up living behind Salinas High School, which was nice because we got to wake up and just walk to school. My brothers and I would play sports as well so it was just school, sports, school, sports. Every once in awhile we’d ask for a video game and my mom would buy it if we did good at school. It was a form of motivation. Instead of spending our money on drugs like most of our friends, we’d save it and buy a new video game console."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"We lived in an apartment complex, but after awhile the area starting getting bad. Down the street, a friend’s brother was murdered. My parents tried to keep us away by enrolling us in after school programs, sports, and the YMCA.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Would you say you had a hard time fitting in when you were growing up?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn't really have a hard time or much issues fitting in. There was a Caucasian lady at the boys and girls club named Jordana--she was really nice and she liked to help people. There was another coordinator at the migrant program at my school that also liked to help people. My mom knew the importance of fitting in right away and she would go out of her way to make sure we socialized. I made good friends with Jordana’s son, and learned to speak English through him. I didn't understand at first, but I slowly would pick it up. The migrant lady would sometimes invite us to events so we can interact with peers and make friends. Overall, we felt included. I guess it wasn't as hard as others might have had it, and I think it was mainly because of my mom and knowing how important it was for us. My mom made sure we had a good upbringing."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Is your brother a DACA recipient?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "He has DACA. He’s now doing marine biology--he’s on a good path. He finished doing his psychology requirements, but realized that he wasn't interested in going down that path. So, he's doing marine biology instead."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "For me, I got into computer science during my senior year when I was applying to schools. I got accepted in the local universities, but not into the ones I really wanted like Cal Poly or Cal Tech. I tried my hardest since freshman year, but I guess it wasn't good enough. I’m glad though because I wouldn't have had the money to pay for it all. At the schools I was accepted to I was offered some small scholarships, but overall it didn't cut it. My parents offered to pull out loans; however, I didn't want it to backfire on us in the future."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In one of my senior classes, it was Melvin, a college advisor, who came to speak about CS-in-3, a program to complete a computer science undergrad in three years. At first, I didn’t really pay attention to the presentation since all I was thinking about was how I would be able to just pay for schooling. When he mentioned the program offered $30,000 scholarships it caught my attention. Then I continued to listen: he said to do good in math and then later I started to look into what computer science was. I really didn’t know what it was, but the salary is what caught my eye. I thought even if I didn’t like it, I can still do it for a couple of years, get money, and get my parents out of here so they could stop working. I know my mom is getting tired, and my father can't work because of his medical issues. My mom is the main one supporting us right now. I don't get money from them; I mostly support myself with the scholarship money and financial aid."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t know know much about computer science, but you know, they gave me money. I would be out in three years, and the pay was good so why not do it? After some months in the program, I realized this is what I wanted to do. At first, I wanted to do electric engineering and follow a similar path to my dad, but then I started to code, which became something I like and wanted to do. I started to get really into it and started doing good. At first, the classes were hard at the beginning but then it began to be easy. I think it was because of all the summer school and the reading my mom would make me do. It allowed me to learn things quickly and understand the concepts easier--I didn’t struggle too much like my peers. I think the hard work early on paid off, but I still needed to study. My extra time is spent preparing for interviews, code prep, attending code meetings when I get the chance at CSUMB, and doing some side projects."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You graduated from high school, got accepted to CS-in-3, and got the scholarship. How are you liking it so far?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "So far I like it. It's better than I thought. At first, my mom was very skeptical--she said it was too good to be true. She wanted me to go to a better school, but I told her that I'll do my general ed and keep an eye out. If it goes bad then I’ll just transfer out. I said ‘General ed is just two years--it’ll save me some money.’ She still bugs me and keeps asking me if it's a good decision. I tell her there's some people that have finished the cohort and are making good money. She then asks if I'm doing it just for the money or if this is really what I want to do. I tell her this is what I want to do."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "We’re aware you’ve recently completed an internship with Facebook. How was that?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was really good. I think one of the main reasons we received the opportunity was because of one of the recruiters, Natalia, formed a partnership with CSUMB, and I think having her as a reference helped our resumes get more noticed. When I got there, another intern and I were from small schools while the others were from MIT, Cal-Tech, and other big schools. I was intimidated at first, but once we started coding I noticed we got concepts quicker even when we never visited them."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "At the beginning of the internship, you enter a boot camp to learn about different things at Facebook. Then you do Android Studio--you learn as much as you can for three weeks. After that you get partnered up with two other students and develop an app idea. For the last five weeks you built up and create the idea with the guidance of a Facebook engineer. I had an idea to create an app to recognize sign language in real time, translating them into languages, but after talking with the team I realized that with our knowledge it would have probably been not feasible in the short amount of time. We switched gears and developed something to fit our time constraint."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        'What was the app about?'
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was about increasing social engagement in youth and teens in their communities. Nowadays, we’re too lazy to search up events like protests and marches around us. With our app, you would just open it and put in a distance filter. Then, the front page would greet you with major issues where you can learn more about an issue you’re interested in. This app would inform you and let you know what kind of events are nearby."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Let's switch gears to recent events. On September 5th. the administration decided to rescind DACA and have Congress come up with a solution for us in the next six months. What was your initial reaction?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "When I heard that I didn't panic or fear. My thing is that I shouldn’t put too much thinking into it because Congress is coming up with something. If they're not, what will they do? Send us back to our home countries? They won’t do that; it’s too many students and workers to really send back. And well, if they do send us back then I have an opportunity to do something back there. I have the knowledge and supplies like my laptop. My mom said not to worry about that, we should just focus on school and that she'll take care of it. She said she’ll pay attention and keep us informed even if she's working."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {"Let's say nothing crazy happens, where do you see yourself in a few years?"}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I probably hope to get in a tech company in Silicon Valley such as Facebook. It's one of my main goals. I say for a good period, maybe about ten years or so; save some money and come back to Salinas, doing something like Melvin did. It show us there is a path out there for students because if it wasn't for Melvin, I wouldn't know what to do."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Maybe starting in elementary school because that's where hopes and dreams begin to develop. Show them they're more than just farm workers. I realized that there isn't really any outside help other than the people inside the district. I'd like to come back and help this community, and show the children they can build a good future."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {"Is that one of the major reasons you’re doing CoderDojo?"}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes. I do get paid and I do need the money. It’s an opportunity to help children in underrepresented communities, so why not?  I did it for two semesters now, this will be my third this fall, and it just got better. We give them our full attention and the advisors understand the importance of these children so she pays us well."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"As Congress decides to find a solution for us in the next six months, if you had a chance, what would you tell them?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "If you look at the students that are actually using all the benefits that are provided, they're the ones who are going to higher education to pursue something. Even the ones who do not qualify for DACA and are not using any resources, they're still contributing to the economy. It's a win-win for the U.S. If they don't pass it, they’ll probably lose us and a lot of support--things won't go well. They'll lose a lot of innovation of immigrants and that’s important for our country’s growth."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"If you look at the students that are actually using all the benefits that are provided, they're the ones who are going to higher education to pursue something. Even the ones who do not qualify for DACA and are not using any resources, they're still contributing to the economy.\""
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

export default Daniel_1;

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

class Octavio extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Octavio",
      occupation: "Business Owner",
      timeSinceArrival: "13",
      country: "Mexico",
      image: 'rosie_hero_1.jpg',
      interviewDate: "October 20, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/octavio_hero_1.jpg)`,
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
                    <NavLink
                      to="/statistics"
                      activeClassName="links"
                    />Statistics
                  </li>
                  <li>
                    <NavLink to="/help" activeClassName="links" />How To Help
                  </li>
                  <li>
                    <NavLink to="/help" activeClassName="links" />About
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
                <NavLink to="/help" activeClassName="">
                  How To Help
                </NavLink>
                <NavLink to="/help" activeClassName="">
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
              <SocialMedia />
              <div className="">
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Your early years. Tell me about your early years and where you come from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Okay. So I was born in Mexico City and I lived there for about 5 years. I think it was about when I was 2 or 3--I don’t remember exactly--but that’s when my dad started to come to the U.S. to work. My dad wanted my mom to spend more time with my sister so he didn’t want her to work anymore. We moved to Ayoquezco de Aldama, Oaxaca where my grandparents have a house. We lived in the little pueblo for about two years and I attended first grade and half of second grade there. Growing up there I started to notice I hardly saw my dad because he wouldn’t really come back here since it was difficult to go back and forth. I missed him a lot so I always asked my mom: “Why isn’t he with us? Why can’t we go visit him?” At that time, I didn’t really understand the concept of borders or that different countries existed; I just thought the world was one big place and we could go wherever we wanted to. My mom would just tell me my dad was very far away and I would always suggest to take a plane or a bus to go visit my dad--I was always reminding them that I wanted to see my dad."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I guess in the background of their minds, they started to hold the idea of having my mom, my sister and I move permanently over to the U.S and reunite the family for good. It made more sense as well since most of my mom’s family resides here--we had someplace to come. Initially, my mom didn’t want to come because of the dangers existing when trying to come to the country. After the winter vacations of 2nd grade, I got the news: we were going to see my dad and move to the U.S. I didn’t really know what it meant--all I knew was that I was going to see my dad again. It had been so long since I last saw him so I wasn’t sure if I should be excited or nervous--I didn’t know what I was going to talk to him about or do with him. Those were my younger years."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"I didn’t really know what it meant [to move to America]--all I knew was that I was going to see my dad again. It had been so long since I last saw him so I wasn’t sure if I should be excited or nervous--I didn’t know what I was going to talk to him about or do with him."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Wow. You were able to see your dad again and reunite the whole family; however, this was still a completely different place. Did you have a hard time fitting in?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The only English that I knew was one through eight--counting the numbers. Actually, there’s a couple of things I knew about the U.S: the money was different--the coins were different and the language was different. When I was in Mexico City, my school would try to teach us English by singing songs. I could name things like pencil, pen, window, and floor. I remember on our way to the border, I was trying to remember the numbers. I was counting the numbers: “One, two, three, four…”"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"[Laughs] Pretty much trying to get ready?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "[Laughs]. Yeah, exactly. I was getting myself prepared for this new world."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "When my grandparents came to Mexico to visit, they would leave behind change. I didn’t know what a quarter or a penny was. Before leaving Oaxaca, I took with me four pennies and I thought that was a dollar. I cleaned out a container of muecas (candy) and in there I kept everything I wanted to keep close to me: the four pennies as well a little ring one of my godmothers had given me."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Growing up, did your parents emphasize school?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yeah. All the time. One of the main goals for my mom and my dad was for my sister and I to go to university. Even technical school was encouraged. My parents didn’t go to college--they didn’t have the opportunity to do so where they were living. The only work around was hand labor and farm work. Both of my parents had family in Mexico City and eventually they moved over there and started to study. As they got older, they began to have the need to work and make ends meet; slowly, they stopped studying because it was difficult to work and study at the same time."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "For the most part, growing up was straightforward. I lived close to the elementary and middle schools I attended. When I got here, I was enrolled in bilingual classes. Around the beginning of 4th grade was when I finally got my English proficiency but I still stayed in my bilingual classes. Beyond that, it was all English---different topics and subjects taught in the second language I learned."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How was your high school experience? I ask since it’s a time when people start becoming adults; they start pondering about future options and begin to develop serious relationships with people."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "High school was okay. It wasn’t the best--I wouldn’t consider it the best years. I didn’t think of high school...I just didn’t really emphasize the social aspect of it. I knew that eventually I wouldn’t care much about high school because of the same thing my parents always told me: “The goal is college”. They really put that thought into our head when we were little. Since sixth grade, I was enrolled in AVID---it helped me dig more into college and the application process. By middle school, I already had my mind set that I was going to do to college. In high school, I knew I needed to focus on my grades and extracurriculars: Through sophomore and junior year, I enrolled myself in honors and advanced classes while playing sports after school. By the time senior year came, I felt I was in a good spot: my grades were good and I was able to show I can be successful in rigorous classes with extracurricular activities. I knew I need to apply to as many scholarships as possible since my parents couldn’t afford to pay my tuition nor my sister’s."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "For the most part, growing up was straightforward. I lived close to the elementary and middle schools I attended. When I got here, I was enrolled in bilingual classes. Around the beginning of 4th grade was when I finally got my English proficiency but I still stayed in my bilingual classes. Beyond that, it was all English---different topics and subjects taught in the second language I learned."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "At that point, did you already know about your undocumented status?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yeah. I forgot exactly at what age I knew what it meant but it was not because of something I couldn’t do but it was because of the things going on. At that time in California you couldn’t have a driver’s license if you didn’t have a social security number. Little things like that made it noticeable that there was a difference between being undocumented and having legal status. By the time I was in middle school, I already knew of these things. Also when we started looking into financial aid--they asked for a social security number. I noticed especially in high school when students are at that age when they can start applying for driving permits or jobs during the summers. I knew I was never going to be able to get all that."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"At that time in California you couldn’t have a driver’s license if you didn’t have a social security number. Little things like that made it noticeable that there was a difference between being undocumented and having legal status."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"How did that make you feel?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I felt terrible. I think that’s one of the saddest parts I think. Towards the end of high school when I was applying for high school, there was a period of time where I felt all the hard work and effort that I put throughout school was a waste. Paying for school was going to be tough. Knowing I wasn’t going to get full financial aid was going to make  that tougher. The Dream Act and AB-540 students--that wasn’t a thing at the beginning of high school. It became a dark time."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"[Pauses]"}</span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was trying to work hard to be ready to go to college and create my college portfolio and get accepted into a school. But since I was undocumented, I wasn’t sure I was going to be able to complete my education as easily. I wasn’t thinking about giving up but I realized it was going to take more time and more effort to overcome the obstacles."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {"What colleges did you apply to and for what major?"}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Since I was a freshman in high school, my dream school was UC Santa Barbara. At the time, I wanted to major in computer engineering. I didn’t know what it was yet though. I was really inspired by one of my uncles because in middle school, I got my first laptop: a computer my uncle was going to throw away. We always had problems with it and we had another uncle that liked to take computers apart to fix them--he was always helping us getting our computer back up and running. I wanted to be able to fix my own computer without having to wait or bother anyone to help me. "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Around that time, I got a PSP (Portable PlayStation). I would Google how to customize it and change themes. I started flashing ROMs and installing new firmware; however, I would see the lines of code coming up on the screen and I thought it was really cool. Those two things made me interested in technology and set me on the path to a technical career."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I started looking at other schools: UC Davis, Cal State Monterey Bay, Cal Poly San Luis, San Diego State, Willamette University, George Mason, and Santa Clara. I ended up having an issue with some of my applications: my high school counselor was helping me with my applications and some of them weren’t sent to the schools. I didn’t make the deadline for Santa Clara. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Oh no."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My counselors scrambled to try and get the colleges to accept my overdue application. She was mostly successful--I started getting my acceptance letters. I saw the price for each semester--for each quarter--and even though the schools gave me some help, it was only going to pay for a year, maybe two. It just wasn’t something that I could pursue. At the end of my senior year, my counselor told me about CS-in-3, the computer science program at our local community college that lasted only three years. Since computer science was related to computer engineering, I became interested in applying to the program. I submitted my application close to the deadline to apply--they gave me an interview and some time later, I was notified of my acceptance to the program. The opportunity was definitely a no-brainer especially with the scholarship they granted us."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        " I pretty much gave up on all the other letters of acceptance I was waiting for. Even as more acceptances came, I didn’t care about them anymore--I knew what was the best option for me."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"How was your experience with the program?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I think it was good. It would’ve been more difficult if it had been a regular college experience where I would’ve been alone and without friends. The hardest time I had was at the beginning. Some of the classes, I didn’t really understand and I had some trouble. Grasping some concepts took a bit of time but the thing that helped me was that a lot of my peers from the cohort would stay at the school until the security guard came and kicked us out. As things started to settle in, I was able to schedule my time more efficiently. We also always had tutors available and I didn’t hesitate to get help if I needed it. We were also able to graduate in 3 years as proposed and for the most part, I felt prepared to start applying to jobs and begin a career in our field of study."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"I want to get to the point where we are successful and making an impact in agriculture. I want to see the company at a point where it can give farmers and crop growers valuable data and insight rather than just being another product out there."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Awesome! Now that you’ve graduated, what are you doing now?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m working at a startup as a software engineer. Our company is an ag-tech focused startup: we’re one of the companies that is trying to integrate technology into agriculture through the use of IoT, the Internet of Things. I wasn’t aware of IoT until I started working there--there’s a bunch of conferences where people go and expose the solutions they’re making. "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Our company is focusing on sensing technology: soil, moisture and temperature sensors. We’re also starting to move into irrigation systems. Right now I’m mainly working on our databases and cloud infrastructure: from the time the date leaves our sensors out in the fields to the time the data arrives to our databases. I enjoy the work--it’s a lot of hard work but I know I wouldn’t be as happy working on something else. I definitely feel like I picked something that was going to make me happy. I hope to continue making progress and to keep growing as a professional."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "That was sort of my next question: Assuming nothing crazy happens in the coming months, where do you see yourself in the next few years?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My personal plan is to stay working for my current company. I want to get to the point where we are successful and making an impact in agriculture. I want to see the company at a point where it can give farmers and crop growers valuable data and insight rather than just being another product out there. Once we are at a good point and I’ve felt I’ve accomplished a good deal, I want to go back to school and get my masters. I’m just starting to develop my career and I’m still very new to all the possible graduate degrees out there for computer science. At this point, I’m still trying to figure out what interests me as a concentration."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "We’ve heard about your story. Let’s talk about current events. On September 5th, the Trump administration decided to rescind DACA and punted it over to Congress to come up with a solution within the next 6 months. When you first heard the news, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Disappointment. Leading up to the announcement, things weren’t stable anymore with all the rumors going around. I was still very hopeful of things turning out in a better way. A couple of my friends sent me messages telling me about what was said in the news since most of the time I’m working--I don’t really have time to watch the news. I would always tell my friends that everything was going to be ok: “Stay positive. Things are going to work out.” "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t know what to do when I first heard the news. Everything that I have going on for me right now--my family--our American dream… My sister and I graduated from college and we’re both working in the industry we studied for; having everything we have now come to an end would pretty much…"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"[Pauses]"}</span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It would bring us all down. I try to keep a sense of hope--for things to turn out ok. They’re going to realize we’re not bad people. A lot of us are studying or have graduated and we’re doing good things: people have started companies, building new solutions and they’re part of big things that contribute to society and the country as a whole."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Last question: as Congress works toward a solution--if you had the chance to tell them something, what would you say?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Apart for what I feel that most of us are contributing to this country in a lot of ways, I think the main thing I would tell would be to really focus on the good that we bring to the country. For most of us, this is considered our home--since we came to the U.S., we have not returned back to where we were born. We don’t want to harm what we consider our home. We’re not bad people and we try to do as good as possible and contribute in whatever we can. As we get closer to accomplishing our dreams, we begin to contribute in other ways we weren’t able to before. All of this would not have been possible without the opportunity we’ve been granted. "
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"For most of us, this is considered our home--since we came to the U.S., we have not returned back to where we were born. We don’t want to harm what we consider our home. We’re not bad people and we try to do as good as possible and contribute in whatever we can."'
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

export default Octavio;

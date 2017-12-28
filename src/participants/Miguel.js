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

class Miguel extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Miguel",
      occupation: "Embedded Vision Engineer",
      timeSinceArrival: "11",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "September 22, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/miguel_hero.jpg)`,
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
                        "Why don’t we start off by diving into your early years."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Sometimes when I tell my story, I need to tell myself that you’re not playing the victim. I don’t want people to think I’m less capable or think I’m using it as a crutch."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in Zapotlan Del Rey, Jalisco. We crossed the border when I was 14. We all piled in a car--there was about 20 people in there. It was me, my little sisters, my little brothers, and everyone else that was trying to come over. It took a whole day to cross the desert; we were on and off the truck because it would get stuck in the mud. I remember the truck had too much dust. The driver needed to clean the mirrors and I remember I took off one of the two shirts I was wearing to wipe off the side mirrors."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in Zapotlan Del Rey, Jalisco. We crossed the border when I was 14. We all piled in a car--there was about 20 people in there. It was me, my little sisters, my little brothers, and everyone else that was trying to come over. It took a whole day to cross the desert; we were on and off the truck because it would get stuck in the mud. I remember the truck had too much dust. The driver needed to clean the mirrors and I remember I took off one of the two shirts I was wearing to wipe off the side mirrors."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The reason we came to the U.S was because my mom was tired of traveling back and forth between the U.S and Mexico. As she worked to sustain the family, she missed out on being there for us during childhood. My dad would always be up here in the U.S working. I didn’t know my dad that well for that reason. He came to the U.S when I was four and my mom would travel up and down to see him. She didn’t like the way we were being raised. One day she came back when I was 12 years old, and she saw I was already getting drunk and hanging out with the wrong crowds. I was about to get expelled from middle school. Throughout my childhood, I was a pretty good student. I even went to dinner with the governor of the state because I was supposedly ‘the smartest student’ at my school. I say that in quotes because now I’m aware of different types of intelligence--not just book smarts. I would also get sent to different academic competitions. They would send me and my friend Rafa. Rafa, he had a tough time growing up since his mom was in and out of his life, but he was a really smart kid too. We used to fight a lot but, at the end of the day, I respected him a lot because he stood by my side at those competitions."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "We arrived to L.A where my grandmother was waiting to pick us up. The first thing we did was buy Burger King--it was our very first meal in the U.S. Right away, first thing to do was to get chubby. After that, we came to Salinas where the family business resided, which was started by my parents. It was tough at first adapting to the Salinas culture. I was a loner at first. I was jumped sometimes because I didn’t know who to hang out with. I started hanging out with members of the Sureño gang since I had class with some of them. I could say I felt more welcome into their group since they spoke Spanish most of the time; but, then that got me into trouble with the gangs opposing the sureños. And because I wasn’t aware of the social hierarchies, I hated high school. I just didn’t know where I belonged. Between that and the language barriers, it was just tough."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I remember one day I was walking home, and all of sudden a car stopped next to us. Five guys got out and jumped us. It was three of us; one was riding a bike so he just took off. My friend and I just took the beating. As you’re getting punched, you’re debating whether to fight back because if you do, you might get shot or stabbed."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I remember one day I was walking home, and all of sudden a car stopped next to us. Five guys got out and jumped us. It was three of us; one was riding a bike so he just took off. My friend and I just took the beating.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Wow."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Finally, in my 11th year, I found a group of people--they were seniors. They forced me to practice my English and helped guide me for future steps. They told me the purpose of a university, including how to apply and register."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Back then, for me, it didn’t matter if I learned English. It didn’t matter if I did well in anything because I wasn’t able to do much because of my status. It clicked in my head when talking to the seniors and they told me of their plans to go to university--I didn’t have those plans. My family was like, ‘Well, you’re not going to go. You’re better off working at the restaurant.’ My mom did want us to study. My dad, however, wasn’t big on school. He helped me with my side hustle of DJing for parties, often reminding me that together we could grow the family business. I wasn’t very happy because I had other aspirations. I was interested in other things."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What were you interested in?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was interested in space. When I was a little kid, and when we were riding our mules to milk the cows, I would just look at the moon and think, ‘I wonder what’s out there.’ At first, I just wanted to see the universe. So, I became very big on astronomy. One day, one of my friends from Mexico showed me a computer and told me how he was learning to fix them. My mom brought home a busted computer, a white Compaq, and that same friend was like, ‘Okay, let’s go check out your computer and see if we can fix it.’ He opened it up and he started telling me about each part: ‘Right here is the RAM and this right here is the motherboard.’ So, instead of wondering about space, I started to wonder about computers. I was very curious of all the things that were possibly going on inside this magic box. "
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I was interested in space. When I was a little kid, and when we were riding our mules to milk the cows, I would just look at the moon and think, ‘I wonder what’s out there.’\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You became interested in space and computers. As high school graduation approached, what steps did you take to try and pursue those dreams?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In my senior year, my friend Octavio and I use to compete a lot. He was a straight 4.0 student. He came from Mexico too and he just blew through each class. I used to look up to him--I still do because he is a good, hard worker. We applied to this program called S.U.M.S: Summer Undergrad Math Science bridge or something like that. It was a summer course in which each week you took a different course: science, ecology, biology, etc. They also helped you enroll in community college. I applied since I didn’t have anything to lose. I got in, yet interestingly, Octavio didn’t. At the time, I had a 2.0 GPA, and to this day, I’m not exactly sure why I was accepted. The only difference was that I was taking higher math than him. Maybe that’s why they took me in."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In that program, that’s where I met Mr. Welch: an instructor that became a really strong mentor for me. I met awesome people that ended up being good friends. They spoke no Spanish and that strongly helped me sharpen my English. I think I got student of the week in my ecology class because I was really good at cutting trees. The one moment that had the most impact on me was when Mr. Welch introduced computer science. In 2009-2010, I enrolled in math and some intro to computer science classes. In 2010, that’s when I had my computer class that used the Python programming language and I was just hooked. My declared major at the time was astrophysics--I needed to take programming classes for the data crunching part of the major."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Transferring was still out of the picture. Although I liked programming, I still didn’t have many options since I couldn't work. At Hartnell, they used to give you a special number if you didn’t have a social security. Just the fact that it was a thing, it made me feel that I was different. I see everybody applying for financial aid and focusing on which schools to apply; those were things that I couldn’t do."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I heard about DACA and that’s when I started taking IT and networking courses. Not to transfer, but to shoot for a decent paying job in a short career. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "While you were going to Hartnell, were you still working at the restaurant?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yeah. I would work every weekend. In my first years at Hartnell, my parents would take me to school and my friend would bring me back. In the afternoons, and on the weekdays, I would work at the restaurant. At the same time, I started picking up DJing and playing music at parties during the weekend. I worked as a bartender too for a while. Once I learned more about computers, I set up a little office at the restaurant and I would help people fix their computers. I just didn’t want them to go to best buy and get charged a lot of money for what seemed to be a simple fix."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Then DACA happened. It revived my hope for going to school. But my GPA was already low and I was behind on both math and English. To this day, the only reason I can’t transfer to a university is because of my English requirements and my GPA."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Did you get your associates?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "No, I didn’t get any associate’s degrees. I also failed the CCNA (Cisco Certified Network Associate) exam by two points. I have the knowledge, but I don’t have the paper that verifies it."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"Although I liked programming, I still didn’t have many options since I couldn't work. At Hartnell, they used to give you a special number if you didn’t have a social security. Just the fact that it was a thing, it made me feel that I was different.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You don’t have your college degree; however, you’re working in devops and computer vision. How did you get there?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "One of my friends saw this job posting in a Slack channel: ‘I’m looking for someone to do DevOps: No experience required.’ And I thought, ‘Ok, that’s fishy.’ That same friend told me to just apply anyways and I got an interview.  At the time, I was working night shifts at Smart & Final and I worked as a dishwasher as well. I kinda decided to stop doing school for a bit since I needed money to pay bills. During the interview, he saw on my resume I had an internship developing some tools for the Fedora Kernel developers during my internship at Outreachy. I worked on the Fedora kernel doing bash scripts and creating software solutions for the operating system developers to help their workflow. He saw that and he’s like, ‘Ok, let’s put you to the test.’ He asked me some questions about Java and C++, but I couldn’t respond beyond the general differences. I was not prepared for that interview because that was right after my night shift ended. I was not all there."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"My employer decided to give me a chance by giving the task of migrating a website to another server as a challenge since the interview process didn’t go that well. After I completed the task successfully, he decided to give me other projects for his other clients. One of them involved setting up a set of Raspberry Pis with computer vision library his client was demoing at CES 2017. After he saw that I was able to work with Raspberry Pi, he asked me if I could configure other embedded devices and if I could add any last minute features to the demos being presented. It was an intense week, and I did not get any sleep, but the company my employer was working for were impressed with my work. That’s when we started the conversation of getting me a job at my current employer working as an embedded vision engineer. "}</span>
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
                        "Everyday, it’s kind of like, can you do this or that? Some of the things I don’t know how to do, but I’m not afraid to take a stab at it and figure it out. Sometimes previous experience helps with tasks: the IT stuff I learned; the networking knowledge, or the virtualization experience. It’s all self-learning things. They gave me a part time job through a contracting company with AuLabs.com for devops and a part time contract with Eyeris for the embedded vision systems work. I’m learning about computer vision algorithms, machine and deep learning. Working both jobs has been a dense experience. Lots and lots of knowledge is being soaked."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Sweet. I’m really happy for you. You’re managing to work two jobs in very difficult areas of computer science without a college degree!"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Before I use to bash--maybe you’ve heard about--but I used to bash a lot on degrees. I think I was just a little bit resentful of not being able to get mine, however, I wanted to prove a point that you could do it without a college degree. But, I have to go back. I know the mistakes I made, and I tell my sisters and brothers all the time to not repeat the mistakes I did. I could’ve had a chance to join CS-in-3, the three-year computer science program, yet I chose not to although everything could’ve been paid for. So far, I consider myself lucky to have met such awesome people that have given me opportunities to show the things I can do. Now, I’m adamant for not dropping out of school, keeping your grades up, and definitely working with someone that can introduce you to other topics"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Let’s wrap up by moving to recent events. On Sept 5th, the Trump administration announced it’s decision to rescind DACA. What was your initial reaction?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was angry and I was sad. You look back at all the things you’ve done--I busted my ass learning all these things and working different jobs to sustain myself, and just like that, it can end. And it’s all because of people that have no knowledge of you, your face or your story. We feel like we’re alone but we’re not. I mean, just look at us being able to relate to each other because we’re in the exact same situation. And when I heard you [the interviewer] were doing this project, I thought, “Yes! I definitely would like to share my story.” I’m really happy that you’ve started this and you’re connecting with others like us."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"You look back at all the things you’ve done--I busted my ass learning all these things and working different jobs to sustain myself, and just like that, it can end. And it’s all because of people that have no knowledge of you, your face or your story.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Two more questions. You mentioned you had a hard time with English and fitting in; not knowing the social hierarchy in school and with the gangs in this city. Has that changed? Do you identify yourself as American? Is this your home?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I do identify myself as American. I try to be a stubborn Mexican as well: “If you send me back to Mexico, I’ll still figure it out! Can’t get rid of this Mexican!” I do feel like I’ve embraced the culture here. I love the diversity the U.S has; it contributes to more knowledge and more creativity. To me, being able to experience a conversation with someone from another culture is just beautiful and I don’t want to lose that. I’ve also embraced the American way: speaking the language and working hard to pursue good opportunities. I’ve worked on my accent so people don’t think I’m not American. I try to get into talks about T.V shows or have a conversation about football. And I realized that I was lacking this cultural awareness in one of the jobs that I had. Working in IT, the people that I talked to over the phone--they would tell me some jokes that I didn’t get. Now, I feel like I’m American enough to talk to other Americans. If I go back to Mexico, it wouldn’t be the same."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "As Congress decides a long term solution for people like us, what would you like to say to them if you had the chance?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I would tell them to think of this beyond what their ideals are. I would tell them that reality is far more than what you currently see. I think there’s enough data to show that we contribute to this country, and we wanna contribute back to the country. Even then, realize we might come from another country, but we can still have similar values. We still care about our families. We still care about bettering ourselves. We still care about having a nice house and being able to celebrate holidays together without actually having to worry if I’m going to be deported the next day--to worry if I’m going to be sent to a place where I don’t belong anymore. That’s what I would try to tell them. The cold, hard facts are there. Realize we are human beings and we have similar beliefs and values. Let’s sit down and have a conversation so you can realize we’re not that different from you."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"Realize we are human beings and we have similar beliefs and values. Let’s sit down and have a conversation so you can realize we’re not that different from you.\""
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

export default Miguel;

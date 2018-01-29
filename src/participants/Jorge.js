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

class Jorge extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Jorge",
      occupation: "Crop Management Major",
      timeSinceArrival: "18",
      country: "Mexico",
      image: "xochitl_hero.jpg",
      interviewDate: "October 26, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/jorge_hero_test.jpg)`,
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
                    <img src={Twitter} />
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
                      {"Tell me about your early years and where you’re from."}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in Mexico City, Colonia Los Reyes La Paz. I lived there until I was 5-6 years old with my parents until they got divorced, and I moved to San Martin Puebla (a neighbor city of Mexico City). There, I lived with my grandma until I was 11 years old. My mom came to the States when I was seven and began working in the fields in Salinas, California to provide a better financial situation for my family. Four years after, my aunt went to visit Mexico and my mom took that as an perfect opportunity for me to start a new life here. The main reason why my family wanted me to live in the U.S. was because of the opportunities that are available to students. At that time, I didn't want to start a new life in another place all I wanted to do was play outside with my  friends, and I didn’t want to make that drastic change. However, my family insisted that it was the best for me. I didn't want to move; I loved where I was at; I loved my family; I enjoyed taking care of my three cousins--I really wanted stay in Mexico. After pushing the idea of moving, I felt I didn't have a choice. In February 2006, my aunt picked me up."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Why did you mom initially move to Salinas?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "We had family here already. Like any other immigrant, she wanted to pursue the American dream for her and myself. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"How was it when you came here?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The first day we crossed the border, they took us to a very, very beautiful hotel in Los Angeles--very fancy with a nice pool and with a lot of people walking around. It was very different to the ones I’ve stayed in Mexico. We went into our room and waited until our intermediate family came for us. We were there for a couple hours until my other aunt finally came then we went straight to Salinas. Once we got here, I met my mom and a younger sister who was born here. From there, I waited a week and a half to get into school."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"All I knew of the English language was some colors: yellow, black--it wasn’t enough to communicate"'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Did you know any English when you arrived?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "No. All I knew was some colors in English: yellow, black--it wasn’t enough to communicate. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "What else can you tell me about your childhood when you came here? Did you have a hard time fitting in?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was still a kid--11 years old. The elementary school I attended was about 95% Latinos so it wasn't hard to communicate at school or with the kids. Kids are crazy though. I remember one day in the first few weeks I asked where the restroom was and the kids pointed me towards the girls’ restroom. I walked to the restroom and saw it was for girls--I thought 'Man, these fuckers.' That's when I knew I wouldn't trust them. Since that event, and until high school, I kept to myself. It's hard to trust new people and a new community. At the time of arrival, I was new to the country, and being 11 years old knowing no English--it was really tough."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How about your legal status? Did you know about your undocumented status growing up?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes, but I didn't know how much it would affect me until I was in my junior year in high school; that’s when students were doing worksheets on how to apply to a higher education as well as financial aid. One day, during those workshops, they told us to go to FAFSA and fill out the application. I thought 'Oh man, this is free money for school, okay!'. But my counselor said 'Not you Jorge, you cannot apply to FAFSA. You cannot apply.' That's when it really hit me: the consequences and the effects of being an undocumented student."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"My coworkers always encouraged me go back to school; they would tell me, 'This is hard work, you don’t want to do this for the rest of your life, do something better.'\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What did you want to study?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "At that point, I wanted to be a teacher. I wanted to teach Spanish--not necessarily the grammar but the culture. I’m Mexican and I’m very proud of being from Mexico. I wanted to teach about Mexican history back then, but the whole FAFSA issue threw my chances of higher education to the garbage--or at least that is what I thought. When I graduated from high school, I went straight to working in the fields. I worked in a local agricultural company by fixing agricultural pumps all over the Monterey County. I worked there for a couple weeks--it wasn't tough but it was physical work. My coworkers always encouraged me go back to school; they would tell me, 'This is hard work, you don’t want to do this for the rest of your life, do something better.' I told my boss and his wife that I wanted to go back to school, and, from that day on, they gave me less days and less hours until I had to leave because I wasn't making enough money. After that summer job, I started working in the fields as a irrigator. I worked there for a little more than a year: July to August. During the time, I was seeking help from friends to start school at my local community college. One day, I wrote a post on Facebook and I asked for links to help me get back into school. Until one friend who saw my posts called me and said she was going to help me fill out my application--all the paperwork I needed to do."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Did you pursue Spanish as your major as you originally planned?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes. At first I declared Spanish as my major but my experiences in the agriculture sector opened my eyes, and I noticed the potential I had to provide to the agriculture industry. I changed my major and focused on crop production management."
                      }
                    </span>
                  </p>
                </div>
                  <div className="dacamentor-interview">
                    <p>
                      <b>
                        {
                          "Why did you decide on going to Fresno State? How did you end up here?"
                        }
                      </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "I transferred from Hartnell College. I knew I couldn't do much with my A.S. that I obtained so that motivated me to go further. In Hartnell, you will hear in our department that the best schools to transfer were either Cal Poly or Fresno State. I applied to both and I got accepted to both as well. That is when I started to do more research, asking students from those universities their perspective in order to evaluate which school would be a better fit for me. I reached out to one of my friends in Fresno and he gave me a tour of the school, including the agriculture department. Only then did I discover that Fresno State owns a 1000 acre farm dedicated for students and staff for research. As I spoke with students, and faculty members, I received the support that shaped my decision to finish my education here."
                        }
                      </span>
                    </p>
                  </div>
                  <div className="dacamentor-interview">
                    <p>
                      <b>{"How has your experience been so far?"}</b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "It’s been really, really wonderful here in Fresno. I live very close to campus so I have greater time management. I hardly use my vehicle so I save money too. I’m able to pay my bills. When it comes to school, the professors want you to succeed--they challenge students to make sure that they receive more than a certification, but the skill needed to be in this industry. They want you to do the critical thinking, the analysis, and the math--they want you do these things right. Aside from taking my classes, I am a active member of three clubs: the Dreamers Beyond Borders, Trabajadores De la Raza, and the Plant Science club. Dreamers beyond is a support group for AB-540 students and Dreamers where we spread awareness of our situation. Trabajadores De la Raza is a club to help the community. Plant Science club is agricultural based to create support and networking with the students. Next semester, with the help of some students, I will start a farm operation to grow crops and donate it to the local food bank as part of a school project."
                        }
                      </span>
                    </p>
                    <blockquote>
                      <p className="dacamentor-quote">
                        <span>
                          {
                            "\"Next semester, with the help of some students, I will start a farm operation to grow crops and donate it to the local food bank as part of a school project.\""
                          }
                        </span>
                      </p>
                    </blockquote>
                  </div>
                  <div className="dacamentor-interview">
                    <p>
                      <b>
                        {
                          "Seems like you’re having a really good time. So far we’ve talked about the very beginning up to now, and you’re doing really great things for yourself and for others, too. Let's talk a little more about the future. It’s a crazy time right now with a lot of uncertainty with DACA and for undocumented students like us. Where do you see yourself in the next few years if nothing crazy happens?"
                        }
                      </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "I’ve envision two pathways for myself. My first pathway is to work back in my hometown, Salinas, CA, with a local farmer. I plan on going back and working with him by being a manager so he can work on other activities to support the community. The reason why I want to work with him is because he has shown his values to support our local community and he has develop a voice and leadership that communities like ours need."
                        }
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "If pathway number 1 doesn’t work, I plan on opening my own company and be a consultant and provide irrigation training and irrigation management to farmers. Here in California, we have been in a drought for a couple years, which is making people to conserve our water resources. I've had an internship opportunity where I gained a lot of practical knowledge and networked with Monterey County farmers where I assisted them by providing information about conservation."
                        }
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "Or I might just end up in Mexico, I don't know. The best thing we can do is work for the better and work for a better future instead of crying. I believe that we should face our issues move forward because everyone has the potential to do great things. "
                        }
                      </span>
                    </p>
                  </div>
                  <div className="dacamentor-interview">
                    <p>
                      <b>
                        {
                          "Continuing to talk about future plans, if you had the opportunity would you become a U.S citizen down the road?"
                        }
                      </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "Yeah, I would definitely take the opportunity and become a U.S citizen. The community here has given me the support to move forward and get an education. I am working to help my community as well. I don't know if I can do that in Mexico--it’s different over there. I really want to stay here, but I don't know what will happen. I am prepared for anything yet my desire, my goal, is to become a U.S citizen."
                        }
                      </span>
                    </p>
                  </div>
                  <div className="dacamentor-interview">
                    <p>
                      <b>
                        {
                          "Let's jump to your opinion of current events. As you know on September 5th, the Trump administration decided to remove DACA and punt it over to Congress to come up with a alternative legislative solution within the next six months. When you first heard the news,  what was you initial reaction?"
                        }
                      </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "As a dreamer, it really depressed me. I was really emotional during the first two days. I was doing so good at school: I was networking with others, and doing projects; but, when I heard that, it really killed my momentum.  Afterwards, I asked myself, “Are you really going to do this to yourself? You've already lost two days complaining about this. Go and do something about it.” As a human, I did feel bad, but it was time for me to move forward. You have to keep moving forward."
                        }
                      </span>
                    </p>
                  </div>
                  <div className="dacamentor-interview">
                    <p>
                      <b>
                        {
                          "Last question: As Congress continues to work forward with a legislation for people like us in the next six months--if you had the opportunity to tell them something, what would you say?"
                        }
                      </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "First of all, I would really like to thank them for taking the time doing this and acknowledging our situation. I know being a part of a political party and being involved in politics is difficult; I know the decision you make is made by the whole team. I am afraid of what the final agreement will look like. I just really want to thank them and hope they work on this, and just not creating some DACA 2.0--we hope for something that in the long term won’t be removed."
                        }
                      </span>
                    </p>
                    <blockquote>
                      <p className="dacamentor-quote">
                        <span>
                          {
                              '"I just really want to thank them and hope they work on this and not create some DACA 2.0--we hope for something that in the long term won’t be removed."'
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

export default Jorge;

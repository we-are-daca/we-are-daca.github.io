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

class Estefania extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Estefania",
      occupation: "Kinesiology Major",
      timeSinceArrival: "14",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "October 18, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/steph_hero_1.jpg)`,
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
                <NavLink to="/help" activeClassName="">
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
                        "Tell me about your early years and where you’re from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m from Mexico City and I came to the United States when I was 9. My parents had been divorced since I was three years old and both of them remarried with different people. When we made the decision to move here, it was only my mom, my youngest brother and I that came here first--my mother has family here so she traveled over to the States for vacations. My sister, step-brothers, and stepfather stayed in Mexico for about a month. Although my parents had been divorced since I was a child, the separation from my dad was one of the hardest things I had to go through."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "We landed in my Tia’s [Aunt’s] and my Abuelita’s [Grandma’s] house in L.A. We were in L.A. for about a month because my aunt couldn’t have more people in the house anymore and we moved to Salinas with another aunt."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "[Pauses]."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Um, it was hard. We came with visas and during our move, I was so excited since it was my first time on an airplane but it hit me--it hit me hard when I was saying goodbye to my dad. I’m still unable to remove that picture of saying 'goodbye' to him out of my head. It felt like a movie--sort of when they put the slow motion effect while two people are letting go of each other. It was one of the hardest things I had to do. Through my visa, I went back to visit twice--once my visa expired when I was 15, he actually surprised me with a visit and I couldn’t be more happier to see my dad again after 5 years. Despite the visits, it wasn’t the same. I wanted him to see the things I had been doing. I wanted him to see the school I was going to--I wanted him to see the simple things we all take for granted sometimes."
                      }
                    </span>
                  </p>
                 
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I’m still unable to remove that picture of saying “goodbye” to [my dad] out of my head. It felt like a movie--sort of when they put the slow motion effect while two people are letting go of each other. It was one of the hardest things I had to do.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My mom and her husband started working in a cooler. My sister would take care of us and we would hardly see my mom. I started school here during the 5th grade. The first day of school I was terrified--I was crying and saying I didn’t want to go to school. In my mind, I didn’t know what to do, what to say, who to talk to… I remember they put me in regular classes during the beginning of my school years."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "[Pauses]."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was hard. I didn’t know how to communicate at all--just a hi and a goodbye. I guess the teacher noticed I wasn’t getting along with the other students--this was the only way they knew I was having a hard time learning because back then they didn’t have the English learners programs that schools have now. They moved me to another class and it got better since there were people that spoke Spanish. During my freshman year of high school, my older sister decided to move back to Mexico because she saw how difficult it would be to continue with her higher education as an undocumented student. Her departure left us with only my mom, my brother, and myself. We came here as a family and, as things happened, we started to separate by going our own ways--thinking about that hurts a lot. Maybe if my sister had stayed, she would’ve been able to receive DACA like me; but like everything we look back upon, we didn’t know it was going to happen. It hurts to have those “what if” thoughts constantly running through my head. "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "[Pauses]."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "I became mad at my mom for separating me from my dad and from the family I had over there. I became mad at her for bringing us over here without asking--I knew I was only 9 years old but, still, it didn’t make sense in my head because I didn’t choose this to happen to me. My experiences made me ashamed to acknowledge and share my status with others--I refrained from telling others I was a DACA student or that I didn’t have papers or that my visa has expired. It was hard to swallow the fact that it was a document separating me from other citizens and people that can take things for granted--things such as a driver’s license or financial aid. "
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\" It was hard to swallow the fact that it was a document separating me from other citizens and people that can take things for granted--things such as a driver’s license or financial aid.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                 </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Prior to these realizations, and as your senior year approached, did you have an idea of what you wanted to do?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Initially, I didn’t. I liked school and I liked being involved in school--in high school, I was president of the Spanish club. I knew I wanted to continue with school since my sister was pursuing her higher education in Mexico. Later on, I started to become drawn by design and I took some classes I needed such as graphic design. One of my friends went to FIDM, the Fashion Institute of Design and Merchandising, straight out of high school. I remember going to the open house for design majors with that friend. However, as she was meeting with counselors and signing admission papers, I sat there realizing it was going to be much more difficult for me to go to a school like FIDM. I decided to go to the local community college but they didn’t have a design major--the closest they had was drafting, which is completely different to what I wanted to do. I decided to study drafting, transfer, and then do what I actually want to do. I continued with this path for two years before looking into schools I wanted to attend--schools that were $65,000 a year plus housing plus other expenses."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "I told myself, “Okay Estefania, you gotta get on your feet and realize you can’t pursue this path.” My mom told me the same thing, “I know you love to draw and I know you’re good at it; but, you gotta realize you’re not going to be able to study this.” That’s when I changed my major. I’ve always had this thing for kids and I’m passionate for kids--I started to think how I could tie this into a career. So, I changed my major to kinesiology focusing specifically on kids with disabilities or any issues that require physical therapy. I hope to transfer to Bakersfield--I was actually working on the application and paperwork today. I’m also contemplating San Diego, but it’s way too expensive. Either one of those two I would consider, even perhaps Cal State Monterey Bay to stay close to home."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"That sort of brings me to my next question. Assuming nothing crazy happens, where do you see yourself in the next few years?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I see myself graduating from one of those schools I mentioned. I see myself opening my own physical therapy wellness center. Like I said I want to focus on kids and I want to see if there’s a way my facility can get sponsored to bring physical therapy to kids in underrepresented communities like the Salinas area. Treatment can be really expensive and there’s a lot of people that don’t have the privilege of having such help available for their children. My hope is for the facility to be free for kids to receive therapy."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I see myself graduating from one of those schools I mentioned. I see myself opening my own physical therapy wellness center. Like I said I want to focus on kids and I want to see if there’s a way my facility can get sponsored to bring physical therapy to kids in underrepresented communities like the Salinas area.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Continuing to talk about the future, would you like to become a U.S citizen in the future?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes. In a way, it’s something I see as a goal."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "[Pauses]."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I know I deserve to be one. In my opinion, it’s not the way you do things, but the way we think. We can all think American, and we all want dreams. Just because I’m Mexican it doesn’t mean I can’t think like an American citizen or that I can’t do the same things an American citizen can do. I see it more as a challenge because of all the things that are going on, but it’s something that definitely pushes me to prove to people that I do have what it takes to be a citizen of this country. Nothing has been given to me--everything I have I worked for it. Every good grade, my car, and even the license that I have--I’ve worked for and payed for it myself."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "As you know, on September 5th, the Trump administration announced the removal of DACA and punted it over to Congress to come up with a solution. When your first heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was working when it happened. I remember my dad was the one that told me. He said, “Did you hear what happened? You can actually come now, they’re going to deport you. I’m happy and you’re welcome here.” I reacted in disbelief and I told him I didn’t want to go back. In a way, I hurt him because of my decision to stay in the States. I called my best friend who is also a DACA recipient and we were crying on the phone for about an hour until I told her we had to stop crying and figure out a way to do something about this."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was shocking to know someone can come so easily into my life and remove my dreams--everything that I’ve been working so hard for, gone. Everything gone just because we don’t share the same background or the same views. They have never experienced the struggles we’ve experienced and all the hiding we’ve had to do. I felt like it was the end of one of my dreams when the announcement happened."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My dad would always ask me to come back to him. He’s well established over there--he has his own business and he’s well off. He would tell me how my sister had already graduated from college over there and compared it to how many years it was taking me to get to a university and finish here. He kept persuading me to come back since he had the help and the money to get me through school in Mexico. For a bit, the announcement proved my dad right and made me feel as if all the time I had spent fighting was wasted. I heavily considered my dad’s offer and even told my best friend that it was probably a good decision for me to make and give up everything that I wanted to do with my life here. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "What changed your mind of not moving back?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’ve always been afraid of going to Mexico despite the fact that my sister, my dad and other family is over there. I’m more of perseverant person--even if it takes me years to do something, I know I can do it. If I feel I’m capable of something, I’m not the type of person that gives up easily. I want to prove my dad wrong--I haven’t graduated from college yet, but I have a good job and a good car. I worked for those things and I’m going to finish what I started here. I don’t remember anything from Mexico; I remember vague memories like the posadas [celebrations] or really special moments, but, other than that, I don’t see Mexico as my home. I see it as where I was born, but I see California as my home."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Last question. As Congress continues to work on a long term solution for DACA--if you had the opportunity to say something, what would you tell them?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "To give us another chance. Although DACA was able to help us a great deal, a lot of people didn’t apply for it and a lot of people are still in the shadows. Give us an opportunity to prove to you to show you what we’re capable of. Like those that are still in the shadows, not having a work permit won’t stop us; not having a driver’s license won’t stop us--we’re still driving and working. If it takes me three jobs to continue with school, I’ll keep doing it just like I already am. I’ll do whatever it takes to prove to you I’m able to be part of the American dream. Don’t let the bad sides of our culture be the face you have of us. We’re on the right track to fulfill our dreams despite not having the same opportunities as our peers--we’re still making positive changes to our communities, our schools, and our workplaces. Please give us an opportunity again. Lastly, we are what keeps the American dream alive, we don’t depend on America, it depends on us. All the DREAMers and immigrants who risk their lives crossing the border to provide for their families. I have a quote that I thought represented all DREAMers “Caged bird, even where there’s freedom.” Even though we are in a country that is well known for its freedom in every sense of the word, we are being caged by the injustices and the thin line that separates us from being a permanent resident or citizen due to a document. "
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I have a quote that I thought represented all DREAMers “Caged bird, even where there’s freedom.” Even though we are in a country that is well known for its freedom in every sense of the word, we are being caged by the injustices and the thin line that separates us from being a permanent resident or citizen due to a document.\""
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

export default Estefania;

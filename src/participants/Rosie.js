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

class Rosie extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Rosie",
      occupation: "Pest Control Advisor",
      timeSinceArrival: "26",
      country: "Mexico",
      image: 'rosie_hero_1.jpg',
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/rosie_hero_1.jpg)`,
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
              <SocialMedia />
              <div className="">
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        'Tell me about your early years and where you come from?'
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Well, I was born in Mexico City. My parents are from Michoacán. So, I lived in Mexico City for about five years, and then we moved to Michoacán where I lived for about three years. I have two sisters and one brother. I’m the oldest in the family--followed by a sister, a brother, and the youngest sister who, in fact, is the only one that was born here. When I was eight, my parents decided to immigrate to the United States. It was a heart breaking decision for all of us because they were leaving me and my sister behind--each of us with a different grandma in a different city. After a year, my mother returned to Mexico ready to bring us with her."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Crossing the border is one of the saddest events that I remember as a child. We tried many times to cross the border, failing to do so again and again.  I remember a time where we couldn’t get in touch with my dad who was here in the U.S. We didn’t have any money. We had to sleep on the streets near the border. We were really cold and hungry because we didn’t have any blankets or food. The thing I remember the most is when my sister went up to this lady—we were starving—so she went up to this lady who was selling Maruchan soups and asked her for two soups, one for me and one for her. She gave us each something to eat and that was the first time that I had one of those soups. A man who was selling serapes [blankets] saw how we were shivering, and he came over to give my mom one so we can make ourselves warm. We still have those blankets today."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "We were at the border for about three weeks trying to cross. When we finally entered the U.S, I started school, which was third grade. I was set in a class where the students did not speak a lot of Spanish. It was an English class, which lead me to be frustrated. The class was frustrating because I didn’t understand anything, and I was falling behind. I talked to my parents, they talked to the principal, and he was able to move me to a bilingual class, which was easier. All of these events happened here in Salinas."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I remember a time where we couldn’t get in touch with my dad who was here in the U.S. We didn’t have any money. We had to sleep on the streets near the border. We were really cold and hungry because we didn’t have any blankets or food.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Why did you all come to Salinas?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I don’t know to be honest. I think my dad was here during the 1980’s, specifically the year where Congress passed legislation granting immigration amnesty. He was staying here with his brother and I believe that’s how we ended up here in Salinas."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"As you mentioned, you didn’t know any English coming over here. So, those classes that helped you out your first year, were those ESL classes?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes, those were ESL classes. The only thing I recall being really good at, even though I didn’t speak English, was Math which had always been my favorite subject"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Did you parents happen to emphasize school growing up?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Not really…They were focused on working in the fields and making sure that we had a place to live and food in our table."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        'How about yourself?'
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was extremely focused in school. I have always loved school."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Did you have an idea on what you wanted to do as a kid?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "No. No, I didn’t. It was really good through the years until I was in high school. When I was in high school, I got to travel to different places here in the U.S. There was an occasion when six students were selected from all over California to visit Mexico. This trip was to visit the president during February, when Constitution Day takes place. I was one of those students selected. I was really excited. I went home to talk to my parents about it and that’s when I found out that I couldn’t go. I asked why and they answered ‘because you don’t have papers to come back.’ Although I was still engaged with school activities, I admitted to myself that there was no point to keep on going in my education."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "I still remember the girl who was chosen after I told them I couldn’t go. She came back talking about her experience from her trip to Mexico. I felt horrible just thinking about the fact that the experience was taken away from me just because I didn’t have papers. I was sad about the situation."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"This trip was to visit the president during February, when Constitution Day takes place. I was one of those students selected. I was really excited. I went home to talk to my parents about it and that’s when I found out that I couldn’t go. I asked why and they answered ‘because you don’t have papers to come back.’\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What other experiences do you have growing up before we focus in on high school?"}</b>
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
                        "Um…I can tell you how I lived. We first lived with two more families in a one-bedroom apartment, which was uncomfortable. There was only one bed in the room, so we—my parents, sister, brother and myself—had to sleep across to just fit. My mom’s sister slept on the floor. The living room was quite big so it was divided into two parts: one section for my aunt, her husband and her kid, and the other one for another aunt, her husband and their kid. We had to share rooms with other people until I was like fifteen years old. At that point, we moved to another house where there was only my aunt and her two girls. She wasn’t married. It was a three-bedroom house and we finally got our own room, which was better. We lived in the east side of Salinas for about 26 years until 2017 when we all moved to different places."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Going back to high school, that is where you realized that you were undocumented and that you had these obstacles in your way. When did you first hear about DACA?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I wasn’t sure if that was when I was in 11th or 12th grade when DACA first surfaced. I belonged to  a group here in Salinas called Youth in Action. I was the president of that group and we were advocating to pass AB-540, which allowed undocumented students who had graduated from high school attend college at a low cost."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"When you heard about these programs, did you regain some of that motivation back after previously feeling that there was no point to pursue much due to your legal status?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In some way, yes. I graduated high school with honors and had a scholarship ready for me, which I couldn’t get because I didn’t have a social. Once I graduated, however, I worked for almost a year. A year later after graduating, I got married. I had my daughter two years later, and when she was about six months that’s when I decided to go back to school. By then, I was really motivated, especially because I wanted to be someone who my daughter could look up to."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What did you study? Did you know what you wanted to do?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I started with my general education. I really didn’t know what I wanted. At the same time, I started working at a seed company in the plant propagation area where my passion for agriculture began. I graduated from Hartnell with an Associates degree in agriculture production, finishing all of my transfer credits as well. In 2015, I was ready to transfer either to Cal Poly or Fresno State, but then my husband was in an accident and he couldn’t work; therefore, I became the head of the household."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "I hope to go back to school in the future. I have my associates and my PCA license—a pest control advisor license or an officer trained in agriculture. Definitely, I have the most important quality: the experience."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Nice. So, since you graduated Hartnell, and couldn’t attend Cal Poly because of your husband’s accident, what happened afterwards?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I kept on working. My boss always supported me in regards of my education and I will always be thankful for that. The only bad thing was that I was working through a contractor and I wasn’t getting paid well."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "When they announced DACA, I was super happy because I knew I was going to be able to work through the company. I talked to my boss and he did as much as he could to get me to work through the company, but he wasn’t able to finalize the process. Around the same time, I went on a field trip with Hartnell College to a nursery--the largest orchid grower company in the country. After this visit the company’s president reached out to me and offered me a position in her company."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "She offered me a position and told me I could test it out to see if it was a good fit by working half of the week at the nursery and half of the week where I was working at the time. I told my current boss about it and he accepted since he didn’t want me to leave. However, when I began to think it wasn’t a good idea to split myself between two jobs, I told my boss I was going to leave and work full time at the nursery. The next day, he told me he was going to be able to put me through the company after all."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Oh no. Not worth it."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Exactly, definitely not worth it. And not because it wasn’t a great company, but because I wanted a different experience. I have now been working at the nursery for almost three years, and my ex-boss tells me occasionally to go back. I really like working at where I am right now; what I like the most is the changes we’re making to improve our methods."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Nice! That takes me to the next question: Assuming nothing crazy happens, where do you see yourself in the next few years?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "For now, I would like to stay a few more years at the nursery. One thing that I would definitely like to do is go back to school and continue my studies in agriculture--hopefully attend Cal Poly for that."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Continuing to talk about the future: Would you like to become a U.S citizen in the future?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Of course! I would love to! [laughs]"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Let me your opinion on recent events. On Sept. 5th, the Trump administration announced the removal of DACA and forced Congress to come up with a legislative solution for the next 6 months. When you first heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "You know, my reaction initially was ‘whatever.’ But then when I got home and I realized it, I started crying. When they announced it, I just couldn’t believe it. When I got home and my husband talked to me about it--that’s when I started realizing it. I don’t mind whatever happens to me; what I care for the most are my kids. I don’t want them to go live in Mexico, it’s really dangerous--especially Michoacan. The little town I use to live in is dangerous now--there’s a lot of kidnappings happening there as well."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I hope our politicians could open their hearts and think about their own kids. We are not here to steal opportunities from anyone. We were brought to this country as children and a lot of us are in the position we are now not because it was given to us, but because we have fought for our dreams."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Last question I have for you: As Congress continues to work on a legislative solution in the next six months, if you had the opportunity to tell them something, what would you tell them?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My story, which I bet is similar to most of the Dreamers."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I hope our politicians could open their hearts and think about their own kids. We are not here to steal opportunities from anyone. We were brought to this country as children and a lot of us are in the position we are now not because it was given to us, but because we have fought for our dreams.\""
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

export default Rosie;

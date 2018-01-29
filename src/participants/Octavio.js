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

class Octavio extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-111454076-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Octavio",
      occupation: "Business Owner",
      timeSinceArrival: "13",
      country: "Mexico",
      image: "rosie_hero_1.jpg",
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
        top: "5%" /* 25% from the top */,
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
                    <b>{"Tell me about your early beginnings."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "From the very beginning? Okay. As you know, I was born in Mexico. I came here with my mom at the age of fourteen. The reason why my mom brought me here was because my dad didn't treat her like a human being--he was really mean to us. She decided to come here to give us a better life. We had to walk three days to get to the United States. Once we got here, right away, I got work in the fields picking strawberries. I did that for about a year and five months. I realized I didn’t want to do that anymore: I wanted to do better and the only way I was going to do that was by going to school. I decided to enroll into school. I couldn't go to middle school--I didn't have that opportunity in Mexico, and I went straight to high school where I was told I wasn't going to graduate because I didn't have any credits from middle school. In Mexico, I didn't go to school and I had no credits to transfer. I had to do everything from the beginning. I didn't speak any English; I took ESL classes; I took the lowest level math class--I lacked an education. This got me motivated. When my brothers came from Mexico a year after I arrived in the United States, they pushed me around and made fun of me because I didn't know any English. It gave me motivation to learn and to go to school. At the time, I was very shy. I was afraid of everything: the school and the language, but that's what gave me the strength. It gave me the motivation and courage to try to go to school. I put a lot of effort into learning the English language, and it took me a long time because of how shy I was and how I didn’t like asking questions."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Once I was about to graduate from high school, I thought by having a high school degree I was going to be able to get a good job--a job where I didn't have to work in the fields. I realized that wasn't going to get me where I want to be so I kept going. That's when I decided to take classes at Hartnell. I thought I was going to get just my general education, but that's the thing--once I accomplish something, I’m always looking for more. Once I was done, I needed to do more. I needed to go to a four year university to get what I actually wanted."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Backtracking a bit: when I was in high school at the age of 18, I started a farm with my brother. We created a family business and we still have it. We ran the family business when we were in high school. When I came to Hartnell, I started studying agriculture since it was related to what I was already doing: farming. I started to talk to people to pursue opportunities and I met this a guy, a PCA (Pest Control Advisor) where he told me about his job. What a PCA does is go out and scout the plants, looking for diseases and pests. I thought it was cool, being something I wanted to do. I talked to the counselors at Hartnell, and told them I wanted to transfer to Fresno State. It took me a year to get all my classes I needed to transfer, and it took me two years to complete my four years at Fresno state."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"when I was in high school at the age of 18, I started a farm with my brother. We created a family business and we still have it. We ran the family business when we were in high school."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "As you were going through your teenage years, did you know you were undocumented?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes, I knew I was since I got here. I knew it was illegal how I got here. What I didn't know was how it was going to affect me the way it did in college. When I came to Hartnell, I knew I didn’t have a social security; however, I knew I needed some sort of identification number. I was told about the AB-540 program--they gave us an ID and I was identified as AB-540. It was embarrassing, and I didn't tell anybody about that. I just kept it to myself. Being AB-540 and being undocumented has always motivated me; it made me want to do more, and work harder than the people who aren't undocumented to prove--not really prove to them but prove to myself--I can do what I want to do without being illegally here. It doesn't really matter as long as you have the desire to do things, you can do them. That’s what always motivated me and that’s why I never give up. I know I'm going to have to go through harder obstacles and more work, but I'm willing to do that."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You went to Fresno, and finished your undergrad there. What did you graduate with?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Plant Science. Plant Science with an emphasis of Pest and Crop Management. Like I said, I'm farming and managing the family business. I have 20 acres--it's a small business. I’m also working for an agricultural business as a PCA. I’m running the family business with my brother, working full time with the company."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m always wanting to do more. I'm hungry. I want to prove to people, including myself, you can do anything you want to do if you're willing to do it. That’s the way I see it, I don't want to give up. DACA helped by allowing me to pursue these opportunities. I only got DACA my last year in college. I only got financial aid that year--I had to pay for my whole education, basically. I was able to put myself through college because of the family business. Now, that DACA is about to be removed, it's a difficult situation. I don’t know what’s going to happen. I want to be optimistic, and I don't want to think about that for now. I just want to keep going. I don't want to think I might not work anymore, I want to keep going."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I’m always wanting to do more. I'm hungry. I want to prove to people, including myself, you can do anything you want to do if you're willing to do it. That’s the way I see it, I don't want to give up.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Let's talk about that more now as it’s one of my concluding questions. As we know, on September 5th, the Trump administration decided to remove DACA, punting it over to Congress to come up with a permanent legislative solution in the next six months. When you heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {"[Deep sigh]."}
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Like I said, I don't like to be pessimistic. The way I see things is if something happens--you see, I’m a believer and I believe in God--so when something bad happens, I'm optimistic that's something else will happen to counter that event. There's a reason why Trump decided to end DACA, and I hope something good will happen, something better for us. There will be solutions, and I want to be optimistic. I know it will be difficult, but I’ve been through a lot of situations and I'm just not going to give up. Worst case scenario, I go back to Mexico. I already have a career; I don’t think it’s the place but the person who decides to be successful, and I think I will be successful no matter what or where I stay. I will be a success, even if I get deported or have to move back tomorrow. I will find a way to be successful and find a way to make it work over there."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You want to do a lot of things: you have that hunger; that drive. Let’s say nothing crazy happens, what do you see yourself doing in the next few years?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Working in the company I'm working for right now and being successful there. I’m a salesman for this company, and I go out and talk to the growers. I try to convince them why they should give me the opportunity to help them be successful. I’m so grateful for this company. I want to thank them for this opportunity, and show them they did the right thing by hiring me. There's four PCAs in the company, and they've been working there longer than me. I want to get to their level; I want to prove to the boss I can."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "The same company has a site in Mexico, and if something does happen, I want to show my boss I am an important asset to the company; so that way I have job security and can find a way to come back through the company. Maybe my boss will be willing to invest in me, and show others that I am an asset that could be as good as the other PCAs. I just started working there four months ago. My DACA expires in an year, and between now and then, I want to bring in more customers to work with us and accomplish things."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Continuing the theme about plans ahead: would want to become a U.S citizen in the future?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes, absolutely. That is my dream because I really like being here. I've been here fourteen years-- I’ve spent half my life here. I don't have anything in Mexico, I have everything here. I have my family; a daughter, who I want to be here for. I want to be an example, a role model for her. I want to guide her through her years. This is my home, and to be honest, I don't want to go back because I have everything here. I might not have accomplished much here yet, but I know I can accomplish more if have the opportunity. I have done a good amount being here illegally, and I wouldn't be in the position I am now if I wasn't here."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Last question to wrap up. As Congress works for a long term legislation solution in the next six months, if you had the chance to tell them something, what would you tell them?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I would tell them this: we are here to work. We want to be successful, and we want to help this country. I know most think we’re just criminals, but they need to see things through our eyes though. I understand there's some bad people in this country that come from other places; however, there’s a lot more that want to do good. I consider myself one of those people who are willing and wanting to do good for this country. I know I wasn’t born here, but I didn't have a choice in coming--I was brought here. I think if they allow us to have the opportunity to accomplish more things here, we can do a lot more here legally."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I don't have anything in Mexico, I have everything here. I have my family; a daughter, who I want to be here for. I want to be an example, a role model for her. I want to guide her through her years. This is my home, and to be honest, I don't want to go back because I have everything here.\""
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

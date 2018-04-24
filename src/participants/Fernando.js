import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import MediaQuery from "react-responsive";
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

class Yazmin extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Fernando",
      occupation: "Student, Caregiver, Pizza Maker",
      timeSinceArrival: "26",
      country: "Mexico",
      interviewDate: "December 27, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/fernando_hero.jpg)`,
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
                    <b>
                      {
                          "Tell you about your early years and where you come from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "I’m from Mexico City. My mother moved to Mexico from Honduras when she was 14 because her father was just killed. He owned a store and as he was closing up shop, he was robbed and killed in the process. My mom lived in Mexico for about 5 years until she met my dad whom I know nothing of--I only have a picture and a few stories my mother, grandmother and aunts have shared with me. My birth was a result of a mistake: a rape. The good thing is my father realized what he had done and returned to my mother to take responsibility of what he had done."
                        }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "That’s good on his part. Not a lot of people do that."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Yeah, I was actually surprised when I heard he did that. That’s actually one of my dreams: go back to Mexico and look for him to see how he’s doing."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "My mother was in the process of coming over to the United States from Mexico when she was six-months pregnant with me. Unfortunately, there was a complication with the pregnancy and she had to come back to Mexico to get treatment--she ended up staying over there until I was born. After my birth, she tried again to come to the United States and we were successful this time. We entered without papers and landed in the San Diego area where she had family."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "My childhood experience was fairly normal. Eventually, my mom met someone, got married and had my brother and my sister. We had a good childhood up until 2001 when the divorce hit us. She was able to work legally in the United States because of TPS (Temporary Protected Status) and sometimes I didn’t get to see my mom because she was working. We would participate in after-school programs and manage as best we could. She also made sure we were taking the time to learn English well during school as well as Spanish at home. My brother and my sister had it a bit easier since they were born here but my mom was always concerned for me. Despite this, she always encouraged me to try my hardest in school and to pursue the opportunities available for me."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You mentioned you were going to be born in the U.S but your mom had complications with her pregnancy. Do you think about the ‘what if?’ As in, how different things would have been if you had been able to stay in the U.S?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Sometimes I do. [laughs]"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "But I’m actually grateful for the life I have now because I know that she tried to come over as well as all the sacrifices she has made. She understands my situation and she tries to help me in the best way she can. Not only that but she’s always trying to better herself. Even when she was able to work legally, she started to put herself in school to be able to pursue better opportunities to better herself and her children."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"My mother was in the process of coming over to the United States from Mexico when she was six-months pregnant with me. Unfortunately, there was a complication with the pregnancy and she had to come back to Mexico to get treatment--she ended up staying over there until I was born.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Let’s talk a little bit about your legal status. When did you fully understand what it meant to be undocumented for you?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I think the first time was when I was eleven or twelve--this was around the time I realized my father figure wasn’t my biological father figure and was my stepfather. I had friends who would tell me to get my fingerprints done to get my I.D card. I went to go ask my mom and she told me, “You can try but it’s gonna be a little hard. You can submit the information we have but I’m not sure if they’ll let you just because of the simple reason you weren’t born here.”"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "The second time it touched me was in high school--a private school I was enrolled in. I had to get financial aid to afford the dorms and I also applied for the work program to sustain myself and afford other school school expenses. I was a little scared to apply and the only form of work authorization I had was an ITIN (Individual Taxpayer Identification Number). For the first year, there was no problem. Around my sophomore year, the school reached out to me and told me, “You know what, we’re going to have you stop working. We need a social security number to allow you to work at the school.” The consequence was really rough--all the bills now fell under the person sending me to school. There was scholarship aid available and those were based on grade merit. Thanks to those, I was able to stay in the private school but there were still things I wasn’t able to do. I would see my friends go out and get driving licenses or obtain a good job…"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"It’s a common theme with other people I’ve interviewed. They also began to see what it meant to be undocumented as they saw their friends obtain driving licenses, apply to college or work a part-time job."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "One of the answers I gave when asked about the future was, “Well, I’m not too sure if I’m going to college just yet. I kinda want to take a year off and work.” Or I would say, “I’m not sure if I can. I don’t think I have the paperwork to apply.”"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Did you end up taking that year off?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "After high school, I told my mother, “I already know my legal status--I can’t work and I can’t get financial aid. Let me go back to Mexico. I know they have a really good school over there where I can learn a career and eventually I can try to transfer here to the United States.” She thought for a bit and responded to me, “You know what mijo [son]? Just hold on. Have faith in God. Wait a little bit longer. If you want, I’ll help you go to school and we’ll find you something to do.”"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "So, I didn’t take the break. I started looking for a job where I could get paid in cash or personal check. My first job was going to be at Burger King but then they told me they couldn’t hire me because of the lack of a social security number, and some other paperwork I needed. My first job ended up being at a bakery---it was low-paying but it helped me start going to school as well as allowed me to help out my mom by supporting my payments for school, and other expenses as well."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"I had friends who would tell me to get my fingerprints done to get my I.D card. I went to go ask my mom and she told me, “You can try but it’s gonna be a little hard. You can submit the information we have but I’m not sure if they’ll let you just because of the simple reason you weren’t born here.”\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"When did you first hear about DACA?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I worked at the bakery from 2010 to 2013. I was checking the news when I first heard about DACA, and I couldn’t believe it. I thought, “Wait, did this just really happen? This program is going to be out?” At first, I was scared to come out of the shadows and fill out the paperwork. I had the money to submit the application but I was still hesitant since it still required me to become vulnerable, and submit my information like a lot of the DREAMers have. I wasn’t sure if they [the government] was going to be able to use that against us and it made it a hard decision as to whether to apply."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "It was a big fear, and I was concerned as well. My biggest fear was what would happen if my application got rejected. I would ask myself, “Shit. Would I get kicked out?”"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "[laughs]. Yes, exactly. I probably submitted a whole storyline starting from the time I got here and I even had to search many of our boxes at home to find proof of my stay here in the U.S. to fit the qualifications: grades, receipts and letters of recommendation. I even had principals of the schools I attended to declare a statement stating my presence at the school to verify my attendance and my academic standings."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "As we filled out the application for DACA, we also filled out the form for naturalization but we found out I wasn’t able to quality since I didn’t come under any sort of visa."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Let’s talk about the future. Assuming nothing crazy happens to us, where do you see yourself in the next few years?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I want to continue studying and working hard--it’s one of the biggest things ingrained in me as I was growing up. One of my dreams is to eventually open up a business and provide jobs--even if it’s just an internship for a college student. Some of my family members have had businesses before and I have seen how they have been able to work and provide for themselves. I find that really awesome. One of my career goals is to be an automotive technician where I would work on cars and become the best mechanic I can be. My hope is to become established enough to partner with Hartnell College and have students come work at my shop."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Off-topic. What’s your dream car?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Oooh. I have three [laughs]. I started out with my dream car being a Mustang."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Is there a specific year?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "A ‘72. Maybe a ‘69. I’ve seen a couple on a trip I just took to Arizona. My other dream car is a Chevy Impala from ‘74."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Very old school, aren’t you? [laughs]."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I love the classics [laughs]. The dream car I would like to own is a Dodge Challenger."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Continuing to talk about the future, would you like to become a U.S Citizen in the future?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I would definitely love to. I have family members that became deported and I would love to visit them again someday. My grandmother who was removed from the country was actually in the process of getting her residency. The death of our uncle in 2001 affected her deeply and she traveled to Texas after the funeral proceedings here in Salinas, which made her miss the court dates to continue her process for residency. On the way back to California, she was stopped by immigration officials and eventually became deported. I still stay in touch with her, and I would love to be able to go visit her in Honduras where she currently resides. From the things she tells me things are not very good over there at the moment."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Same thing with Mexico. Like I mentioned earlier, I would like to get in touch with my father so I can learn more about myself. I would also like to travel with my spouse and experience the world with her."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Let me get your take on current events. As you know on Sept. 5th, the Trump administration announced the removal of DACA and punted it over to Congress to come up with a solution before March. When you first heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I remember thinking, “Oh no. This is not good.” We all saw on the news and witnessed Trump follow-up with one of his campaign promises. I admire him for it because it shows a lot about him. But at the same time, I feel a bit fearful of what is to come. I’m grateful we got the paperwork to work, study and pursue opportunities not previously accessible to us. Even now, I still feel the DACA program didn’t need to be removed. It helps so many people and our country (and by our country I mean the U.S. since this is all we know) as well. We pay our taxes and have contributed in some way to this country whether by working or buying and selling in the marketplace. With DACA and it’s renewal period, government is gaining money from the application fees we have to give when we submit our applications. I felt it was something that shouldn’t have been taken off the table."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "For future outcomes, I hope for a permanent solution. If they bring back DACA, that’s great even though it has certain limitations. You’re only able to renew up to a certain age--some people that have been renewing DACA are already reaching that age limit. Eventually, they wouldn’t be able to renew it. My hope is for whatever solution is decided that it will allow us to continue contributing to society. I feel like this is all we know. Some of us haven’t returned to our birth countries since arriving to the United States. I really hope they commit to something soon."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"We pay our taxes and have contributed in some way to this country whether by working or buying and selling in the marketplace. With DACA and it’s renewal period, government is gaining money from the application fees we have to give when we submit our applications. I felt it was something that shouldn’t have been taken off the table.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "That brings me to my last question. As Congress continues to work on what hopefully will be a permanent solution to replace DACA--if you had the chance to say something to them, what would you tell them?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I would tell them to do their best. I know it’s a hard situation given that this decision falls on them. It’s a lot of pressure. For the most part, I think they should consider all of the DREAMers; they should consider all of the undocumented people contributing to society. We’re definitely not trying to take over anything--we’re definitely working hard, and trying to contribute our best to our communities. Some of us have lived here for many years and this is all we know. We know the American way of life and any roots where we come from, we hardly know anything about them. We work double as hard just to prove ourselves. Some people have had two or three jobs to provide for their families, myself included. I work three jobs right now to be able to provide for the family I have, which includes my wife, my little girl, and me. I’m actually expecting a baby boy soon."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Congrats!"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "[laughs] Thanks. We have our home that we’ve build up until now and all of that is something we definitely don’t want to lose. We’ve contributed to society in one way or another. I hope Congress considers a solution where we are able to continue to work and provide for our families and allow us to continue to contribute to society."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"We work double as hard just to prove ourselves. Some people have had two or three jobs to provide for their families, myself included. I work three jobs right now to be able to provide for the family I have, which includes my wife, my little girl, and me. I’m actually expecting a baby boy soon.\""
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

export default Yazmin;

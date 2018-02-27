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

class Nayeli extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Nayeli",
      occupation: "Lab Technician",
      timeSinceArrival: "20",
      country: "Mexico",
      interviewDate: "November 11, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/nayeli_hero.jpg)`,
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
                          "Tell me about the early years and where you come from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                        {
                            "I’m from Mexico City but I don’t remember much. My family and I came over when I was 3-years-old on a visa and they let it expire. I feel like I’m from the United States because I have lived my entire life here, both my childhood and early adulthood. I don’t remember my birth country as much as I’d like nor do I remember the family we left behind. I didn’t know what it meant to be undocumented--I didn’t know about my status until I was in 6th grade and I didn’t fully comprehend what it meant until my freshman year--the year where I got pregnant. At this point in my life, I became an adult. I realized just how difficult it was to find affordable access to healthcare being undocumented. On top of that, it became clear to me all of the struggles both my parents and other people who are undocumented have to face such as access to little to no healthcare, limited job options, and the restricted post-secondary education opportunities. I was a pregnant 14 y/o undocumented Mexican, and I felt like the biggest statistic. I truly believed that I would not amount to anything because of a combination of both my life decisions and things I had no control over, specifically what side of the border I was born. However, I persevered and graduated high school in order to fulfill my parents’ dreams to seeing their little girl go to college. I didn’t know how hard it would be to continue my post-secondary education until I started applying for colleges. I applied for our state college here just for fun—I got accepted but I didn’t go because of financial reasons. Without FASFA, loans, and limited scholarships for undocumented students, tuition for state colleges in Oklahoma were too high and therefore those universities were not an option for me. However, I scored a scholarship called 'My Dream' which would pay for the majority of my college tuition at the community college. Then, I transferred to a regional university and earned a few scholarships--the rest I paid out of pocket."
                        }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Okay, let’s go back a bit before we continue to talk about college. What else can you tell me about your childhood? Any difficulty assimilating at first?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Like I mentioned, I was 3-years-old when I arrived here. I don’t remember too much of my early childhood. What I know comes from the stories my mom would tell me. She said in the beginning of kindergarten, I would come home crying wondering why the kids didn’t understand me at school since I didn’t speak any English. As a child, I was frustrated that my ability to communicate wasn’t as strong as other children my age. Eventually I caught on sometime during second grade. They had classes for people like me—English as a second language classes—and eventually, I was able to test out. Aside from that, I didn’t have too much difficulty. I was a normal child. I did get bullied because of my name but I think that was normal. The worst thing I can recall is being judged/bullied because of the way my parents spoke English: it was broken English but they tried their best. It would hurt my feelings when I saw other adults becoming angry at my parents because they couldn’t understand them. I could see my parents' frustration on their faces and I became their translator at an early age. I stood up for them. I was their voice. And to this day, I believe each and everyone of us with DACA or TPS are our parents’ voices. Other than that, I had a good childhood, I am very fortunate. No one would know that I was undocumented. I went to kindergarten here in the United States—I grew up with everyone and I’ve known everyone since we were little. I’ve never gone back to Mexico since my arrival."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What about school? Did your parents emphasize school as you were growing up?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Of course! Other than emphasizing to stay out of trouble and not do drugs, the number one thing my parents told me was to focus on my studies--they would tell that my studies would be what would help me get far in my life. I’m aware most parents emphasize school to their kids but it’s different with us. Being undocumented, my parents knew that if we are educated we could achieve whatever it is we aspired to become. Continuing our education was the most important thing my parents emphasized to both me and my younger sister. We completely understood the saying 'knowledge is power' at an early age."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "You started talking about applying to colleges and realizing the lack of opportunities for people in our position. Can you continue to touch on that a bit more?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Aside from not being eligible for FASFA, grants, and loans, we have limited opportunities for scholarships. Most scholarships require a social security number, which we don’t have. There aren’t many scholarships made available specifically for undocumented students as is. Add the fact that I reside in Oklahoma, a very conservative state, there are virtually no scholarships available for us. We have to HUNT THEM DOWN. With that being said, here in Oklahoma we have what’s called the Oklahoma promise. It’s a piece of legislation stating every child has the opportunity to go to post-secondary education regardless of your income level at home. To qualify, you need to submit an application and take certain high school courses in order to be able to receive a scholarship. I remember my parents applied for me—I took all the courses required; however, during the time I mentioned I was applying to one of our state colleges here, I was told I couldn’t use the program because of my status. But like I said before, I found other resources to help me go through school and I used them to my advantage."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                          "Applying for college was definitely hard—my parents didn’t finish school so I didn’t have anyone I could ask questions to or gather advice. I didn’t bother to apply for FAFSA—I knew some states do encourage undocumented students to apply to qualify for other scholarships but there wasn’t any offered in my area. I live in a very conservative state so there wasn’t much of a chance here [to apply for those alternatives]."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What did you want to study?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "As I was growing up, I quickly became aware that with hard work and discipline I was capable of  good grades in my classes. I realized in high school my love for science and problem solving--I became interested in the healthcare field, and began pursuing a career in the medical field in hopes of becoming a doctor.  Right out of high school I went to college and received my Bachelor’s in Science in Molecular Biology—I actually just finished last spring. My main goal was to go to med school but as I was working through my undergrad, I learned none of the med schools in Oklahoma accepted anyone who wasn’t a U.S. citizen and I also noticed they didn’t accept anyone with any types of work permits to an extent—DACA specifically was not accepted in their list of allowable work permits; right on their websites it says, 'We don’t accept DACA recipients.'"
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Wow."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "It’s hard in that sense for me—I know other places such as California have more opportunities available for us. I know schools in California prefer people with high school diplomas and are residents in the state so I would have to relocate. It’s just harder for me to make a move like that since I have a family here and other financial responsibilities. It’s not just about what I want anymore, I have a seven y/o and currently I need to focus on providing for him. I’m somewhat limited to what I can study and how far I can go. Instead I’m looking to get another B.S (BSN) or pursuing a Master’s in my field. For now, unless a clean DREAM Act is passed, the chances of becoming a doctor are very low—at least here in Oklahoma."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"I was a pregnant 14 y/o undocumented Mexican, and I felt like the biggest statistic. I truly believed that I would not amount to anything because of a combination of both my life decisions and things I had no control over, specifically what side of the border I was born. However, I persevered and graduated high school in order to fulfill my parents’ dreams to seeing their little girl go to college.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Do you know what the reasons are for the med schools in Oklahoma not accepting DACA recipients?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I actually talked to two people in the admissions board from two of the schools in Oklahoma: OSU for a DO program and OU for an MD program. The doctor from OU straight up told me it was because I may or may not be able to work in the future. This conversation took place a year ago before the current state of the country started to develop. She was right and I don’t blame her. However, she also said it was because people like us might not be able to afford it and they would rather give the resources and time to someone who is able to go through the program."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                          "The other doctor I spoke to from OSU—I actually spoke to her a week ago—and she told me it’s mostly politics since a lot of people don’t necessarily care for what type of work permit you have. It’s all about people not wanting to change their ways and not enough people to advocate—there’s people here who advocate for immigrant rights but only healthcare, there’s not much of that here. There isn’t much advocating happening for undocumented students or students with DACA. While I know few of my own colleagues and friends with DACA, I don’t know anyone in Oklahoma with is in a similar situation as myself."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "If those things didn’t stand in your way and assuming nothing crazy happens to us, what else do you see yourself doing besides pursuing med school?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "If something positive where to come out from our situation, we wouldn’t be limited anymore. I would be able to provide a better future for my son, who is a U.S. citizen. Both his father and I have DACA. We are hoping Congress passes a bill that implements a pathway to citizenship in the future. It would be a dream come true. We would not be limited to our opportunities in our careers, education, where we reside. The possibilities and opportunities are endless. We would have access to health insurance. I’ve never had insurance in my life—even with the two jobs I have now. We would be normal law abiding citizens, and we would live without fear. I feel like currently we’re silenced victims."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Expand a bit on that."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Because of our status, a lot of us don’t speak up mainly due to fear. My parents will never speak up even though they’re the ones that came for a better future for not just for myself but for themselves as well. They won’t ever speak up to advocate for their rights and I feel like it’s our responsibility to do what we can and speak up. The way the U.S has the immigration pathways—there’s not a clear pathway to citizenship right now so you have people talking about how we should be coming in here the legal way but that process in itself is broken. We become victims due to that and silenced because of the fear of deportation or the fear of being separated from our families or getting something taken away from us. Right now in our country, we have many issues in which people speak up on. I feel like if we tried to speak up, one of the common arguments would be, 'Okay, you have no rights.' or 'Well, we already gave you DACA, what else do you want?' All they have to do is find that clear pathway to citizenship—it would fix what they currently have established; otherwise, it would be another bandaid on top the leak."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I still consider myself an 'illegal' immigrant even with DACA; it’s helping us by letting us work and pursue our education but it’s not really helping us for the future. DACA in itself is still limbo—even more so than right now. Before all this happened, we still didn’t know what could happen to us in the future. Either way, we’re still very privileged. I’m aware that there are people that didn’t qualify for the relief who would want nothing more than to have DACA. I can’t fathom to comprehend how they feel."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I told someone I was undocumented and then I said I had DACA. They replied with, 'Well, you’re documented if you have DACA.' That’s not really how it works. I’m still an immigrant and undocumented; until I have a U.S. citizenship, I am undocumented. We’re oppressed by fear and by the government and by people who don’t fully understand our situation."
                      }
                    </span>
                  </p>
                  
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"Because of our status, a lot of us don’t speak up mainly due to fear. My parents will never speak up even though they’re the ones that came for a better future for not just for myself but for themselves as well. They won’t ever speak up to advocate for their rights and I feel like it’s our responsibility to do what we can and speak up.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          'As you know on September 5th, the Trump administration announced the removal of DACA and punted it over to Congress to come up with a solution in the coming months. When you first heard, what was your initial reaction?'
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I was nervous following the minutes before the press announcement. I’m a realistic person and I figured they would say DACA would end or that they would try to use it as leverage for something else since this is politics we’re talking about. I was at work when the announcement was made and it was difficult to keep my composition together and not break down crying. After work, I did shed some tears—I was completely frustrated about our situation and knowing I’m not the only one dealing with this. However, there was some comfort knowing I’m not alone in this. It was however extremely frustrating knowing there’s so many of us and feeling like we don’t count in this society. As the days went by, I stopped worrying and I got really excited over all the CEOs and leaders speaking up for us and talking about our situation. Since the announcement of DACA, I felt that we hadn’t been in the news and hadn’t been talked about until now. I appreciate all of the coverage it has been having."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Last question I have for you. As Congress continues to work on what will hopefully be a long term solution for DACA—if you had the chance to say something to them, what would you tell them?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Set the politics aside and really think about the human aspect of it. I don’t want to use the fact that we were young and it wasn’t our choice—even if would’ve been my choice, I would wholeheartedly agreed with my parents to come and try to achieve the American dream everybody wants. We’re just like you—we just didn’t have the option to choose what side of the border to be born in. Really consider how these decisions affect people and families. If they’re not sure in their decisions, reach out to their own communities and try to get to know us. Or hear us out when we try to reach out to them."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"We’re just like you—we just didn’t have the option to choose what side of the border to be born in. Really consider how these decisions affect people and families. If they’re not sure in their decisions, reach out to their own communities and try to get to know us.\""
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

export default Nayeli;

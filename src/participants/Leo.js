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

class Leo extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Leo",
      occupation: "Student Ambassador",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/leo_hero_2.jpg)`,
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
                        "Why don’t we start off from the beginning: the early parts of your life."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Not to be cliche, but my life began before I was born. I come from Huixtepec, Oaxaca, Mexico, and my father had a rough life. My grandfather became an alcoholic and left his family. My grandmother had to support my father and his siblings. My father had to learn how to maintain himself so he made a living by working in the fields; for the same reason, he dropped out of high school. He’s very smart, charismatic and creative. He’s very compassionate as well. My mother didn’t have a rough life but she had a hard one. She would have to wake up and make breakfast, dinner and lunch. She went to school by walking five miles each way, carrying fifty pounds of books. Her father was the mayor of our town in Oaxaca, and he was the owner of a lot of land. He had the respect of the entire town. Even here, everyone heard about him, ‘Oh yeah, him. He’s the coolest guy ever.’"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My mother had to take care of her siblings as well. She finished high school, and tried to go into medicine to become a doctor, but she dropped out. She had my sister then she had me. My father knew he didn’t want this kind of life for his kids. He taught carpentry, but he still knew his family could be better off someplace else. A few months after, my father left to America to get our new lives started."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Sorry, I’m having a difficult time figuring out how to tell my story."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "It’s okay. I’ll ask some questions to try and help you out. Why don’t you tell me about your early experiences when you first migrated here to the United States?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Okay, thank you."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Shortly after my father came, he got deported. He tried to come back and was able to stay. I didn’t know any of this information until about two years ago. He worked as a dishwasher and, man, that stuff is hard. I’ve done it myself and it’s hard. He worked there and he worked in the fields. Just hearing and learning about this--knowing he had to do these things to start over not only for himself, but also for my sister, my mother and myself....Not only that, but he was still supporting my grandmother, my grandfather and other family relatives in Oaxaca--people that he hasn’t seen for years."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "After a few years, my mom, my sister and myself decided to join him here in the States. She grew tired of having the family apart. However, a bit after we came, my grandfather was shot dead and we had to come back."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Damn."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "We came back to the U.S. shortly after my third birthday. I don’t remember much, but I do remember playing outside my aunt’s house. Most of the memories are still vague. When we came here, we were fortunate enough to share a home--a one bedroom home--with my family, my grandparents, and my aunt. My family would take the bedroom while my grandparents slept in the living room couch with my aunt taking the kitchen table. It wasn’t much, but we were fortunate enough to have a roof over our heads, food in my stomach, running water, and having someone with me."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "At first, I didn’t feel any different from any kid--nothing more nor nothing less. But in 1st grade, when I tried to speak a sentence in Spanish, my teacher corrected me and she would say, ‘speak in English.’ That upset me inside, and I think that’s when I began my stuttering. That’s when I realized I was different. I was put in different classes to help accommodate me. I would see my mom running back and forth from the office to make sure my sister and I were being accounted for. My sister and I also served as translators for our parents--they would even take my sister out of school at times to help them pay bills or whenever translation was needed. It was hard for my sister. In a way, she became an adult for me as well. Although she was taken out a lot, she did great in school. She even skipped a grade, and I thought it was the coolest thing ever. It inspired me for a moment until I would look at my grades and see I was failing and falling behind."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"When we came here, we were fortunate enough to share a home--a one bedroom home--with my family, my grandparents, and my aunt. My family would take the bedroom while my grandparents slept in the living room couch with my aunt taking the kitchen table. It wasn’t much, but we were fortunate enough to have a roof over our heads, food in my stomach, running water, and having someone with me.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Why do you think that was?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Probably because I knew I was different, and I took for granted the resources around me--the support and help. In my memories, I see my parents yelling at me when I was learning how to read. I remember my mom telling me how to say ‘the’ and I was just stuttering and scared to say it. It shook me for most of my young life. Just hearing her say adamantly, ‘It’s the. T-H-E. THE!’ Same thing for my father, he would get frustrated, but I knew they were doing their best to teach me."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t have many role models growing up except for my father. When I told my dad what I wanted to be when I grew up, I said,  ‘I want to be like you.’ All of a sudden, he stopped his work and told me, ‘No, don’t be me. Don’t you ever be like me.’ It put me in a shock and for the longest time, I didn’t know what to do. Now, my father is a chef, a very successful chef for a great catering company; he’s also a carpenter and a very generous person. I could’ve been like him--a successful cook, a great carpenter or an architect--but that moment put me in a lost place. It affected me up to my high school experience."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I became numb since I thought I wouldn’t get into any colleges. I saw my sister struggling through school. I saw her everyday crying and saying, ‘I can’t do it, I can’t do it. The work is too much, it’s too much.’ Seeing experiences like that made me decide to go numb: I didn’t feel happiness; I didn’t feel joy; I didn’t feel motivation. I disconnected myself from my classmates--even now I consider them classmates and not friends. I still have that mentality of trust. I ask myself, ‘Who would be there for me if I go to jail and get deported?’ I had this loathing feeling of myself--this mindset of making everybody around you happy but yourself. Luckily, I thought about those that had invested time into helping me and seeing me grow. I didn’t want that to go to waste and so I applied myself the last years of high school. I tried to make connections, but I felt it was a bit too late; however, I was fortunate enough to meet someone nice. She’s a lot like my sister: strong, smart and kind. I wanted nothing but to be her friend, and to be there for her. If some of my teachers were tough on me, she was there for me; during my social struggles, she was there for me. She was there for me always. We would walk to class together and talk about our days. That warm feeling of being close to someone brought me back from the numbness, and I got myself back on track. Despite this, I was still developing depression. I kept thinking about the future and college and how I was going to get my life together. My mother noticed and she started to taking me to therapy…"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        'God, this feels like an AA meeting!'
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You know, I’ve had the privilege to listen to a lot of stories and a lot of them have been really heavy. Take the time you need--the mic is yours."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Okay. My friend and my sister left to college since they’re both one year ahead of me, and just like that, my support pillars were gone. I felt like falling, but I didn’t fear the impact. Luckily, I met another friend who gave me advice and encouragement, and helped me to not succumb to my dark places. On the brightside, these experiences gave me an idea of what I wanted to be: a therapist. Throughout high school, I had many people suggest to me what I should do with the rest of my life, ‘Why don’t you do this? Why don’t you do that?’ I also reached out to people to ask them for advice in this regard. The only person I didn’t ask was my father. At the time, I felt distant from him because my worst memories of him would remain in my head. I didn’t think to realize he was there for me. He came home at midnight and went to work at 5 am the next day. He was still there for me. I’m trying my best now to make up for it..."
                      }
                    </span>
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
                        "I hate this feeling right now, man. [laughs]"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I also didn’t reach out to him since he also told me to not be like him. On the other hand, my sister kept suggesting, ‘Why don’t you become a policeman? Why don’t you become a firefighter?’ I rejected the idea because I thought it was only suggested due to my physical capabilities, and because I wasn’t that bright. Just to shut everyone up, I told everyone, ‘I’m going to become a doctor.’ And I stuck with it--I gained motivation to prove them wrong. I took a bunch of medical classes: CPR, anatomy, physiology, sports med, biology, and chemistry classes. I was focused and getting my stuff done. Then, I went to a college counselor and she told me, ‘I don’t think pursuing medicine is the best path for you.’"
                      }
                    </span>
                  </p>
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
                        "For some reason, my brain was quick to rebound from that. I took her advice and began to really think about the things I liked to do. I revisited old memories to try and gather some sort of direction on what I wanted to do. I recalled that I like to spend a lot of time helping other people. About a week ago, I was pumping gas and I saw a person that couldn’t speak English asking for gas money. For a split second, I saw my parents asking for money and I decided to help this man. I gave him $30 and he went on his way. Because of memories like this, I decided to become a therapist. I wanted to help people see the good in themselves--to help them climb out of whatever dark hole they find themselves in."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Growing up, I knew I was undocumented, but I brushed it off. I tried to act as normal as possible. Maybe I was just ignoring the idea that I was undocumented. My mom explained it clearly, and I still have the memory of her telling me, ‘We don’t have the same privileges as others; we don’t have the same support as others. We can get deported if we get in trouble.’ However, I was a bit of a troublemaker when I was young. I walked out of school one day and I remember vaguely the police coming to my school and interviewing my mom. She was calm as she was answering their questions, but as soon as we got home, she just started bawling. Days after that, she was still shook--it really worried her. Even then, it still didn’t dawn on me what it meant to be undocumented until last year when I was trying to pursue my higher education. I realized I couldn’t pursue some opportunities like getting the same financial support as others. When Donald Trump became president, other people’s reaction to the possibility of DACA being revoked also started to really sink what it meant to lose DACA and the consequences of being deported."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\" For my sister, that was the first day back in school and once she found out about the announcement, she realized she couldn’t renew [her DACA]--missed it by one month. I didn’t know and I kept bugging her to renew it. Once she told me, it was devastating.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Is it still your goal to become a therapist?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It is but I’m still at a bit of a quandary. My father told me I must get a job before getting my bachelor’s degree so I decided to be a paramedic. Not because it’s simple, but because I want to help people. I’m worried that I’m going to like it too much that I’ll get stuck and not go back to school. I would like to go to schools like Fresno, Redlands, or Evergreen, but I haven’t started the transfer process even though right now is the time to do so. The pressure of all the things on my plate sometimes cripple me, but I’m starting to manage it more effectively."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {"Let’s wrap up by talking about recent events: On Sept 5th, the Trump administration announced their plan to rescind DACA and punted it to Congress to come up with a long term solution. When you first heard, what was your initial reaction?"}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "‘I better call my sister to see how she’s doing. I better talk to my parents to see how they’re doing.’ My parents didn’t want to talk about it at all. The school campus was bleak but I thought, ‘I’m still here--this isn’t going to affect me.’ However, I also wondered if this was another episode of numbness. I saw my classmates carrying bleakness and hopelessness in the following weeks, and I tried my best to help them by assisting them with the renewal process. For my sister, that was the first day back in school and once she found out about the announcement, she realized she couldn’t renew again--missed it by one month. I didn’t know and I kept bugging her to renew it. Once she told me, it was devastating."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"As Congress decides what is going to happen to us--if you had a chance to say something to them, what would you tell them?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I recently had a conversation with my grandfather. I wanted to know the main reason why he and my grandmother immigrated to America. I asked him, 'Why?' He told me that he came to build a home. When my father and his siblings were born they lived in a house with walls that hardly covered the house. It was practically broken plywood on every corner of the walls. In order to go to school children had to have shoes. It was difficult to buy shoes for my grandfather to buy shoes for five children. My father came to America to build a home for me, as his father tried for him. Like my grandfather and my father, we have been through enough. Please. Just let us stay."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"Like my grandfather and my father, we have been through enough. Please. Just let us stay.\""
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

export default Leo;

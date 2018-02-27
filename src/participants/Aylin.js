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

class Aylin extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Aylin",
      occupation: "Kinesiology Major",
      timeSinceArrival: "21",
      country: "Mexico",
      interviewDate: "October 7, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/aylin_hero_2.jpg)`,
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
                        "Let's start off by you telling me about your early years."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {"I never really lived in Mexico. I was born in Michoacan and my parents brought me here when I was eight months old. My father came here first and began working in the fields. Then my mother, grandmother and myself all arrived in the States shortly afterwards. This place is all I know. Even though I identify myself as Mexican, I carry this feeling like I don't fit here nor would I fit over there. If I go visit Mexico, I’d definitely stand out. Meanwhile, staying here I have had the difficult task of fitting in and finding my place on the basis of who I am and the culture that represents me."}
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I believe we lived in Marina at first then we moved to Salinas where I attended kindergarten up to fifth grade. After that we moved to Greenfield where I attended middle school for two years, which was a huge transition. We ended up moving back to Salinas, more specifically the Spreckels area, and things felt completely different since we were now living on the outskirts of the town. There were hardly any Mexicans to be honest. Actually, the majority of the residents there were white. So, being new and seen as different, I would get picked on quite often. The way I talked, sound, and act were the usual aspects of my character that got criticized the most. I knew English pretty well yet I was still put in bilingual classes from first to third grade--which really had its effect on me since it showed that my writing needed a lot of improvement. In eighth grade, the social aspect changed for the better when I met my good friends, Aracely, Kati, and Viridiana. I was completely terrified during my transition back into a Salinas school, but these three wonderful individuals made me feel welcome like nobody else ever did. We would sit at a table together and everyone knew that's where all of us Mexicans would be sectioned at--the so-called ‘beaner table.’ Nevertheless, I graduated with my friends in 2013 from Salinas High School, we all went to Hartnell College and now Aracely and I are studying at CSUMB (California State University, Monterey Bay)."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"My father came here first and began working in the fields. Then my mother, grandmother and myself all arrived in the States shortly afterwards. This place is all I know.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "You mentioned your father came to Salinas. Why Salinas?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "He had friends here who told him that they’re hiring workers for the strawberry fields and how he should come over [to the U.S]. He realized that he would make good money and could live a better life than the one he had in Mexico since financially it was a really bad time. He told my mom the plan of moving over here and so it happened. My mom tells me that in Mexico, we would never have had the things we have here. How I wouldn’t have these shoes, clothes, home and education over there. They say it’s very hard to make a living whether you are in the working-middle class or simply poor. And they know that because they experienced it first-hand growing up."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "My parents wanted the best for us. I think the hardest part growing up was having to see my parents leave to work for hours to pick strawberries. My father eventually landed a better job in construction when I was in middle school, therefore, it was a bit easier but still hard for my family. It was hard not seeing my parents when I was younger, they would wake up 4-5 in the morning and not come home until eight at night. I spent most of my time with a babysitter. My mom said that was the hardest decision having to leave her children so early at 4am, having them spend the day with a complete stranger, but it had to be done to maintain a living for our family. At one point, my family lived in a three bedroom house with over eighteen people living there at the same time. Even the garage was rented out. It was people who barely came to the U.S from Mexico. We didn’t have any privacy, and all these certain things. I think that's where my motivation came from, seeing my parents work day-in-and-day-out, seeing the conditions we lived in and how it was slowly affecting my parents physically."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I wanted to do something to help. So, I convinced my mother to leave her job in the fields and start looking for other work that’s related to customer services, which would be a lot easier on her body. Currently, she still process of finding work, but she is definitely much happier."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "My parents always told me this is the reason why they brought me here, how we need to take advantage of any opportunities we have. They’ve always told this to my brother and I. My brother was born here, but he knows to take hold of every opportunity he can."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Growing up were you aware of your status?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Yeah, always. I think it was hard at the beginning because not everyone was open to the idea. I remember occasionally saying I was born here because my parents had always told me to never say I was born in Mexico in fear that someone would get me deported. They had these ideas. I sometimes do get a bit anxious saying it around certain people I may not know. I do say I am an immigrant and there is nothing wrong with it. I have never been embarrassed about me being undocumented, yet my parents were just afraid of what people may say or do in regards to my status."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Some of the reactions I often get: ‘Oh really, you don’t look like you’re from Mexico.’ I get that alot because I’m so light complected. People look at my skin and automatically think I’m white. I’m not. Im very much Mexican."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Fast forward to your high school years--these are the times when people grow and begin developing an idea of what they what in the future. Tell me more about that time?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "High school for me was...fine. I had a hard time coping with people--mainly for different reasons. I think as far as the concerns for my future at the time, I wanted to become a Psychologist. But it was the pressure of me going straight into a CSU that made me reconsider since I didn't want to be too far away from my family. Also, I always felt unprepared. I never had a guide where to go, and my teachers always told me I’d figure it out on my own. I only applied to one school, California State University, San Francisco and I was accepted. Like I said, however, I knew I wasn’t prepared to leave my family, I’m just so close to them. I also didn't have the money to leave. At that time, I still had not applied to DACA. I wasn't aware of the Dream Act that was in place and other resources for undocumented students. I told my parents about my acceptance, yet they were mainly concerned about the cost of tuition. I decided to go to Hartnell College and it went well, and, as an experience, it was fine. I met friends who had the same background as me and because of that things went smooth."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Why did you first decide on Psychology?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I had always gotten the comment, ‘you give a lot of good advice, you should be a psychologist or therapist.’ Even gotten it with the advice I shared to my parents. People usually say you tend to teach your parents because they sometimes don’t know what they’re doing. So, the times I would give them some advice, they’d say ‘oh wow, where did you learn that from? We didn’t teach you that.’ I had good thoughts for my age and I then thought maybe I should become a psychologist."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "But then, I knew how my father loved playing soccer and developed bad knees from the sport as well as his many years of working in the fields. My grandmother, grandfather, and my mother’s friend also suffer from physical limitations. So I wanted to do something about that. In reality, a lot of field workers have serious physical limitations because of their job and don’t have access to help. So, I thought, physical therapy. Now at CSUMB, I’m learning a lot about the healthcare system and how some field workers who have access to therapy only receive one session per month. That little time doesn’t solve anything. It’s my motivation to go into physical therapy and make more sessions accessible to these hard workers. It’s what they deserve. I’ve personally worked picking strawberries so I know how hard it is. Just thinking of the pain I had when I worked for only a month in the fields with my grandma brings back that extreme discomfort. Thinking of how heavy the strawberry boxes were, how my entire body trembled when I lifted the boxes, I started to realize how lucky I was that I was only doing this job for a month rather than an everyday routine. I remember I started tearing up after only fifteen minutes because of how painful it was, and thinking I was going to be there for over ten hours a day was horrible. I would get home, crash out, and tried to do the simplest things before going to bed. I couldn't shower properly, my toes were numb, worse of all, and I’m sorry for this, but I couldn’t even defecate because I was so sore to squat [laughs]. I admire the field workers and give them absolute respect. People say being a server is hard work [giggles]. I say, ‘Oh no, this is a luxury,’ nothing compared to the fields."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You said in your senior year you weren't aware of DACA and other resources, how did you come to learning about DACA?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "It was my father who told me that his friend’s son applied to DACA and then my father and I looked into it respectively. At the time, my friend’s mother, who work in legal services, also further informed me about the application and the steps I should take to apply. I was really hesitant at first since all my information was going on the application. I thought what if it didn't work out? What then? I’m grateful I applied and now I am apart of DACA, I’m good for two years."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"I remember occasionally saying I was born here because my parents had always told me to never say I was born in Mexico in fear that someone would get me deported.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Fast forward to now, you’re going to school, studying Physical Therapy. Let’s say nothing crazy happens; where do you see yourself in the next few years?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I for sure want to go to graduate school. I’m working on my Bachelors in Kinesiology right now and I want to move my way up to getting into a Physical Therapy program. I’m looking into programs at both UC San Diego and Sacramento State, particularly the latter since its closer to home. I was also looking into Fresno’s program but I wouldn't like to live in Fresno. It’s too hot to be honest. I really don’t know how I’m going to approach my plan in connecting Physical Therapy and giving access to field workers. However, right now, I’m focusing on getting my education so that way I can be able to eventually connect the two. Baby steps."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          "Recently, We heard about how the Trump administration rescinded DACA and leaving it up to Congress to come up with a solution within the next six months, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "I responded simply with a ‘oh crap’. It was really heartbreaking, being offered these great opportunities and then just getting them taken away from you. It’s really hard to process. I automatically thought about my education: Am I going to be charged as a nonresident? Then I thought about the information DACA has of me, my entire life is on that application, so what will happen to me? Where will I go? What would happen to my family? My grandmother has a house in Mexico but I wouldn't want to go back, I wouldn’t be able to adjust. What about my parents? My brother? If I was looked for at home, my parents are immigrants, what would happen to them? My brother, a citizen, where would he go? It’s very scary. Do I hide? Do I leave? I don’t have the answers to these questions. Thankfully, CSUMB has came out and said they’d protect their students and I am very grateful for that."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "While Congress is working on a solution for the next six months, if you had the chance to tell them something, what would you say? "
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                          "Well, one thing that really concerns me are the stuff that is said about us, saying how we steal jobs, we steal benefits from Americans. We don’t qualify for any services. Growing up, we didn’t have any insurance, if we got sick, we’d only go to the doctor if we were dying. We don't go for check ups or dentist appointments since these services would have to come out of pocket, and there's no money for that. As a child, I would have really bad ear infections where I have to stay home and go through the pain without any medications. My parents would just have to watch me cry, they didn’t have the money to take me to the doctor. The same thing with toothaches. I would have to go through them and so did my parents. Home remedies helped, but it was still painful. Currently, I have a bad TMJ condition where my jaw pops really bad and gets stuck every now and then. I can't do anything  I don’t have the money to get the procedure. For him [Trump] to say we’re stealing all these things, medical, welfare, we’re not. Even if we wanted to apply to these resources, we don’t qualify for them. We can’t. I would say don't fall for these fake, false narratives about us."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            "\"For him [Trump] to say we’re stealing all these things, medical, welfare, we’re not. Even if we wanted to apply to these resources, we don’t qualify for them. We can’t. Don't fall for these fake, false narratives about us.\""
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

export default Aylin;

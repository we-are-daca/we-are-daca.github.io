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

class Jonathan extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Jonathan",
      occupation: "Field Representative",
      timeSinceArrival: "21",
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
        top: "5%" /* 25% from the top */,
        width: "100%" /* 100% width */,
        textAlign: "center" /* Centered text/links */,
        marginTop:
          "30px" /* 30px top margin to avoid conflict with the close button on smaller screens */,
        zIndex: 2
      },
      portraitStyle: {
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/jonathan_hero.jpg)`,
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
                        "Let’s start from the early beginning: tell me where you come from."
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Oh man. Okay, I was brought over as an infant--I was two years old. Both my parents are from the same hometown: San Juan De Los Lagos, Jalisco. My dad got into some financial problems and it wasn’t safe to be there anymore. He was the first one to come to the United States--Los Angeles to be exact. At that point, my parents had only been married for one year and my mom was like, 'We either gotta be together or call it off.' My dad decided to stick together, bringing my mom and myself over to Salinas, California where my dad had siblings. Like you [addressing the interviewer], we had to crash at other people’s places, couchsurfing until we got ourselves settled in. My parents tell me that the first place we lived in was some rundown apartments in a bad neighborhood in Salinas. My parents did not have the money to buy furniture or a bed. We would sleep on the carpet floor. One day, in the middle of the night, an altercation broke out and gunshots were fired. My mom immediately stood up and turned on the bedroom lights to find a bullet a few inches away from where I was laying on the floor. My parents decided to move out of those apartments and into a safer neighborhood at a higher cost."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Eventually my father got himself a job and paid back his debt; that’s when things started to be stabilized. I always thought it was normal, but, looking back now, it definitely was a struggle. My father had his own paint shop in Mexico with his own employees. So, when he came here, he had to relearn how to paint and weld again--he even welded my own bed! I remember sleeping in my parents’ closest--in my little bed--and I thought it was the coolest thing ever. However, looking back, I now think: 'Dang man, I slept in a closet as a kid. I didn’t have a proper room.'"
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"We would sleep on the carpet floor. One day, in the middle of the night, an altercation broke out and gunshots were fired. My mom immediately stood up and turned on the bedroom lights to find a bullet a few inches away from where I was laying on the floor.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How was it growing up? Any difficulties assimilating?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "No, I think it was like every other kid. I didn’t have any issues. I did have to learn English through ELD classes but, then again, here in Salinas there’s a lot of students on the same boat--even if they’re not immigrants or undocumented. We all have similar backgrounds. "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I remember we would travel back to Mexico on a tourist visa. It was nice because I could still go back. When we would reenter, I remember my mom telling me to say I’m going to Disneyland to the immigration officials at the airport or pretend to be asleep. That’s when I started to realize there’s something different here. I would see my cousins that were born here and they would go through a separate line, not having to lie about going to Disneyland. Finally, my visa expired and that was the end of my trips. My younger sister was born here and she gets to come and go whenever she wants… It’s just tough since we have a big family and we’re all pretty close. Luckily, my family in Mexico visits, but it’s getting tougher with my grandparents. My grandmother from my dad’s side had a pretty bad stroke last year. It became 50/50 and it was tough knowing she was in this state and not being able be by her side. My dad was debating whether to go and leave everything behind since there was a real possibility this could be the last time he would be able to see her. I think that’s definitely the toughest part--knowing your grandparents are getting older and not knowing when’s the last time you’ll see them. My grandparents were here just last week and it was so great to see them, but the goodbyes are always the worst. However, I’ve been fortunate enough to have my family be able to visit; same thing as a child, I was able to go and visit them for a while."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Let’s talk about school for a bit. Did your parents push you to do well in school?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Oh yeah, both my parents are huge advocates of education. I think part of it is because of our status--they always instilled in me the fact of education being something that no one is ever going to be able to take away from you. Once you learned something, it stays with you forever. They also emphasized it to pursue a better life: the cliche “American Dream.”"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Elementary through 8th grade, I went to a really small school between Salinas and Castroville--50 students total. My graduating class was 6 students, including myself. Because of that aspect, I feel like I didn’t struggle much since we were all super close. After that, a family friend told us to look into a private school, York School, off of Hwy 68 on the way to Monterey. I shadowed a student at York for a whole day and I immediately fell in love with the school. I was like “Dad, I have to come here. This school is awesome.” Unfortunately, tuition was really expensive. I remember I had $500 in my bank account and I offered it to my dad [laughs]. You could just see it in my dad’s eyes--he teared up a bit and said to me “We’re going to do everything we can to have you come here.” Fortunately, I received a scholarship; however, my parents still had to pay a significant amount out of pocket. My dad pushed through it by working 7 days a week--Saturday and Sunday, all day."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "I was accepted to York and like my elementary school it was a small school. But man, it was hard. My first semester I remember going home and crying when midterm grades were sent to my home because I had C’s. I cried to my parents and my parents cried with me [laughs]. But they just told me to keep working through it as best as I could. My grades did get better, but not to where I wanted them to be. They weren’t good enough to transfer to a 4-year university right away. I probably should’ve learned it sooner, but now I’m more appreciative of the sacrifices my parents made for me to receive such a great education. I should’ve done better yet I knew I had to step it up at community college."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"Unfortunately, tuition [at York School] was really expensive. I remember I had $500 in my bank account and I offered it to my dad [laughs]. You could just see it in my dad’s eyes--he teared up a bit and said to me “We’re going to do everything we can to have you come here.”\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Did you have an idea of what you wanted to do?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yeah, but I switched it up a couple of times. Growing up, I wanted to be a cartoonist--I just loved to draw--but it didn’t pan out. Then, I got into graphic design which I guess went hand in hand with my liking for drawing. I would do some photo editing for my aunt and I would get paid cash for it. Once I was in college, I started switching to the business aspect--a lot of my family have their own businesses--and I started diving into business marketing. It still has that design aspect like graphic design but for business purposes. I did 2 years at Monterey Peninsula College--got my A.A in Business Administration and played two years of soccer there too."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Although I knew I had to step it up in community college, I still messed up man [laughs]. I had to retake stats--I blame it on the teacher--and the second time I took it, I aced it 100%. I had a 3.4 GPA and in order to qualify for the All-American scholarship for athletes, you needed a 3.5. That was when it hit me: “Alright, it’s been two years in college. You said you were going to step it up and you haven’t. You let this opportunity blow away.”"
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I applied to mainly private schools because I wanted to stick with the small classroom sizes and I ended up transferring to Notre Dame de Namur up in the Bay Area mostly because they gave me the most scholarship money [laughs]. I ended up going two years there as well and I finally applied myself. I spent most of my time at the library instead of anywhere else. All these kids in university like to have fun on the weekends and I was in the library just studying. I tried to walk-on for the soccer team, but it didn’t work out. I decided to take a job to help my parents out; turns out working and studying at the same time is pretty rough at first, but I managed. I worked at OrderAhead--a food delivery startup. Then I worked as a soccer coach for the kids in the community and reffed some games on the weekend. My second semester I finally got a marketing internship for a flight center where they had a flight club for private plane owners as well as teaching flight lessons and aerial tours. It was awesome because I got to ride on a helicopter tour around the Bay Area."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "It all paid off in the end. I graduated second of my class with a 3.8 G.P.A. It was a great accomplishment and, of course, my parents were the proudest parents ever. After that, I came back to Salinas and I got an internship with Chispa, a company that builds housing for low-income families, doing design work. My last day, my supervisor told me the Service Learning Center at Cal State Monterey Bay was hiring a social media manager/marketing coordinator and she encouraged me to apply. I applied and went through the interviewing process, which included sending in samples of my design work for a Skype interview; something I had never done. That worked out well so they asked me to go in for an in-person interview. They gave me a prompt as a take home assignment, which stated, “We’re going to have an ice cream day--we want you to create a social media and print flyer.” I spent hours doing this because I wanted to really impress them during the in-person interview. During the interview, I found out one of the staff members there happened to be the mother of a classmate of mine from elementary school--such a small world."
                      }
                    </span>
                  </p>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "I got the job and I worked there from late August to early January. Towards the end of December, that same staff member told me she used to work for Assemblymember Caballero as her district director and told me the Assemblymember’s office would be hiring. The staff member really liked the way I worked and she highly encouraged me to apply for the job. It was tough--I had to think about it. A few months before I left the job at CSUMB, my DACA was about to expire and I had filed the paperwork in a timely fashion. It expired and my new one still hadn’t arrived so technically I was working illegally at CSUMB. I ran this through my director and I’m very grateful, thankful for what they did: they still had me working, but what they did with payroll was they loaded all my hours into the last week I was legally working. Things like this made it very tough for me to decide on leaving. However, at the same time, the job with the Assemblymember was a once in a lifetime opportunity and it was closer to home as well as a better pay. I ended up applying, interviewing, and I got the job."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Nice!"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yeah it was super nice; unfortunately, I didn’t leave CSUMB in the best of terms so that kinda sucked. The timing was just bad and part of it was my fault. I got the new job close to Christmas time and since we were going on break, my notice wasn’t two weeks--it was just two days. However, we worked it out: the Assemblywoman gave me two more weeks after my first agreed upon starting date and I worked one last week at CSUMB. It definitely was a learning experience."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’ve been with the Assemblywoman since January and I never thought I would be working in politics. It’s completely different, but I love it. There’s something different everyday, and I’m able to work with people like Congressman Panetta. It’s also exposed me to different parts of how the government works."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I had a 3.4 GPA and in order to qualify for the All-American scholarship for athletes, you needed a 3.5. That was when it hit me: “Alright, it’s been two years in college. You said you were going to step it up and you haven’t. You let this opportunity blow away.”\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Awesome. What exactly do you do for the Assemblywoman?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My title is field representative and I’m a jack of all trades."
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
                        "Let me look at my job description actually [laughs]. So I do constituent casework in the office--anything state-related we can assist with such as, problems with the DMV, disability, unemployment, etc. We get calls from all over the district and the district is pretty big--it covers from Morgan Hill to King City. We get calls about different issues and we point them in the right direction. We have contacts with the various state agencies that help us clear the issue at hand. Another thing I do is represent the Assemblymember at various different events throughout the district when she can’t be physically present since she’s up in the state capitol for half of the week. I go out and give certificates of recognition or give an update as to what the Assemblymember is doing--sometimes just make a presence, make notes, and report back to the member. When she is physically present at an event, she needs to be staffed at all times. You know, kind of like in the movies where the person staffing them is like, “Hey, that’s Greg and he has two kids.” [laughs]."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Okay, maybe not to that extent, but we do things like signing them in at the event, and making sure they look good and presentable."
                      }
                    </span>
                  </p>
                  
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You’ve taken a lot of turns in your journey, and that’s sort of my next question: assuming nothing crazy happens with us, where do you see yourself in the next few years?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "My original plan was to go get my M.B.A right after my undergrad. Unfortunately, I thought it was a lot easier to do. I didn’t realize you had to take all these tests: the G.R.E and the GMAT. That was my fault and as a first generation student, no one tells you about these things. I’ve been learning all these things on my own and now I’m the family counselor: my cousins come to me for help when applying to school."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was going to take a year off--work at CSUMB and study for my tests--and then apply for school. But then, I came into this new job. The Assemblymember is termed out after next year so my plan still is to study for my tests and apply. I really want to go to Stanford and do their M.B.A program--you just gotta shoot for the stars, y’know? I want to go back to business marketing and see where that leads. I’ve always been huge fan of sports and my ultimate dream is to work for a sports team for their marketing department."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I really want to go to Stanford and do their M.B.A program--you just gotta shoot for the stars, y’know? I want to go back to business marketing and see where that leads. I’ve always been huge fan of sports and my ultimate dream is to work for a sports team for their marketing department.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {"Let’s talk about current events to wrap it up. As you know on Sept 5th, the Trump administration decided to rescind DACA, thus, leaving it up to Congress to find a solution. What was your initial reaction?"}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Man, I felt like I couldn’t breathe--like an elephant was sitting on my chest. I went into work that day and it wasn’t until I spoke with my district director about the situation that I felt better. She comforted me and made me feel better. She told me of her strong belief in Congressman Jimmy Panetta as a strong representative as well as our other elected officials doing good work. Once I got home, speaking with my mom really helped. She took the news as if nothing had happened and that made me feel a whole lot better. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"My last question is a bit interesting because you’ve probably had a chance to do this yourself. As Congress works towards a solution for us, what would you tell them if you had the chance?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Oh yeah, Jimmy and I have definitely chatted [laughs]. I feel like my words resonate a lot with what you’ve heard already: We’re not criminals and this is our home--this is all we know. I got people calling our office all the time complaining about immigrants and asking them to get them out of here. They finally get to their issue, I help them out, and at the end they say, “Thank you so much, you’re great,” not knowing that I am an immigrant myself.  We pay our taxes and we give back to the community. DACA recipients don’t have criminal records; otherwise, we wouldn’t qualify. We are squeaky clean. We’re not looking for another DACA, we’re looking for a permanent solution."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I got people calling our office all the time complaining about immigrants and asking them to get them out of here. They finally get to their issue, I help them out, and at the end they say, “Thank you so much, you’re great,” not knowing that I am an immigrant myself.\""
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

export default Jonathan;

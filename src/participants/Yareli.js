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
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Billboard from "../img/billboard.jpg";
import { NavLink } from "react-router-dom";

class Yareli extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Yareli",
      occupation: "Software Engineer",
      timeSinceArrival: "18",
      country: "Mexico",
      image: "luis_portrait_2.jpg",
      interviewDate: "September 16, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/yareli_hero_1.jpg)`,
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
              <div className="">
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Tell me a little bit about your early beginnings."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was born in Mexico City, Mexico. I lived there for two and a half years, and then I moved to Guerrero where my father and mother are from. We lived there for three years and, during that time, my dad would come to the U.S. for seasonal work."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "He spent about 80% of the year in the U.S. and only about 20% in Mexico with us. It became frustrating for my mom to have the family separated--she would rarely see my dad. My dad then decided to bring everyone over here: my mom, Erica, who is my sister, and myself. I was six years old when we came over and we landed in Greenfield, which is where I live today."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Why Greenfield?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Well, Greenfield is where my dad was working at for seasonal work. At the time, he was harvesting grapes, tomatoes and lettuce, which is the crop prevalent of the area. My uncle resided here and so my dad’s side of the family would stay in Greenfield, most of the time. My dad also met this person named Irma; she is the person that helped us in the beginning. We lived at her house for about five months when we first got here. "
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "When I first came here, I didn't feel like going to school. However, because of my sister, I felt like I had to be strong since she didn't want to go to school either. I remember telling her that everything was going to be okay, despite the fact that, internally, I wanted to cry. I knew that everything was going be different, especially the language--I just didn’t know how different. I remember when I went to first grade, I was really nervous and scared. My sister kept crying because she didn't want to go, but she started to feel better as I gave her encouragement and support. We were also just two classrooms away, which made her feel safe. Although we didn't know anyone at the time, I felt like it was going to be okay because we were always together; we have always been super close. We had a lot of things to share since we were experiencing things at the same time, and that made us feel comfortable."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I knew I was undocumented, but I didn't really know what that meant until I got to high school. I knew that I was different from everyone else, but I just didn’t know the effects that it would have on me. I didn’t know what was going to happen once I graduated high school. I realized what undocumented meant when my friends were applying for jobs during the summer and I couldn’t do that. I kept asking my mom why I couldn’t do it. I had the grades, I was responsible, but because I didn’t have a social I wasn’t given this opportunity. I was also unable to apply for a driver’s license..."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"[Pauses]."}</span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I became frustrated because I saw the struggle my parents went through as well. My dad didn’t make a lot of money. He found a way to help my family a bit more by selling water and soft drinks for people that worked out in the fields. It wasn’t a lot. It’s not a huge business, but it’s something that has helped our family. My mom works in grapes: harvesting, planting and cleaning them. The only job I was able to get was a summer job working in the fields. It wasn’t the best job, but it gave me hope to work hard--that perhaps one day, all my struggles and hard work would pay off. I would work with my mom, sometimes with my dad. At that point in my life, I saw the struggles people face; some take multiple jobs to make a living, waking up at 3 or 4 am to begin their day. I realized I had to work harder for myself, for my parents. I wanted to help them. I realized education was something no one could take from you. At the end of the day, no one could take what you earned: your degree and your career. It will always stay with you. I was determined on going to college, doing well and establishing my career."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m not glad of my status in this country, but the struggles I went through made me the person I am today. When I first started going to college, I paid for my schooling. I didn’t get any help from the government; the only form of support I was able to get was a small scholarship for undocumented students since we were not eligible for many scholarships, even if you had the grades. Back then, undocumented students still had to pay out of state tuition."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"I realized education was something no one could take from you. At the end of the day, no one could take what you earned: your degree and your career. It will always stay with you."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "It’s good you and your sister stuck together for support. When you first came here, did you have trouble fitting in?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yeah, definitely. It wasn’t until middle school that I felt like I fitted in. When I was learning English, I felt insecure about pronouncing certain words. I was afraid people would criticize me or make fun of me for not knowing how to say something."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"[Pauses]."}</span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was bad. I felt really, really bad. In the beginning, I was scared to share my story because I didn’t know how people were going to take it. You sometimes have those friends you feel they’re not going to take it okay or won’t be your friends anymore? That’s why I was hesitant to share. But I learned that maybe those aren’t the people that you should surround yourself with anyways. In high school, I made friends with two classmates that had the same status as I did. That made me more comfortable to share my story with more people."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In middle school, our family went back to Mexico for about a year with the mindset of not coming back to the U.S. again. We missed our country, and we wanted to be close to our family since we were the only ones here. No cousins, no aunts, no uncles. It was just us. But when we went back, it was difficult to live there; we were so use to living in California. It was scary to realize I wouldn’t fit in Mexico again. I felt undocumented in my own country. My dad decided to bring us back. Ultimately, we saw we had a better life here, despite having to work multiple jobs or 12-hour shifts."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Despite how my sister and I felt in Mexico, we didn’t want to come back to the U.S. We knew what we were coming back to in the States: a second place where we weren’t fully comfortable and not able to be ourselves. At that point, I was confused. I didn’t know what home was. "
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '"When I was learning English, I felt insecure about pronouncing certain words. I was afraid people would criticize me or make fun of me for not knowing how to say something."'
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Has that changed now? Do you have more family here now?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes, one of my aunts and her family came to live here about eight years ago. So we have them now. They’re all from my dad’s side of the family. As for my mom’s side, no one is here. It’s just us."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Going back to identity. Your family decided to come back after leaving. Now, would you consider yourself American? Would you consider this your home?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "That question is really hard for me. I don’t feel American, yet I don’t feel Mexican either. I feel that I’m half--split in two. I feel that I’ve been raised here."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">{"[Pauses]."}</span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "But I feel like I still have something in Mexico. I feel that if I say I’m American, I’m denying where I come from. Personally, I can’t say I’m American because I was born over there. It’s not the perfect place to live, but it’s still where I’m from. I haven’t been there for about 12 years, yet Mexico is where my roots are. However, I feel like I won’t be able to fit in Mexico anymore as well. If I were to go back, it would be like going to an unknown place. Something unknown."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"You would have to start over."}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {"Yes, definitely."}
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "How did you feel when you found out that you couldn't get a license or work?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I felt like I was trying to grow, but someone was pulling me back simultaneously. Many of the classmates that I knew had legal status, but simply did not want to get a job. This would frustrate me because I would see people around me taking this opportunity for granted while I could not pursue it. It would just be difficult to watch how some of my classmates would not realize that they had so many options and opportunities to their disposal; yet, they would let them go to waste. For example, I remember our counselors telling them about the resources that they had available, but most wouldn’t take advantage of them. I remember seeing the list of scholarships to which students could apply and, out of the hundreds that were listed, there was only a handful to which I could apply. It was just frustrating to see that even though I wanted to go to college, I was being held back because I couldn’t afford it nor did I have the help that everyone else did. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "As your senior year approached, you set your sights on going to a university. What happened there?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I didn’t know how much tuition was going to be, but I remember seeing my friends applying to schools for free and that was something I wanted to do as well. However, due to my status, I was not eligible. For every application, I would pay fifty dollars. For my family, it wasn’t easy to just hand that much over, but we knew it was an important decision for my future. I applied to four schools: UC Santa Cruz, Cal State Fresno, Cal State Sacramento and Cal Poly San Luis Obispo; however, later on, I found out that I would have to pay out of state tuition. I knew that my parents couldn’t afford that cost and I wouldn’t get financial aid either. Even if I would’ve worked full time to try to pay for tuition, I would still have to figure out how to pay for books, transportation, food, materials, etc. I felt like I had no chance at going to college no matter how much I wanted to attend. I applied to scholarships, but, at the end of the day, I decided to just go to Hartnell Community College. Although it was less expensive at Hartnell, the cost was still a lot for my family to manage. My family didn’t just have to worry about me but also my sister, who was about to be done with high school too."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Once I was in college, I wasn’t too sure what I wanted to do. At first, I thought about doing something with business, but then one of my professors saw that I liked coding. At the time, I was taking a programming management course so my teacher encouraged me to take a computer science course. I wasn't sure about it but since he was teaching it I decided to give it a try. Once I started to learn more about computer science I knew I had found something I could be really passionate about. As I made that discovery about myself, I also hit a wall because all of the universities that I wanted to go to were really expensive. Luckily, I got accepted into CS-in-3: a three-year computer science program with a full-ride scholarship. It was just the perfect opportunity. I don't think I would’ve been able to do it without it."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Did you do any internships while you were in the program?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Yes, I did. I had three internships. The first internship I did was with the Research Scholar Institute of Hartnell during the summer of 2015. After that, I did a year long internship with Heavy Connect, a ag-tech startup, from 2015 to 2016. Finally, during the summer of 2016, I had an internship with Salesforce."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"How was your summer internship with Salesforce?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "It was really good, although it was a different experience from what I was used to. I got the chance to truly experience what Software Engineering is all about, which helped me gain some reassurance about working in Computer Science. However, I didn’t feel like Salesforce was the place I wanted to work at. Since my family is so close to each other, I tried to find a job where I felt connected to everyone else. Salesforce is such a big company and I just felt insignificant to the company--like my work wasn’t valued, and as if it was just one more piece of code. I didn't feel like I was genuinely contributing or making a significant impact in the company. I am genuinely thankful to Salesforce for giving me the opportunity to learn from their engineers. I have nothing but respect for my coworkers for what they do and for being such an amazing group of people. My mentor there made me feel so welcomed: on the first day she hugged me and during my internship, she was really supportive. Towards the end of my internship, I just didn't feel like I was excited to go to work in the morning. I feel like that's because I didn’t fit in with that type of company. It helped me realize that a small business would probably be a better fit; I knew my opinion and work would matter more."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Not so long ago, you graduated from Cal State Monterey Bay. Congrats!  What are you doing now?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m working with a local marketing company called TMD Creative. We advertise and market mainly for agricultural companies like Dole and Taylor Farms, but also some schools. We do ads, videos and other multimedia content. At TMD Creative, I am a web developer so I’m in charge of designing and implementing the websites for our clients. I enjoy working here because it's a smaller company and it almost feels like a family. Nick, our CEO, is very welcoming and he always gives a positive vibe to the company. I definitely feel like my voice is heard and that my work is making a big impact in the company. Without a doubt, I no longer feel like work is a drag. In fact, I don't even think of it as work anymore cause I enjoy it so much."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "You’ve gone through college, and have found a place you enjoy working at, let me get your take on current events. As you know, on September 5th, the Trump administration announced the removal of DACA and punted it over to Congress to come up with a solution. When your first heard, what was your initial reaction?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I was very sad that something like this could happen. I feel like if [President Trump] truly knew the people that he was affecting then he would realize his mistake. However, I hope that Congress steps up and makes a positive change on the lives of all of us affected by the removal of DACA."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                        "Where do you see yourself in the next couple of years assuming nothing happens?"
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I think that later on I would want to move to Silicon Valley and end up at a medium size company where I can grow my career. However, in the long run, I would like to come back to the Greenfield area because it’s where I grew up and my family is there."
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
                        "I’m a hardworking Latina with a Software Engineering degree who only wants to give back to this amazing country. This country has given me not one, but multiple opportunities. I want to help and encourage anyone in any field, especially computer science, to make this nation represent what others outside of it believe it to still be, which is “the land of opportunity.” Don’t remove me from what I truly know as home."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          '" I want to help and encourage anyone in any field, especially computer science, to make this nation represent what others outside of it believe it to still be, which is “the land of opportunity.”"'
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

export default Yareli;

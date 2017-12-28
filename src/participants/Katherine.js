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

class Xochitl extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
      name: "Katherine",
      occupation: "Socielogy Major",
      timeSinceArrival: "13",
      country: "El Salvador",
      image: "xochitl_hero.jpg",
      interviewDate: "November 17, 2017",
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
        backgroundImage: `url(https://dwistynbcri9g.cloudfront.net/katherine_hero.jpg)`,
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
                     {"Tell me a bit about your early years and where you come from."}
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m from El Salvador and I grew up in a very dangerous community: Ciudad Futura. My dad owned his own bus transportation shop and we lived in a house right in front of the main street where all the gangs would pass by our house--they would stop by and we had to try to act normal.  My parents had a small business selling car wash products and the gangs would tell us, 'I want this and that and some of this.' We had no choice but to give it to them; otherwise, our family would have been in danger. It got to the point where my dad was threatened to make a few trips for them using his buses--that’s when my dad started to see our family could not live in El Salvador any longer. I was 8 when my dad brought me to the United States to live with my mom’s sister. Initially, we were all able to get visas except for my little sister—we used the visas to travel back and forth to the U.S before my dad decided to make the permanent move."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I’m really thankful for my aunt and uncle taking me in, but it’s not the same as having your mom and dad with you—it’s really not the same. At the time, there wasn’t video chat available and I couldn’t see them through a screen of a computer. It was one phone call a week because they would get charged over there and we would get charged over here. There were a lot of accomplishments they didn’t get to see—my dad wasn’t there to take me on my first day of school. I remember my first day of school in third grade and walking into the classroom, I started asking in Spanish, 'Donde pongo mi bolson?' [Where do I put my backpack?]--In El Salvador, we call backpacks bolsones. The kids just laughed at me asking amongst themselves, 'What is she talking about?' It was the first day of school and I was already feeling rejected in this new place."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I kept asking my aunt and uncle, 'When’s dad coming back? It’s been a week—it’s been two weeks.'  He finally broke it to me over the phone, 'Things are getting hard here. I’m not going to be able to go back right now but your mom and I will be there soon.' Like I was saying, they weren’t there for a lot of accomplishments. I’ve been singing since I was 8 and the first time I sang was at church. The one person I wanted to be there was my dad but he wasn’t. Although the time apart wasn’t as long as other people, the year apart from my family affected me. Later on in life, I would ask him why I was left by myself in the U.S. I wasn’t mad but frustrated as to why he took this decision."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "After a year in the U.S., we got into the process of bringing my sister here. She went through a whole different experience than I did. She didn’t have a visa and we lost her in Michigan where she went into foster care for 6 months. By the time we found her, the only way we were going to be able to get her back was for her to recognize our aunt and our uncle. She had only seen them once in her life and she had to recognize them by name. They were going to travel out to Michigan and I told them 'I want to go with you. She’s going to recognize me.' But they said, 'You can’t go with us. You can’t travel.' Looking back, that was the first time I saw the effect of being undocumented. I wasn’t able to travel and reunite with my sister and be there for her. I wanted to be there when she came and for me, it was a proof of my love to her. It hit me really bad that day—it almost felt like I was separated from her forever. I understood she was lost for a while; I understood I was here by myself without my mom or dad. It’s the first time I felt different and not the same as everyone else. That same year my cousins traveled to Hawaii and I couldn’t go. I wanted to visit my grandma in El Salvador and I couldn’t. All those things got to me at that age."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"My parents had a small business selling car wash products and the gangs would tell us, 'I want this and that and some of this.' We had no choice but to give it to them; otherwise, our family would have been in danger.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                   <p>
                    <span className="dacamentor-response">
                      {
                        "After my sister came, everything went well. My mom came afterwards and my dad was the last one to come to the States. I ended up not seeing him for a year and half from when he dropped me off. We had one room for the four of us where we slept on the floor together, bien acomodaditos [very cozily]. It wasn’t ideal, but it was a room and we were all together. Shortly after my parents came, my sister started having visits from child services. To the social workers, my parents were still in El Salvador, and my uncle and aunt were the legal guardian of my sister. The worker would come twice a month on Saturday mornings--we would have to pack all our stuff and make it seem like the room was my sister’s room since there were certain guidelines we had to follow from child services. My dad would always tell me, 'Vamos ir a desayunar a McDonald’s' [Let’s go have breakfast at McDonald’s]. I started noticing we were doing this so often [laughs]. One day when we were coming back to the house and he saw the social worker was still there, he drove past saying we were going to the park instead. I asked him why we couldn’t go back home and he told me, 'You sister has to go through a certain process. The worker still thinks we’re in El Salvador.' In real life, my parents were here. On paper--to the social worker and for my sister’s safety--we had to hide. We would pray and talk to her to say we’re not living here if she was asked about our whereabouts. We went through that together for about 3-4 years."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Wow. What would’ve happened if child services found out your parents were actually living here?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Oh man. My sister would’ve been taken away and gone back to foster care. At the time, they were blaming my parents for her getting lost in Michigan. They told us, 'If we find out they’re living here, we’re going to arrest them.' The closest we got to getting found out was when my sister told the social worker she liked living here because 'mi mama esta aqui con migo.' [My mom is here with me.] Quickly, my aunt covered by telling the worker how my sister sometimes calls my aunt mommy. "
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"What other childhood experiences can you tell me about?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "During elementary school when I first got here, I didn’t know any English and I was placed in English Second Language (ESL) classes. Every day after school, my principal would call me to her office. She knew my case and she would teach me English during these after school sessions. Looking back, it showed how dedicated she was in bringing me up to speed when there were hundreds of kids at my school. She taught me how to write and how to speak properly for two hours everyday; I can say I was able to learn English because of her--I even received an award for being the fastest to learn the language. That was one of the best accomplishments when I was little, and that’s one of the things I like to talk about in the speeches I give where I share my story. I feel like if we’re capable of doing that when we’re young, what can we do now?"
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I even received an award for being the fastest to learn the language. That was one of the best accomplishments when I was little, and that’s one of the things I like to talk about in the speeches I give where I share my story. I feel like if we’re capable of doing that when we’re young, what can we do now?\""
                        }
                      </span>
                    </p>
                  </blockquote>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I always felt the need to succeed in every little thing. It would make my parents proud that I was doing well. Elementary and middle school went great academically and I had fun experiences at both places. Since my sister’s child services case, I had put aside my realization of being undocumented and it didn’t hit me again until high school during my senior year. It was the year everyone started to apply to colleges--I remember being told that going to community college meant I would stay there forever so I was set on going to a four-year university straight out of high school. One day, our counselors took us to a workshop to apply for universities. I opened the application and the first question was 'Are you a U.S citizen?' I thought, 'Yes, of course I am!' My counselor came over to help me with a question I had, and she asked me, 'Oh, um. Are you legal here?' Instantly, everything came back. I started remembering my sister’s story; I started remembering how I was by myself initially. My counselor brought my files out and she told me how I was filling my application wrong, and how I needed to apply using other documents. My counselor didn’t know how to help someone with my case and I was left in the dark for a few months. No one in my family knew how I could apply to college. I talked to my dad about it and I asked him, 'What’s the process of applying for school in El Salvador?' and he tells me, 'You just go. You go and you chose a career.' I started breaking down a bit and I said, 'Let’s go back. I can’t go to school here. I can’t make a life here. My sister is in the same place. She can’t do anything. Please, let’s go back. You can go back to your job. Mom can go back. I can go to school.' I remember him mentioning in the most calm fashion--that man, he is always so calm--'everybody is here because God has a purpose'."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "In my heart, I thought I wasn’t going to be able to do it. I went to sleep so mad that night and I told myself, 'My dad doesn’t understand because he didn’t come to school here. He didn’t go through what I had to go through.' My counselors went to a special training to help me fill out my application and then, during that time, they came out with DACA and my counselors helped me through that as well. I ended up not applying to a four-year, and I decided on community college instead because I’m undocumented. Throughout my senior year, I felt frustration and anger. My cousins, whom we lived with at the time, they didn’t go to school because they didn’t want to. I became so angry at them to the point where I told them, 'You have everything at your hands. You could have gone. Your parents had money at the time. Why didn’t you?' I was trying to make them realize how hard it is for me. I became angry with my parents--mostly with my dad. I would think of when I was left stateside for a year and how we were promised a better life. I started becoming an angry person at the world and I didn’t want to talk to anyone. I started telling people I was a U.S citizen rather than tell my story just so I could fit in. It’s hard being the child of an immigrant because you want to honor your parents; you want to honor their culture; but, there comes a time when all you want to do is fit in and be like everybody else. You wanna apply to the same colleges and the same applications. You love your family and your roots so much but, at the same time, you want to live a normal life and you can’t."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "It’s hard being the child of an immigrant because you want to honor your parents; you want to honor their culture; but, there comes a time when all you want to do is fit in and be like everybody else. You wanna apply to the same colleges and the same applications."
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Where did you want to go to school?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I wanted to go to UCLA because LA was the 'thing'--I’m actually applying to go there now. I would see L.A. and think, 'Yes! Hannah Montana!' [laughs]. It just looked like a cool city, you know? Seeing Hollywood and the cool places made me want to go there without visiting the campus at all. Five years ago, I found out we had family in the area and we started traveling over there. That cemented my love for L.A even more."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          'What did you want to study?'
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "t the time, I wanted to be an ultrasound technician. I wanted to study something in the medical field. I did some internships here at the community college but the wait list for one of the programs at a nearby community college is five years. That made me change my major to social work where my biggest inspiration was my little sister. I want to focus mainly on foster care and adoptions because it’s hard for those kids. Sometimes my sister will get flashbacks of when she got lost. A few months ago, we went to Wendy’s and she was eating some chicken nuggets when all of a sudden she told me, 'Oh, I remember when I had these for the first time. It was in Michigan.' I looked at her in surprise because we don’t talk about it--she doesn’t like to bring it up. She continued explaining, 'Yeah, every Sunday after Mass, we would go to Wendy’s to eat chicken nuggets.' I sat there in silence--I didn’t know what to do or say, I responded with, 'That’s cool that you remember those days,' which was met with a quiet, 'Yeah.' My sister’s experience in foster care is definitely my motivation to pursue a career in social work."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          'Let’s talk about the future. Assuming nothing crazy happens with DACA, where do you see yourself in the next few years?'
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Thinking positively like my father! In the next few years--I really have this nice image of myself in a really nice social worker’s suit with my hair tied back where I’m visiting homes and helping kids. The social worker that visited my sister--that’s the image I have for myself: a well-dressed person going around helping children. I really, really want to focus on foster care and adoptions especially with kids coming to the country without their parents. I want to show the kids that not all social workers are bad social workers, and I want to be that one social worker which changes their perception of social services."
                      }
                    </span>
                  </p>
                  <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                          "\"I really have this nice image of myself in a really nice social worker’s suit with my hair tied back where I’m visiting homes and helping kids. The social worker that visited my sister--that’s the image I have for myself: a well-dressed person going around helping children.\""
                        }
                      </span>
                    </p>
                  </blockquote>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>{"Continuing to talk about the future, would you like to become a U.S. citizen in the future?"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "Oh definitely. I’ve been realizing there’s pressure for me to do that. If I’m able to do it one day, I feel like I would make my family in El Salvador proud. If I become a U.S. citizen, it’ll show them we came here to do something and not just to live a glorious life. They don’t know the reality of how hard it is and I feel like that’s the reason my parents really celebrate every little thing we accomplish because every win matters. Como dice mi papa [Like my dad says], I’m going to become a U.S. citizen [laughs]."
                      }
                    </span>
                  </p>
                </div>
                <div className="dacamentor-interview">
                  <p>
                    <b>
                      {
                          'Let me get your take on current events. On Sept. 5th, the Trump administration announced the removal of DACA and asked Congress to come up with a legislative solution in 6 months. When you first heard, what was your initial reaction?'
                      }
                    </b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I don’t think I’ll ever erase that day from my mind. It’ll always be there. I had decided to ignore the fact it was going to happen. We had been hearing the rumours leading up to the announcement and I tried to be positive and think it wasn’t going to happen. I remember I woke up that day and I had messages from everyone--family and friends. I tend to put my phone in airplane mode so when I took it off, it was one notification after the other. I googled 'DACA Trump' and the first thing that popped up was the announcement. I ran downstairs and my mom was watering the plants. I was so in shock--I didn’t have to say a word; she knew. She looked at me and she goes, 'Don’t be sad.' I started crying and bawling. I had class that morning and I told my mom I didn’t want to go. Her words to me were, 'You barely found out this happened and you’re already giving up? Not going to class is already giving up.' I went upstairs and the first thing I think about is my best friend Steph. I didn’t respond to anyone else, but I messaged her with just, 'Dude.' She called me and we were on the phone bawling for about an hour. I really just wanted to hide and forget about everything. I remember telling Steph, 'It’s over. That’s it. We’re done. What are we going to do? What are we doing with our lives?' What we felt that day is a feeling that no else will understand unless you’re a DACA recipient--no one will get it unless you lived through it."
                      }
                    </span>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                      {
                        "I ended up going to class and as soon as the class started, my teacher started talking about the announcement. I became mad and I just wanted to walk of the classroom because I didn’t want to hear it. I wanted to grieve on my own and I didn’t want to hear people talking about it. I kept getting calls from my aunts and uncles, but I didn’t want to pick up. I didn’t want to hear the voicemails--some of them I might have even deleted. The fear of repercussions emerged. Steph and I have talked about different scenarios that would place us in difficult situations; for example, driving. If I were to be pulled over without DACA, what would happen? I freeze up thinking about these things. We really have to take courage and think everything will be okay. Steph and I saw we needed to make our voices heard and we started to become involved in the community and in the club for undocumented students here at school."
                      }
                    </span>
                  </p>
                  </div>
                  <div className="dacamentor-interview">
                    <p>
                      <b>
                        {
                            'As Congress works on a long term solution for DACA--if you had the chance to say something to them, what would you tell them?'
                        }
                      </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {
                          "Look at our accomplishments; look at all the things we’ve done. I’m very grateful for all the things this country has done for me, but I think it’s not their turn to see what I have done for them--to see everything that I’ve accomplished: the awards, the high G.P.A’s, and all the amazing people that are DACA recipients. The process you have to go through and the strictness to obtain DACA is so hard. If you have just a little detail on your record--that’s it, you’re out. If you don’t meet the age requirements--that’s it, you’re out. I really want to let them know and I want them to see who we are. I want them to listen to these stories and realize who we are because we want to make this country a better place. I’m really going to take the power to say that if we weren’t here, it wouldn’t be the same. We’re making a difference. We’re the Faces Of DACA--we’re the faces of the United States. We’re what’s showing them what hard work is and what it means to work twice as much just to do the same things as everyone else. We earn everything and nothing is given. We buy the ‘93 Hondas with the broken parts we learn to upkeep and fix ourselves--that’s what hard work is because that’s all we can afford. We’re some of America’s best and I want to know why they are taking this away from us? Why don’t you want us here? Don’t you want people with degrees? Don’t you want people with cool internships and cool jobs? Why don’t you want me here? Our parents are the original DREAMers and we’re here trying to accomplish their dreams--please be able to see that for yourselves."
                        }
                      </span>
                    </p>
                    <blockquote>
                    <p className="dacamentor-quote">
                      <span>
                        {
                            'I want them to listen to these stories and realize who we are because we want to make this country a better place. I’m really going to take the power to say that if we weren’t here, it wouldn’t be the same. We’re making a difference. We’re the Faces Of DACA--we’re the faces of the United States. We earn everything and nothing is given. We buy the ‘93 Hondas with the broken parts we learn to upkeep and fix ourselves--that’s what hard work is because that’s all we can afford. Our parents are the original DREAMers and we’re here trying to accomplish their dreams--please be able to see that for yourselves.'
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

export default Xochitl;

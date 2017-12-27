import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Pie } from "react-chartjs-2";
import ReactGA from "react-ga";
import "./App.css";
import "./statistics.css";

import ScrollLock from "react-scrolllock";
import MdClose from "react-icons/lib/md/close";
import MdMenu from "react-icons/lib/md/menu";
import Arrow from "react-icons/lib/fa/angle-down";
import Sticky from "react-stickynode";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";
import Billboard from "./img/billboard.jpg";
import { NavLink } from "react-router-dom";

const data = {
  labels: ["Women (58.3%)", "Men (41.7%)"],
  datasets: [
    {
      data: [14, 11],
      backgroundColor: ["#e67e00", "#F2BF7F"],
      hoverBackgroundColor: ["#e67e00", "#F2BF7F"]
    }
  ]
};

const laborData = {
  labels: [
    "College Graduates (41.7%)",
    "Students (50%)",
    "Working with High School / GED Diploma (8.3%)"
  ],
  datasets: [
    {
      data: [10, 12, 2],
      backgroundColor: ["#e67e00", "#F2BF7F", "#FAE5CC"],
      hoverBackgroundColor: ["#e67e00", "#F2BF7F", "#FAE5CC"]
    }
  ]
};

const initialAffect = {
  labels: [
    "Negative Initial Affect (83.3%)",
    "Positive Initial Affect (16.7%)"
  ],
  datasets: [
    {
      data: [20, 4],
      backgroundColor: ["#e67e00", "#F2BF7F"],
      hoverBackgroundColor: ["#e67e00", "#F2BF7F"]
    }
  ]
};

const endingAffect = {
  labels: [
    "Positive Expressing Perseverance (62.5%)",
    "Negative with Depressive Symptoms (20.8%)",
    "Negative Affect Motivation (16.7%)"
  ],
  datasets: [
    {
      data: [15, 5, 4],
      backgroundColor: ["#e67e00", "#F2BF7F", "#FAE5CC"],
      hoverBackgroundColor: ["#e67e00", "#F2BF7F", "#FAE5CC"]
    }
  ]
};

const appeal = {
  labels: [
    "Emotion Drive (54.7%)",
    "Work Ethic Drive (29.2%)",
    "Patriotism (16.2%)"
  ],
  datasets: [
    {
      data: [13, 7, 4],
      backgroundColor: ["#e67e00", "#F2BF7F", "#FAE5CC"],
      hoverBackgroundColor: ["#e67e00", "#F2BF7F", "#FAE5CC"]
    }
  ]
};

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-111454076-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      show: false,
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
        backgroundImage:
          "url(https://dwistynbcri9g.cloudfront.net/statistics_cover.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "none",
        height: "450px",
        width: "90%",
        margin: "0 auto",
        position: "relative",
        filter: "brightness(40%) contrast(70%)"
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
              <div className="navigation">
                <ul>
                  <li>
                    <NavLink to="/">Stories</NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/statistics" activeClassName="links">
                      Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/how-to-help" activeClassName="links">
                      How To Help
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/about" activeClassName="links">
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
              <div className="header">
                <div className="" />
                <div className="portrait-title">
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
                  <p>24* out of 800,000</p>
                </div>
              </div>
              <div className="">
                <div className="dacamentor-interview stats">
                  <p>
                    <b>{"Introduction"}</b>
                  </p>
                  <p>
                    <span className="dacamentor-response">
                    {
                      "The Trump administration has left it to Congress to develop new immigration legislation that offers parallel protections to those provided under DACA. Congress has until March 5th, 2018 to pass this new legislation."
                    }
                    </span>
                  </p>
                  
                  <p>
                    <span className="dacamentor-response">
                    {
                      "The purpose of this Empirical Research is to provide Congress qualitative data utilizing community-based participatory methods through awareness of intersectionality to articulate an understanding of these diverse experiences of DACA recipients. There is little known about this population."
                    }
                    </span>
                  </p>
                  
                  <p>
                    <span className="dacamentor-response">
                    {
                      "We began our study in the month of October 2017, and we currently hold twenty-four participants. We acknowledge this is a small sample size; however, this isn't the end of our research--it’s only the beginning."
                    }
                    </span>
                  </p>
                </div>
              </div>
              <div className="dacamentor-interview stats">
                <p>
                  <b>{"Methodology"}</b>
                </p>
                <p>
                  <span className="dacamentor-response">
                  {
                    "Employing structured style interviews, we interviewed a total of twenty-four eligible DACA Latinos/as. These interviewees are between the ages of 18-35 years old, and were mostly recruited through social media outlets. Each interviewee was required to inform themselves about our project through our call for participants published in "
                  }
                  </span>
                  <a
                    className="external-link"
                    href="https://medium.com/@dcarrotwo/daca-stories-call-for-participants-3fd19367b2ce"
                    target="_blank"
                  >
                    <span className="dacamentor-response"><i>Medium.</i>{" "}</span>
                  </a>
                  <span className="dacamentor-response">
                  {
                    "Our call consisted of what DACA is, the state of DACA, our goal for the project, and the potential harms of publicly sharing their personal stories. These twenty-four participants were informed, aware, and now stand with us in hopes of sharing their stories to help Congress reach a positive solution for the greater DACA community."
                  }
                  </span>
                </p>
              </div>
              <div className="dacamentor-interview stats">
                <p>
                  <b>{"Gender of participants and occupations"}</b>
                </p>
              </div>
              <div className="research-container">
                <div className="research-graph">
                  <Pie data={data} height={225} options={{}} />
                </div>
                <div className="research-description">
                  {/*Add italics*/}
                  <p>
                    {
                      "Out of the twenty-four Latino/as interviewed, we have fourteen "
                    }
                    <i>Women</i>
                    {" using the pronouns she, her, and hers; ten "}
                    <i>Men</i>
                    {" employing the pronouns him, his, and he."}
                  </p>
                </div>
              </div>
              <div className="research-container">
                <div className="research-graph">
                  <Pie data={laborData} height={250} options={{}} />
                </div>
                <div className="research-description">
                  <p>
                    {
                      "We have ten "
                    }
                    <i>graduates</i>
                    {
                      " who have successfully completed a course of study or training, and have been awarded an academic degree of an Associate's of Art/Science and/or a Bachelor's of Art/Science. All ten are now working in their studied fields."
                    }
                  </p>
                  <p>
                    {
                      "There are twelve currently enrolled "
                    }
                    <i>students</i>
                    {
                      " who attend various educational institutions such as community college or a four-year university. Two participants are "
                    }
                    <i>employed full-time,</i>
                    {
                      " either holds High School Diplomas or a General Equivalency Diploma."
                    }
                  </p>
                </div>
              </div>

              <div className="dacamentor-interview stats">
                <p>
                  <b>{"Affects & Appeal"}</b>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "To start our research, we decided to focus on two specific interview questions:"
                    }
                  </span>
                </p>
                <ol className="research-questions">
                  <li>
                    <p>
                      {
                        "On September 5th, the administration rescinded DACA and has left it to Congress to come up with a solution. When you first heard, what was your initial reaction?"
                      }
                    </p>
                  </li>
                  <li>
                    <p>
                      {
                        "As Congress continues to work towards a solution, what would you tell them if you had the opportunity to say so?"
                      }
                    </p>
                  </li>
                </ol>
              </div>

              <div className="dacamentor-interview stats">
                <p>
                  <b>{"Initial and Ending Affects"}</b>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "Question 1 states, “On September 5th, the administration rescinded DACA and has left it to Congress to come up with a solution. When you first heard, what was your initial reaction?” From here it was broken down into two parts:"
                    }
                  </span>
                </p>
                <ol className="research-questions">
                  <li>
                    <p>
                      {
                        "Initial affect of a participant's response."
                      }
                    </p>
                  </li>
                  <li>
                    <p>
                      {
                        "Ending affect of their response."
                      }
                    </p>
                  </li>
                </ol>
              </div>
              <div className="research-container">
                <div className="research-graph">
                  <Pie data={initialAffect} height={225} options={{}} />
                </div>
                <div className="research-description">
                  <p>
                    {
                      "The initial affect focused on whether the response was positive or negative. "
                    }
                    <i>Positive Initial Affect</i>
                    {
                      " meaning the participant subjectively experiences positive emotions such as interest, alertness and/or optimism whereas "
                    }
                    <i>Negative Initial Affect</i>
                    {
                      " means the participant subjectively experienced variety of negative emotions, including anger, contempt, disgust, guilt, fear, and nervousness."
                    }
                  </p>
                </div>
              </div>
              <div className="research-container">
                <div className="research-graph">
                  <Pie data={endingAffect} height={275} options={{}} />
                </div>
                <div className="research-description">
                  <p>
                    {
                      "The ending affect consisted of whether the response was either "
                    }
                    <i>Negative with Depressive Symptoms, Negative with Affect Motivation, or Positive Expressing Perseverance. Negative Depressive Symptoms </i>
                    {
                      "expressed individuals’ negative feelings and thoughts throughout his/her daily routines as they experience hopelessness and consistent questioning of safety and future. "
                    }
                    <i>Negative Affected Motivation</i>
                    {
                      " is when participants expressed behavior driven by anticipation or fear of an undesirable outcome such as Congress’s pending decision on a new immigration bill. Finally, "
                    }
                    <i>Positive Expressed Perseverance</i>
                    {
                      " is when participants respond by keeping resilience, faith and optimism for their futures despite the numerous obstacles against them."
                    }
                  </p>
                </div>
              </div>
              <div className="dacamentor-interview stats">
                <p>
                  <b>{"Appeal"}</b>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "Question 2 states, “As Congress continues to work towards a solution, what would you tell them if you had the opportunity to say so?” We decided to examine the way the participant established his/her response to this specific question, also known as their Appeal. Appeal was broken down into three common themes throughout all the interviews."
                    }
                  </span>
                </p>
                <ol className="research-questions">
                  <li>
                    <p>{"Appeal to emotion."}</p>
                  </li>
                  <li>
                    <p>{"Appeal to work ethic."}</p>
                  </li>
                  <li>
                    <p>{"Appeal to patriotism."}</p>
                  </li>
                </ol>
              </div>
              <div className="research-container">
                <div className="research-graph">
                  <Pie data={appeal} height={250} options={{}} />
                </div>
                <div className="research-description">
                  <ol className="research-questions">
                    <li>
                      <p>
                        <i>Appeal to emotion</i>
                        {
                          " is how participants’ respond with their own emotional sentiments in order to gain recognition for their cause. Thus, mentioning their family, friends, and other emotional ties relevant to their situation as well as addressing the negative consequences of an action on their life."
                        }
                      </p>
                    </li>
                    <li>
                      <p>
                        <i>Appeal to work ethic</i>
                        {
                          " expressed the theme of hard work, perseverance, and how the participant has contributed to society and the economy with a clean record."
                        }
                      </p>
                    </li>
                    <li>
                      <p>
                        <i>Appeal to patriotism</i>
                        {
                          " is the expression of one’s sense of loyalty to the United States. It also illustrates the participants’ assimilation and active participation within the mainstream culture."
                        }
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="dacamentor-interview stats">
                <p>
                  <b>{"Previous related research"}</b>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "Siemons, Raymond-Flesh, Auerswald, and Brindis (2016) have provided very recent and salient research findings that humanize this issue, bringing awareness to the potential mental health crisis that is coming to the surface as we speak. Mental health and well-being emerged overwhelmingly as the two primary health concerns of their participants. It is more than likely that the general anxiety over DACA has increased since this study was conducted, especially now that it is in such a precarious state. DACA does provide many benefits for its recipients, however, this does not counteract the anxiety and stress felt by those who received assistance from the DACA program. (Siemons, Raymond-Flesch, Auerswald, & Brindis, 2016)."
                    }
                  </span>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "There are commonalities of conflicted senses of identity, and consequential stress and anxiety amongst DACA recipients. This finding can be further illustrated through Mallet, Calvo, and Waters (2017), who delve into what it is like for Latino immigrants transitioning from somewhat protected status as minors to adults with far less resources accessible to them. Along with the usual perils of adulthood comes the overwhelming uncertainty for undocumented immigrants of whether they might be able to survive without access to social services, financial aid for college, lack of access to jobs that provide a living wage, adequate housing, and of course the obvious and daunting fear of deportation (Mallet, Calvo & Waters 2017)."
                    }
                  </span>
                </p>
                <p>
                  <span className="dacamentor-response">
                    {
                      "In another study, Patler & Laster Pirtle (2017) elaborate on the tumultuous emotional experiences of young adult immigrants of Latino descent, who not only have their own struggles and fears, but also carry the weight of emotional distress due to their parents and other family members’ delicate legal statuses. There is the obvious acknowledgement amongst the young adult immigrants of their parents sacrifices for them to live a better life in the United States. However, with that life changing decision comes the consequences of feeling reduced motivation, shame, self-blame, anxiety and lack of mobility when it comes to academic and work opportunities (Patler & Laster Pirtle 2017). However, despite these consequences, Patler and Laster Pirtle (2017) did find something illuminating, being there was a positive significant effect of legal status on psychological well being. The participants in their study expressed that receiving DACA actually reduced the amount of distress and worry about deportation by 76-87% as compared to individuals who did not receive DACA (Patler & Laster Pirtle 2017). It is more than feasible to conclude that immigrants’ experience under the DACA program improves mental health when they are granted a lawful presence."
                    }
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;

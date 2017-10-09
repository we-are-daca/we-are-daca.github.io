import React from 'react';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import Info from '../common/Info';
import '../App.css';

class Lesly extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          name: 'Lesly',
          occupation: 'Software Engineer',
          timeSinceArrival: '15',
          country: 'Mexico',
          image: 'lesly_portrait.jpg'
        }

        setTimeout(() => {
            this.setState({ show: true });
        }, 1);
    }

    imageLoaded = () => {
        setTimeout(() => {
            this.setState({ show: false })
        }, 500);
    }


    render() {
        console.log(this.state);    
        return (
            <div className="participant">
            <Loading
                color={'blue'}
                show={this.state.show}
                showSpinner={false}
            />
            <div className="container">
                <ul className="row site-navigation">
                    <li className="col-12 col-sm-6 push-sm-3 logo">
                        <a>Faces Of Daca</a>
                    </li>
                    <li className="col-6 col-sm-3 pull-sm-3 about-daca">
                        <a className="">About DACA</a>
                    </li>
                    <li className="col-6 col-sm-3 pull-sm-3 about-site">
                        <a className="">How to help</a>
                    </li>
                </ul>
                <div className="row">
                    <div className="portrait col-md-12">
                        <img src={`https://dwistynbcri9g.cloudfront.net/${this.state.image}`} alt={this.state.name}
                            onLoad={this.imageLoaded} 
                        /> 
                    </div>
                </div>
                <div className="row">
                    <div className="dacamentor-name col-md-12">
                        {'Lesly\'s Journey'}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 dacamentor-border-container">
                        <div className="dacamentor-border"></div>
                    </div>
                </div>
                <div className="row info">
                    <div className="info-container">
                        <Info
                            years={this.state.timeSinceArrival}
                            date={'Sept 12, 2017'}
                            occupation={this.state.occupation}
                            country={this.state.country}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 dacamentor-endborder-container">
                        <div className="dacamentor-endborder"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Tell me a bit about your early years and where you come from.'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'My brother and I are from Mexico and we lived there for five years. Both of my parents are from Oaxaca. My mother wanted us to move there to get out of the city and experience country life. For most of those two years we lived there, my dad had already been in the United States. We spent our time in Oaxaca without him and that was hard for my mom, my brother and myself. When we were seven and a half, my parents made the decision to move over here to the U.S. where a lot of my mother’s family is currently located. I wasn’t really aware of what was happening. We were pretty young. Nothing was really odd for us at first because our parents didn’t really tell us.'}
                        </span>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'All I knew was that I was going to be able to see my dad again. And so, we got here in January of 2002. It wasn’t too bad since we got put into bilingual and Spanish classes, and I guess it wasn’t too much of a culture shock because of those accommodations.'}
                        </span>
                        </p>
                        <blockquote>
                            <p>
                                <span className="dacamentor-quote">
                                    {'"My parents really wanted us to go to college--it was one of the biggest things they encouraged us on. They wanted us to have the higher education that they couldn’t get because they didn’t get a chance to study. They had to work to support our family."'}
                                </span>
                            </p>
                        </blockquote>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Did your family know any English when you arrived to the United States?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'No, we didn’t. We hadn’t been exposed to it. And when we got here, it was definitely a big challenge for me since I didn’t really have--I just had that feeling of not really belonging. And I think that fear of not understanding the language and not really learning it because, this might not be true for everybody, but at least for me, I really had that fear that the other children were going to laugh because I didn’t pronounce something correctly. It was definitely a challenge at first. I want to say pretty much in elementary school it was like that. I did meet some great people. It wasn’t until middle school where I really had to start learning and speaking [the language] so at that point I decided that I was going to stop speaking Spanish to really immerse myself to really get it. It worked out well and I started becoming fluent.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                        <span className="dacamentor-response">
                            {'Middle school years were fine. In high school, I got really bored in basic English classes so I got my teachers to sign off for AP and Gate Honors classes. My parents really wanted us to go to college--it was one of the biggest things they encouraged us on. They wanted us to have the higher education that they couldn’t get because they didn’t get a chance to study. They had to work to support our family.'}
                        </span>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I tried to have as many honors and AP classes, and did my best to make sure I got into the colleges where I could get scholarships. Being undocumented wasn’t really that big of a deal for me. It never really came up. However, during my senior year, I hit a roadblock.'}
                        </span>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'When you’re young, you don’t have to apply for a driver’s license and, for the most part, your parents took care of you. It wasn’t until my senior year when I did college applications that I became aware of the impact of my status. I got accepted into a handful of colleges, but I couldn’t apply for financial aid, so I wasn’t able to go to the schools I wanted. I was accepted to Sacramento State, San Francisco, a private school in the LA area called University of La Verne, Cal State Monterey Bay, and some few others I can’t remember at this moment. I really wanted to go to San Francisco or Los Angeles, but because they didn’t offer enough financial aid I wasn’t able to attend. At that point, it felt as if I really didn’t have too many choices. After we graduated high school, my brother joined CS-in-3, a program where students are able to obtain their computer science degree in three years. I thought about applying, yet I didn’t want to follow that path. Instead, I wanted to explore the subjects I wanted to study. I went to our local community college to continue my education. They had a lot of support and it wasn’t as expensive. I studied there for a year--I wanted to study environmental science as a major. Most of the courses I took were chemistry classes, geology--things like that.'}
                        </span>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'After reflecting for a bit, however, I decided that computer science was going to be a good option for me because you can really do anything with it. That’s when I started the program and was lucky enough to get a scholarship to afford my undergrad.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Backtracking a bit, you mentioned when you first got here about feeling like you didn’t belong. Has that changed now? Would you consider yourself an American?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Definitely.  When I became more proficient and felt more comfortable with the language and the people, this place definitely felt like home. I started to get that sense of security and belonging. At some point when I was younger, it still felt very much like I wasn’t part of what America represented. I was here for half of my life and half over there, but now, I’ve been here for 15 years. It does feel like the United States is my home. I don’t remember what it’s like to not be here.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Have you gone back to visit Mexico since you came?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'No, I haven’t. At some point I want to. I’m not sure if I want to live there though, just because my roots are now grounded here. But I do really want to visit. I still have family there. Maybe I’ll live there for a couple of months just to see what it’s like. But I definitely  consider this country to be my home and where I want to live for the rest of my life.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'You mentioned you honed in on computer science for your undergrad. How was your college experience?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I really wanted to go to SF or LA but because they didn’t offer enough financial  aid I wasn’t able to. At that point it felt like I really didn’t have too many choices. I had to go to community college to continue my education. They had a lot of support and it wasn’t as expensive. I studied there for a year - I wanted to study environmental study. Most of the courses I took were chem classes, geology -  things like that. Then, my brother joined CS-in-3 after we graduated. I thought about applying but since I didn’t want to follow that path:  I wanted to explore the things I wanted to study.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Overcoming obstacles definitely make one feel proud. So you moved out to Seattle and work at Liberty Mutual as a software engineer. What will you be working on?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'It depends on what field they put you in. During my time in college, I did a summer internship with Liberty Mutual. In my internship, my team was working closely with Microsoft and Amazon to do different projects and we used a lot of their resources. My team was creating visualization dashboards and applications that would benefit the work of employees within the company. As an insurance company, you wanna know what places are more likely to experience natural disasters and how it can affect both the customer and the company. So, for the first project I made an internal tool that visualized hurricane data, which lately has become extremely useful. Regarding the second project, I used the Python programming language. We have a lot of people that are under different sections (commercial, international insurance). This project helped the company look up the information of people and aggregate the tracking of different customers. Here, a lot of people are working on creating infrastructure and moving to the cloud. Overall, I’m not sure what I’m going to be working on next, but I enjoy doing web development and empowering coworkers with great software solutions to make their job easier. Therefore, I hope to work on something along those lines.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Although you’re working full time now, do you plan on pursuing any higher education later on?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I still have a strong interest in environmental science. I’m hoping to get another degree in that field, hoping to find a company that intersects environmental science with computer science. If not, perhaps I’ll even start my own company where the core values and tools we apply to our work could go a long way to benefit the environment. It’s really important to look at this now since some people might not believe in climate change, but I believe these are the very things that we need to understand as humans living on this earth, to take care of our only home. '}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Long term, where do you see yourself in a few years?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I always wanted to live in Seattle as far as I can remember. I’ll be here for the next couple of years to see whether the place is a right fit. In the long term, I might see myself having a home in Seattle and maybe working at a different tech company. I definitely see myself still working - it’s something I really like doing and it’s fun. Perhaps, I could experience some different parts of the job to show what I can do and what I can contribute to other people. In my situation, women in tech remain underrepresented and I really want to inspire others to do something similar to what I’ve done. Hopefully at that point herScript has grown as well.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'For those that don’t know about herScript, can you expand a bit?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'herScript is an organization that the girls in my cohort started to encourage other women at Hartnell, CSUMB and even high schools to pursue an education in computer science, showing them what technology is all about. For a lot of us we didn’t get that exposure until college happened. In some high schools, they offer some tech programs for their students. Meanwhile, in my school, tech programs were never talked about nor part of the school’s curriculum. It was really never seen as an option. We wanted to make sure other girls had that exposure and support because in a lot of CS classes you don’t see many girls--even now in the industry you don’t see that many. We wanted to establish that support system for them to reach out to people like us who have already experienced it.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'Coming back full circle, do you plan on becoming a US citizen?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I hope to one day become a citizen. I think that this has become my home and I see myself here for the rest of my life. To be able to contribute more to the place I’ve called home for over 15 years, even vote for those that can represent and run the country well, that is what citizenship would mean for me. '}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'As you know, On Sept 5th, the Trump administration decided to rescind DACA thus leaving it up to Congress to find a solution. What was your initial reaction?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'It was pretty heartbreaking. With DACA, it was life changing. Without it, you don’t have the same options as many citizens and residents do. It was only with DACA where I was able to get my license, a social security, and buy my first car at the beginning of this year. I was able to go to the east coast for an internship and work a bit during college. DACA gives you a lot of opportunity you wouldn’t otherwise have. And to think that in two years when your permit ends, you might be out of work. You might have to go somewhere else; a place where, I assume, many have never really been to for quite awhile. It\'s heartbreaking.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p className="dacamentor-question">
                            <b>
                                {'As Congress works on passing a resolution, is there anything you’d like to say to them?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'As people, we are great contributors to the U.S, a place where we’ve rooted in, a place where we’ve gotten our education, and a place where we work at. I think we’re able to provide for not only the economy, but also our communities that we live in. I feel I’ve made some impact during my time in California -- I was even able to go to middle schools, hoping to inspire students to consider the possibility of getting a higher education because it’s so important. I believe we’re invaluable in that sense.'}
                        </span>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Lesly;
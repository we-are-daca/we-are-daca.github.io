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
          image: 'lesly-journey.png'
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
                        <a>DACAMENTED</a>
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
                        <p>
                            <b>
                                {'Tell me a bit about your early years and where you come from.'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'My brother and I are from Mexico and we lived there for 5 years. Both of my parents are from Oaxaca. My mother wanted us to move there to get out of the city and experience country life. My dad, for most part of those 2 years we lived there, he had already been in the United States for a while. We spent some good years without him and that was hard for both of us and my mom. Then they made the decision when we were seven and a half, to move over here to the U.S. where a lot of my mother’s family is. I wasn’t really aware of what was happening. We were pretty young. Nothing was really odd for us at first because our parents don’t really tell us.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'You didn’t know what was going on at them time then?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Yeah. All I knew was that I was going to be able to see my dad again. And so, we got here in January of 2002. Since it was winter break, we got enrolled into school for the end of the break. It wasn’t too bad since we got put into bilingual classes and the school we went to we still had classes in spanish and i guess it wasn’t too much of a culture shock because of it?'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'When you guys came here you didn’t know any English then?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'No, we didn’t. We hadn’t been exposed to it. And when we got here, it was definitely a big challenge for me since I didn’t really have -- I just had that feeling of not really belonging. And I think that fear of not understanding the language and not really learning it because--This might not be true for everybody but at least for me, as a child, I really had that fear that the other children were going to laugh because I didn’t pronounce something correctly. It was definitely a challenge at first. I want to say pretty much in elementary school it was like that. I did meet some great people then but it really-- I didn’t really approach… I guess it was until middle school that it was something that I really had to start learning and speaking so at that point I decided that I was going to stop speaking Spanish so I had to really immerse myself in the language to really get it and it worked out well and I started becoming fluent.'}
                        </span>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Middle school years were fine. In high school, I got really bored in basic English classes so I got my teachers to sign off for AP and Gate Honors classes. My parents really wanted us to go to college -- that was one of the biggest things for us. They wanted us to have a higher education that they couldn’t get because they didn’t get a chance to study. They had to work to support our family.'}
                        </span>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I tried to have as many honors and AP classes and did my best to make sure I got into colleges that I could get scholarships. My senior year I hit a roadblock. Prior to that, being undocumented wasn’t really that big of a deal for me. It never really came up.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Was that because you just didn’t know the impact of it'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Yeah. When you’re young, you don’t have to apply to a driver’s license and for the most part, your parents took care of you. It wasn’t until my senior year when I did college apps. I got accepted into a handful of colleges. But I couldn’t apply for financial aid and I wasn’t able to go to the schools I wanted to go to.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'What are some of the schools you got into?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Sacramento State, San Francisco, a private school called University of La Verne in the LA area, Cal State Monterey Bay, and some few others I can’t remember.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Nice!'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I really wanted to go to SF or LA but because they didn’t offer enough financial  aid I wasn’t able to. At that point it felt like I really didn’t have too many choices. I had to go to community college to continue my education. They had a lot of support and it wasn’t as expensive. I studied there for a year - I wanted to study environmental study. Most of the courses I took were chem classes, geology -  things like that. Then, my brother joined CS-in-3 after we graduated. I thought about applying but since I didn’t want to follow that path:  I wanted to explore the things I wanted to study.'}
                        </span>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'After some time of thinking, I decided that computer science was going to be a good option for me because you can really do anything with it. That’s when I started the program and was lucky enough to get a scholarship to afford my undergrad.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Awesome, a bit biased but I get what you mean when CS can do anything. Backtracking a bit, you mentioned when you first got here about feeling like you didn’t belong. Has that changed now? Do you consider yourself American?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Definitely. When I became more proficient and felt more comfortable with the language and the people, it definitely felt more like home. I started to get that sense of security and belonging. At some point when I was younger it still felt very much like I wasn’t part of what America is like. I was here for half of my life and half over there, but now, I’ve been here for 15. It does feel like the United States is my home. I don’t remember what it’s like to not be here.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Have  you gone back since you came?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'No, I haven’t.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Do you want to?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Yeah definitely, at some point I want to. I’m not sure if I want to live there just because I have my roots here now. But I really want to visit - -I still have family there. Maybe live there for a couple of months just to see what it’s like. But I definitely  consider this my home and where I want to live for the rest of my life.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Other than your brother, and your parents, do you have family here?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Yes, a lot of my mother’s family lives here so my grandparents and a lot of my mother’s siblings live here. Just my mother’s side pretty much.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'It’s nice to have family here. There’s some dreamers out there that only have themselves or their immediate family here. And for a lot of us, this has become home. Our roots are here.'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Yeah. '}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'You mentioned you honed in on computer science for your undergrad. How was your college experience?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I think it was great. I have met some wonderful people. I actually moved up to Seattle with a classmate and we work and live together! I keep in contact with everybody. The people I met have been great and very supportive. They were a big part of the college experience. It was also a new learning experience. I had no prior experience in CS before starting the program. It definitely had some challenges but it was a great sense of accomplishment to be able to say that I got through these obstacles and be able to exercise my career now. '}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'That’s great. Those are some big accomplishments, especially getting through your senior year when you found out you couldn’t really go to colleges you wanted to and realizing our situation is a bit different. It’s awesome that it worked out though.'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Mhhm, yeah!'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'As you know, On Sept 5th, the Trump administration decided to rescind DACA thus leaving it up to Congress to find a solution. What was your initial reaction?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'It was pretty heartbreaking. With DACA, it was really life changing. Without it, you don’t have options that citizens and residents. With DACA I was able to get my license, a social security, I bought my first car at the end of the year. I was able to go to the east coast for an internship and work a bit during college. It gives you a lot of opportunity you wouldn’t have otherwise. To think that in two years when your permit ends, you might be out of work. You might have to go somewhere else that I guess, you’ve never really been to for quite a bit of time.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'In terms of long term sight, assuming nothing crazy happens, where do you see yourself in the few years?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {' I always wanted to live in Seattle since I can remember. I’ll be here for the next couple of years to see if I like it here and fit in. In the long term, I might see myself having a home in Seattle and maybe working at a different tech company. I definitely see myself still working - it’s something I really like doing and it’s fun. Maybe experience some different parts of what I can do and what I can contribute to other people. In my situation, women in tech still have very small representation and I really want to inspire other people to do something similar to what I’ve done. Hopefully at that point herScript has grown as well.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'For those that don’t know about herScript, can you expand a bit?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Haha, yeah. herScript is an organization that the girls in my computer science cohort started to encourage other women at Hartnell or CSUMB or even high school to pursue an education in computer science and show them what technology was all about it. For a lot of us we didn’t get that exposure until college. In some high schools, they do have some tech programs. In my school, it was never talked about and they still don’t have any kind of program. It was really--never seen as an option. We wanted to make sure other girls had that exposure and that they felt they had the support because in a lot of cs classes you don’t see many girl and even now int he industry you don’t see that many. We wanted to establish that support system and for them to reach out to people like us that have already experienced that.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'So you moved out to Seattle and work at Liberty Mutual as a software engineer. What will you be working on?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'It depends on what field they put you in. In my internship, my team was working closely with Microsoft and Amazon to do different projects -- we used a lot of their resources. My team was creating visualization dashboards and applications that would benefit a customer. I had two projects to hack on. The first project I made an internal tool that visualized hurricane data which lately has become extremely useful. As an insurance company, you wanna know what places are more likely to experience natural events and how it can affect the customer and the company. The second project I used the Python programming language. We have  a lot of people are under different sections (commercial, international insurance). This project helped the company look up the information of people and aggregate the tracking of different customers. Here, a lot of people are working on creating  infrastructure and move to the cloud. Overall, I’m not sure what I’m going to be working on.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Your projects sounds super impactful especially given recent events. I’m glad you had a great internship experience.'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'Yeah, I definitely did.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Although you’re working full time now, do you plan on pursuing any higher education later on?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I still have a strong interest in environmental science. I’m hoping to get another degree in env sci and hopefully intersect it with comp sci to find a company or start my own and create value and tools to apply to the environment. It’s really important to look at this now, and some people might not believe in climate change but I think these are things that we need to change as humans that live on this earth to take care of our only home.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'Coming back full circle, do you plan on becoming a US citizen?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'I hope to one day. I think that this has become my home and I see myself here for the rest of my life. To be able to contribute more the place I’ve called home for 15 years, and vote for those that can represent well and run the country. I hope to one day.'}
                        </span>
                        </p>
                    </div>
                    <div className="col-md-12 dacamentor-interview">
                        <p>
                            <b>
                                {'As Congress works on passing a resolution, is there anything you’d like to say to them?'}
                            </b>
                        </p>
                        <p>
                        <span className="dacamentor-response">
                            {'As people, we are great to contributing to the U.S, the place we’ve rooted in, the place that we’ve gotten our education from, the place we work at. I think we’re able to provide for the not only the economy but also our communities that we live in. I feel I’ve made some impact back in California -- I was able to go to middle school and hopefully inspire student to consider the possibility of getting higher education because it’s so important. I believe we’re invaluable in that sense.'}
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
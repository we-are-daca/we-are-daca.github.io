import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../common/Info';
import '../App.css';

class Xochitl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          name: 'Xochitl',
          occupation: 'Behavioral Specialist',
          timeSinceArrival: '19',
          country: 'Mexico',
          image: 'xochitl_hero.jpg',
          interviewDate: 'September 21, 2017'
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

    componentWillMount = () => {
        window.scrollTo(0, 0);
    }


    render() {
        console.log(this.state);    
        return (
            <div className="participant">
            <div className="container">
                <ul className="row site-navigation">
            
                    <li className="col-12 col-sm-4 push-sm-4 logo">
                    <Link to={'/'}>
                        {'Faces of Daca'}
                    </Link>
                    </li>
                    <li className="col-6 col-sm-2 pull-sm-2 about-daca">
                    <a className="">About DACA</a>
                    </li>
                    <li className="col-6 col-sm-2 push-sm-2 about-site">
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
                        {`${this.state.name}'s Journey`}
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
                            date={this.state.interviewDate}
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
                            {'To start off, why don’t you tell me about your early years and where you come from.'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'I was born in Mexico in Naucalpan de Juarez. I lived there for the first three years of my life and then when I was around 3, my parents brought me here in a car. We came here with a legitimate passport but it was only valid for two weeks. We came through the south border of Texas and resided in California because my dad has a brother that lived here.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'Why did you and your family decide to come to the U.S?'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'We lived in an area in Mexico that wasn’t very safe. It was very industrial and chemicals were released into the surrounding communities. It was affecting the health of the community; specifically, long-term lung damage. For their whole lives, my parents were exposed to a lot of crime and poverty. They knew the Unites States was the land of opportunity and they wanted a better life for us.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'Did you have a hard time fitting in when you first came?'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {"I went to an economically poor school for elementary--a dual-immersion school. It was full of children with a similar background like me so I didn’t have a hard time fitting in. I wasn’t ever made fun because of my English pronunciation. Maybe it was because I didn’t go to school with my age group. I skipped a grade in elementary school and no one payed attention to mispronunciations. Additionally, I could have been oblvious to people acknowledging my accent. I didn’t know how different I was from a typical American child until middle school and high school where I felt more alienated. I started to think seriously about what I was going to do after school ended. There were opportunities I couldn’t pursue because of my status--like my French class. They had a program to go experience other cultures and then I realized I couldn’t go."}
                      </span>
                    </p>
                    <blockquote>
                            <p className="dacamentor-quote">
                                <span>
                                    {'"I didn’t know how different I was from a typical American child until middle school and high school where I felt more alienated because I started to think seriously about what I was going to do after school ended. There were opportunities I couldn’t pursue because of my status--like my French class. They had a program to go experience other cultures and then I realized I couldn’t go."'}
                                </span>
                            </p>
                        </blockquote>
                     <p className="dacamentor-question">
                        <b>
                            {"That happened to me too. I couldn’t go to an all expenses paid trip to Japan in high school."}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'Sigh. I did a little explorer club in middle school where my mom payed a non-refundable fee of $500. I ended up not being able to go on the trip that year since they chose an out of the country destination. It sucks. At the time, I assumed that since it was a school trip, I would be able to go regardless of my illegal status. When I made the realization that I would not be able to participate I felt rejected. Eventually, the club didn’t raise sufficient funds to continue on with the trip so they took a trip to San Francisco instead. I decided not to go regardless of my availability to join. I didn’t want to be a part of a group where I had to announce to everyone of my illegal standing. I felt like an outcast.'}
                      </span>
                    </p>
                    <blockquote>
                            <p className="dacamentor-quote">
                                <span>
                                    {'"I remember being in the car on my way home and my mom attempting to find other ways to reach home that wouldn’t involve us being exposed to the raid. I remember being so scared and hugging my little sister in an attempt to comfort her."'}
                                </span>
                            </p>
                        </blockquote>
                    <p>
                      <span className="dacamentor-response">
                          {'I’ve always been aware about my status. There were issues in elementary school such as when they would do raids--you know, when ICE was more prevalent in 2005, 2006. My parents would be scared if there was a checkpoint or something like that. I was always exposed and I knew where I was standing but not in terms of being alienated. There was one occasion I remember specifically. I was about 7 or 8 years old. My mom was trying to learn English at a night class provided by a school. I remember being in the class with her when someone told everyone that there was a raid occurring, near the time we were ready to go home. I remember seeing fear everywhere. I remember being in the car on my way home and my mom attempting to find other ways to reach home that wouldn’t involve us being exposed to the raid. I remember being so scared and hugging my little sister in an attempt to comfort her. I fell asleep after seeing extensive lights, I was so distressed I didn’t want to be awake. Avoiding the police might not seem like a big deal, but as a 7/8 year old child, it is incredibly traumatizing to feel that my mom could be potentially taken away, or that I would be forced into living in a completely different country leaving my other siblings without a parent.'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'In middle school and high school, it’s so crucial to fit in. It’s seemingly the most important thing in the world at the time, and it really bothered me that I wasn’t the same. I felt… sad. I wouldn’t want to speak Spanish in public. I felt embarrassed to do so. I wanted to fit in as much as I could. Looking back, it makes me feel so guilty. When my mom would ask me to translate something, I would get frustrated and think: “Why can’t you just learn English?!”. It breaks my heart now when I think about those moments. I felt so much frustration that it was apparent that we were from Mexico. I was about 12 or 13 and I felt so much embarrassment over who I was. Thinking back, I feel so much more frustration knowing that those things bothered me. My parents gave up everything for me, absolutely everything. They missed out on the last years of their parents’ lives and they were not able to attend their parents’ funerals. Now I feel an overwhelming tremendous guilt knowing that I will never be able to repay them in the slightest for all of their sacrifices.'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'[Pauses].'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'Sorry.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'No, no, it’s okay.'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'Have people cried in your interviews?'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'There’s a good amount of interviews that became emotional. I told them it was okay to cry. Let yourself feel these emotions and take your time. It’s not easy.'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'Thank you. Give me a second.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'Did your parents push you to do well in school?'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'They never pushed me but I always felt like it was something I owed back to them. They definitely grounded me if I got bad grades but they’ve always been really supportive. I know there’s parents that create a lot of pressure for their children. But for my parents, they would support me and not berate me if I failed a test. The least I could do is get good grades for them because of the sacrifices they made. My drive to succeed wasn’t because of pressure they created; I wanted to pay back what they have done for me. There’s a quote that states “The pressure on first generation children of immigrants to prove that you are indeed proof of your parents’ sacrifice being worth it is something that many Americans will never understand.”'}
                      </span>
                    </p>
                    <blockquote>
                            <p className="dacamentor-quote">
                                <span>
                                    {'“The pressure on first generation children of immigrants to prove that you are indeed proof of your parents’ sacrifice being worth it is something that many Americans will never understand.”'}
                                </span>
                            </p>
                        </blockquote>
                    <p className="dacamentor-question">
                        <b>
                            {'How was your high school experience? You mentioned this was when you felt alienated.'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'I really didn’t like high school. I hated it. My freshman year I had the worst grades--I carried a 0.6 GPA. I don’t know how that’s possible but I had it. I never went to school and I would ditch every single day. In middle school, I had excellent grades. I had 3.8 GPA. Huge difference. I had so many things going on--not just my legal status. My mom asked me why I was doing so bad.'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'[Pauses].'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'And I remember telling her in tears, “What’s the point? I’m going to graduate and I can’t do anything. I can’t work. I can’t even drive. I’m stuck. Why am I even in school?” She comforted me, saying that we would figure something out and to have hope of better things in 5 years. Her words didn’t completely motivate me. I told myself I would get through high school, get my diploma and take it from there.'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'It was really difficult to catch up since I had terrible grades for a whole year. I had to catch up on my math and English classes. At the time, my high school didn’t offer saturday school or summer school. It was only available if you were a junior or a senior that needed to catch up on credits. The only thing I could do was make up credits at the local community college so that’s what I did my junior and senior year of highschool. I was barely able to graduate.'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'Isn’t it crazy? As you’re living through it, you’re so embarrassed and full of shame. And when you come back to it, I can say that I lived through that, I went through that. Now I’m here doing great things!'}
                      </span>
                    </p>
                    <blockquote>
                            <p className="dacamentor-quote">
                                <span>
                                    {'"And I remember telling her in tears, “What’s the point? I’m going to graduate and I can’t do anything. I can’t work. I can’t even drive. I’m stuck. Why am I even in school?” She comforted me, saying that we would figure something out and to have hope of better things in 5 years."'}
                                </span>
                            </p>
                        </blockquote>
                    <p className="dacamentor-question">
                        <b>
                            {'Yes! So you were able to climb back and finish high school--what were you thinking for next steps?'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'I didn’t really know how college worked. Nobody in my family went to college. My friend Haley helped me through the process. She was like “Obviously, you’re going to college.”. Our plan was to share books and take general education courses as we figured out the next steps. I didn’t apply for DACA until 2013  because I didn’t know about it. I didn’t keep my ear to the ground and I thought if something came along, it would be obvious. My mom was the one that ended up telling me about DACA which is a little funny since she’s not one to tune in to news and world events.'}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {"I hated not being able to work and support myself. I remember wanting to work when I turned 16 and I couldn’t. It drove me crazy. I disliked relying on my parents for everything. I would feel bad asking them to even buy me deodorant. It was really hard for my parents to financially to provide for the four of us. As soon as I received my social security, I applied to a million places and landed my first job at Famous Footwear. Right away I went to get my driver’s license. That’s the reason I never learned to drive until I was 20. Again, I thought “What’s the point?”. People would ask me why I didn’t know how to drive. I wouldn’t tell them why and I would just feel embarrassed."}
                      </span>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'I started off wanting to do psychiatric nursing. I studied that for a whole year and I realized I can’t hear sad stories for my whole life--it would be too hard for me emotionally. I switched to neonatal nursing. I took nursing prerequisites for about a year until I saw I had a really hard time understanding biology. I switched back to psychology because I saw the overall theme of these careers: to help people and make a difference in their lives. This is my graduating semester; after this, I’ll be graduating with my Associate degree in psychology. I’ll be taking calculus and biology as prerequisites for UC Santa Cruz and UC Davis.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'Sweet. Are these the only schools you’re shooting for?'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'Yeah. I’m leaning more towards Santa Cruz because  I have been told that it is the top school in the United States for research. Research Psychology is something that I am incredibly interested in. Moreover, UCSC provides so much support for undocumented students like me. I have been told that they offer free textbooks for dreamer students along with cheaper housing.  I’m considering UC Davis is because my little sister goes there. She’s studying animal science and so far, she loves it there.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'Let’s switch gears to recent events. On Sept 5th, the Trump administration announced it’s decision to rescind DACA. What was your initial reaction?'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {' I wasn’t surprised when I heard of the termination of DACA. I was aware of the rumors going around. It just didn’t make sense: “Why? Why are they going to do this?” I felt really angry and frustrated and taken advantaged of. It’s hard to say this is our right because we didn’t come to this country legally. It’s not our natural born right. But  it is inhumane do that to someone. I thought of how I’m going to pay for college or how I would have to sustain myself.  That day, I heard about the protest that was going to happen in San Francisco and I drove up.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'How was it?'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                          {'It was amazing. It was just so heartwarming. It was hard being there because you hear everyone talking about it and you don’t even want to accept that it’s happening. You want to be able to enjoy it, be part of it and enjoy everyone’s presence. It was hard because you didn’t want the decision to be real. But it was nice to see so many people that supported us and not just people who benefitted from DACA but people in general. There were people screaming their lungs to defend me and people in my circumstances. To say that I was full of gratitude is a huge understatement. . This doesn’t even affect you and you’re here protesting for me. It was really wonderful. Everyone should go to one.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'Where do you see yourself in 5 years assuming nothing happens?'}
                        </b>
                    </p>
                     <p>
                      <span className="dacamentor-response">
                          {'Working and school. Still in school. I would probably be done with my B.A by then but I would want to go for my M.A, and possibly my doctorates. I’m still contemplating  if it is something that I will be able to afford. Schools are such a business. If it wasn’t for the money, I would definitely go for my doctorates. For right now, M.A. Baby steps first. Thankfully, we get more support now with things like AB-540 and it definitely helps out a lot to say the least. Unfortunately, that wasn’t an opportunity for people like my older sister. My sister had outstanding grades during high school. She even had the choice of graduating in advance because she was so far ahead in her credits. When she graduated she was in a position where there was no financial help to assist her through college. She was unable to afford the classes therefore, never attended college.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'Would you want to become a U.S citizen in the future?'}
                        </b>
                    </p>
                     <p>
                      <span className="dacamentor-response">
                          {'Yes, I absolutely want to become a U.S citizen. I want to be able to live here. My family is here. I want to be able to come and go as I please and not have to worry if I’m gonna be able to work next year. I want to be able to feel comfort in knowing that my freedom is no longer in jeopardy. I want to feel like everyone else; to not be afraid that one day, I might be forced to live in a country with a high prevalence of violence--a country that I don’t know. There’s nothing more that I want than to feel like I am accepted where I consider home. If my illegal status remains the same, I will always be at risk of losing my three jobs, losing my ability to drive, never being able to travel, and most importantly, being forced out of my home while deprived of my family. I don’t meet the requirements to renew. My DACA expires in Nov 2018. I don’t know what’s going to happen after that. I remain hopeful.  If nothing improves, I see myself still in school with the support of my parents.  However, that is something that I want to avoid at all costs. They’re already paying for my little sister’s tuition. I can’t ask them to pay for mine as well.'}
                      </span>
                    </p>
                    <p className="dacamentor-question">
                        <b>
                            {'My last question: As Congress works towards a solution for us, what would you tell them if you had the chance?'}
                        </b>
                    </p>
                     <p>
                      <span className="dacamentor-response">
                          {'I hope that Congress can see us as more than monetary value. I hope that they recognize all of the sacrifices we have made to be where we are. I hope that they take our emotional distress into consideration. I hope that when they think of us and our parents, they consider how far they are willing to go for their children. I hope that they question how they would respond if they were put in the same situation my parents endured. I hope they question what they would want for their children.  We’re people. We’re human beings. I remain hopeful Congress will see that as they work on a solution in the next six months.'}
                      </span>
                    </p>
                    <blockquote>
                            <p className="dacamentor-quote">
                                <span>
                                    {'"I hope that when they think of us and our parents, they consider how far they are willing to go for their children. I hope that they question how they would respond if they were put in the same situation my parents endured."'}
                                </span>
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Xochitl;
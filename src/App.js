import React, { Component } from 'react';
import Facebook from './img/facebook.svg';
import Instagram from './img/instagram.svg';
import Twitter from './img/twitter.svg';
import { NavLink } from 'react-router-dom';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(){
    super();
    this.state = {
      show: false,
      numLoaded: 0,
      cards: [
        {
          name: 'Luis',
          occupation: 'Software Engineer',
          country: 'Mexico',
          image: 'luis_portrait.jpg',
          link: '/36432e39/luis-journey'
        },
        {
          name: 'Xochitl',
          occupation: 'Behavioral Specialist',
          timeSinceArrival: '19',
          country: 'Mexico',
          image: 'xochitl_portrait_1.jpg',
          link: '/5be2766a/xochitl-journey'
        },
        {
          name: 'Edgar',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: 'edgar_portrait.jpg',
          link: '/00c13752/edgar-journey'
        },
        {
          name: 'Aylin',
          occupation: 'Student / Kinesiology Major',
          timeSinceArrival: '21',
          country: 'Mexico',
          image: 'aylin_portrait.jpg',
          link: '/0ec6370e/aylin-journey'
        },
        {
          name: 'Jonathan',
          occupation: 'Field Representative',
          timeSinceArrival: '21',
          country: 'Mexico',
          image: 'jonathan_portrait_1.jpg',
          link: '/5e286af3/jonathan-journey'
        },
        {
          name: 'Rosie',
          occupation: 'Grower/Pest Control Advisor',
          timeSinceArrival: '26',
          country: 'Mexico',
          image:'rosie_portrait_1.jpg',
          link: '/168ed629/rosie-journey'
        },
        {
          name: 'Miguel',
          occupation: 'DevOps/Embedded Vision Engineer',
          timeSinceArrival: '11',
          country: 'Mexico',
          image: 'miguel_portrait.jpg',
          link: '/82b67ab1/miguel-journey'
        },
        {
          name: 'Lesly',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: 'lesly_10.jpg',
          link: '/aa9574739f97/lesly-journey'
        },
        {
          name: 'Yazmin',
          occupation: 'English Major',
          timeSinceArrival: '18',
          country: 'Mexico',
          image: 'yazmin_portrait_1.jpg',
          link: '/b9961768/yazmin-journey'
        },
        
        {
          name: 'Daniel',
          occupation: 'Student / Aspiring Software Engineer',
          timeSinceArrival: '18',
          country: 'Mexico',
          image: 'daniel_1_portrait.jpg',
          link: '/a65e9bc1/daniel-journey'
        },
        {
          name: 'Leo',
          occupation: 'Student Ambassador',
          timeSinceArrival: '17',
          country: 'Mexico',
          image: 'leo_portrait_1.jpg',
          link: '/c05de409/leo-journey'
        },
        {
          name: 'Irais',
          occupation: 'Student',
          timeSinceArrival: '15',
          country: 'Mexico',
          image:'irais_portrait.jpg',
          link: '/7d56bb43/irais-journey'
        },
        {
          name: 'Miriam',
          occupation: 'Software Engineer',
          timeSinceArrival: '11',
          country: 'Mexico',
          image: 'miriam_portrait.jpg',
          link: ''
        },
        {
          name: 'Daniel',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: 'daniel_one.jpg',
          link: '/a1db8f2ca088/daniel-journey'
        },
        {
          name: 'Araceli',
          occupation: 'Software Engineer',
          timeSinceArrival: '15',
          country: 'Mexico',
          image: 'araceli.png',
          link: ''
        },
        {
          name: 'Yarely',
          occupation: 'Software Engineer',
          timeSinceArrival: '18',
          country: 'Mexico',
          image: 'yareli_portrait.jpg',
          link: '/c5b03d37/yareli-journey'
        },
        {
          name: 'Elvin',
          occupation: 'Investor, Entrepreneur, Warehouse Worker',
          timeSinceArrival: '15',
          country: 'Mexico',
          image: 'elvin.png',
          link: ''
        },
        {
          name: 'Nayeli',
          occupation: 'Lab Technician',
          timeSinceArrival: '20',
          country: 'Mexico',
          image: 'nayeli_portrait.jpg',
          link: ''
        },
        {
          name: 'Miguel',
          occupation: 'Computer Science Student',
          timeSinceArrival: '13',
          country: 'Mexico',
          image: 'miguel.png',
          link: ''
        },
        {
          name: 'Octavio',
          occupation: 'Pest Control Advisor & Business Owner',
          timeSinceArrival: '13',
          country: 'Mexico',
          image: 'octavio_portrait.jpg',
          link: '/0e9be67f/octavio-journey'
        }
      ]
    };

    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 10);
  }

  photoRow = ({ cardQuad }) => (
    <div className="row">
      {cardQuad.map((card, index) => (
        <Card name={card.name} occupation={card.occupation} key={index}
          timeSinceArrival={card.timeSinceArrival} country={card.country} image={card.image} />
      ))
      }
    </div>
  )

  imageLoaded = () => {
    const oneMore = this.state.numLoaded + 1
    const params = {
      show: true,
      numLoaded: oneMore
    };

    if (oneMore === this.state.cards.length) {
      console.log('here');
      params.show = false;
    }
    this.setState(params);
  }

  render() {
    const inner = '<use class="sqs-use--icon" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook-icon"></use><use class="sqs-use--mask" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook-mask"></use>';
    return (
      <div className="App" style={{ overflowX: 'hidden' }}>
        <Loading
          color={'blue'}
          show={this.state.show}
          showSpinner={false}
        />
        <div className="sidenav">
          <div className="title">
            <span>{'Faces Of Daca'}</span>
          </div>
          <div className="navigation">
            <ul>
              <li><NavLink to="/" activeClassName="links">Stories</NavLink></li>
              <li><NavLink to="/statistics" activeClassName="links"></NavLink>Statistics</li>
              <li>How To Help</li>
              <li>About</li>
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
        <div className="container main">
           <div className="row dacas">
          {
            this.state.cards.map((card, i) => (
              <Card name={card.name} occupation={card.occupation} key={i} imageLoaded={this.imageLoaded}
              timeSinceArrival={card.timeSinceArrival} country={card.country} image={card.image}
              link={card.link}
              />
            ))
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

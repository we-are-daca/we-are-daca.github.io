import React, { Component } from 'react';
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
          name: 'Daniel',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: 'daniel_one.jpg'
        },
        {
          name: 'Lesly',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: 'lesly.jpg'
        },
        {
          name: 'Daniel',
          occupation: 'Student / Aspiring Software Engineer',
          timeSinceArrival: '18',
          country: 'Mexico',
          image: 'daniel_two.jpg'
        },
        {
          name: 'Miriam',
          occupation: 'Software Engineer',
          timeSinceArrival: '11',
          country: 'Mexico',
          image: 'miriam.png'
        },
        {
          name: 'Miguel',
          occupation: 'DevOps/Embedded Vision Engineer',
          timeSinceArrival: '11',
          country: 'Mexico',
          image: '5.jpg'
        },
        {
          name: 'Elvin',
          occupation: 'Investor, Entrepreneur, Warehouse Worker',
          timeSinceArrival: '15',
          country: 'Mexico',
          image: 'elvin.png'
        },
        {
          name: 'Nayeli',
          occupation: 'Lab Technician',
          timeSinceArrival: '20',
          country: 'Mexico',
          image: 'nayeli.png'
        },
        {
          name: 'Cecilia',
          occupation: 'HRA Analyst',
          timeSinceArrival: '19',
          country: 'Mexico',
          image: 'cecilia.png'
        },
        {
          name: 'Xochitl',
          occupation: 'Behavioral Specialist',
          timeSinceArrival: '19',
          country: 'Mexico',
          image: '9.png'
        },
        {
          name: 'Miguel',
          occupation: 'Computer Science Student',
          timeSinceArrival: '13',
          country: 'Mexico',
          image: 'miguel.png'
        },
        {
          name: 'Irais',
          occupation: 'Student',
          timeSinceArrival: '15',
          country: 'Mexico',
          image:'11.png'
        },
        {
          name: 'Yarely',
          occupation: 'Software Developer',
          timeSinceArrival: '18',
          country: 'Mexico',
          image: 'yareli.png'
        },
        {
          name: 'Aylin',
          occupation: 'Student / Kinesiology Major',
          timeSinceArrival: '21',
          country: 'Mexico',
          image: 'aylin.png'
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

    if (oneMore + 1 === this.state.cards.length) {
      params.show = false;
    }
    this.setState(params);
    console.log(oneMore);
  }

  render() {
    return (
      <div className="App" style={{ overflowX: 'hidden' }}>
        <Loading
          color={'black'}
          show={this.state.show}
        />
        <div className="container main">
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

           <div className="row dacas">
          {
            this.state.cards.map((card, i) => (
              <Card name={card.name} occupation={card.occupation} key={i} imageLoaded={this.imageLoaded}
              timeSinceArrival={card.timeSinceArrival} country={card.country} image={card.image} /> 
            ))
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

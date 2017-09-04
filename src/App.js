import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: [
        {
          name: 'Daniel',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: '1.jpg'
        },
        {
          name: 'Lesly',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: '3.jpg'
        },
        {
          name: 'Daniel',
          occupation: 'Student / Aspiring Software Engineer',
          timeSinceArrival: '18',
          country: 'Mexico',
          image: '2.jpg'
        },
        {
          name: 'Miriam',
          occupation: 'Software Engineer',
          timeSinceArrival: '11',
          country: 'Mexico',
          image: '4.png'
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
          image: '6.png'
        },
        {
          name: 'Nayeli',
          occupation: 'Lab Technician',
          timeSinceArrival: '20',
          country: 'Mexico',
          image: '7.png'
        },
        {
          name: 'Cecilia',
          occupation: 'HRA Analyst',
          timeSinceArrival: '19',
          country: 'Mexico',
          image: '8.jpg'
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
          image: '10.jpg'
        },
        {
          name: 'Irais',
          occupation: 'Student',
          timeSinceArrival: '15',
          country: 'Mexico',
          image:'11.png'
        }
      ]
    };
  }

  chunkForWindowSize() {
    let chunkSize;
    const windowSize = window.innerWidth;
    if (windowSize >= 992) {
      chunkSize = 4;
    } else if (windowSize < 992 && windowSize >= 768) {
      chunkSize = 2;
    } else {
      chunkSize = 1;
    }
    
    return chunkSize;
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

  render() {
    return (
      <div className="App">
        <div className="container main" style={{paddingLeft:'5%', paddingRight:'5%', overflowY: 'scroll'}}>
           <ul className="row site-navigation">
            <li className="col-12 col-sm-6 push-sm-3 logo">
              <a>WE ARE DACA</a>
            </li>
            <li className="col-6 col-sm-3 pull-sm-6 about-daca">
              <a>About DACA</a>
            </li>
            <li className="col-6 col-sm-3 about-site">
              <a>About Site</a>
            </li>
           </ul> 
           <div className="dacas">
          {
            this.state.cards.reduce((acc, card, i) => {
              if (i % 4 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(card)
              return acc;
            }, []).map((quad, i) => {
              return this.photoRow({ cardQuad: quad})
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

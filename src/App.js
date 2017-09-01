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
        }
      ]
    };
  }

  photoRow = ({ cardQuad }) => (
    <div className="row">
      {cardQuad.map((card, index) => (
        <Card name={card.name} occupation={card.occupation}
          timeSinceArrival={card.timeSinceArrival} country={card.country} image={card.image} />
      ))
      }
    </div>
  )

  render() {
    const currentIndex = 0;
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">WE ARE DACA</h1>
        </div>
        <div className="container" style={{paddingLeft:'10%', paddingRight:'10%'}}>
          {
            this.state.cards.reduce((acc, card, i) => {
              if (i % 5 === 0) {
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
    );
  }
}

export default App;

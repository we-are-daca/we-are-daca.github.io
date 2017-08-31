import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: [
        {
          name: 'Brian',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico'
        },
        {
          name: 'J. Daniel Diaz',
          occupation: 'Software Engineer',
          timeSinceArrival: '11',
          country: 'Mexico'
        },
        {
          name: 'Edgar Sandoval',
          occupation: 'Software Engineer',
          timeSinceArrival: '25',
          country: 'Mexico'
        },
        {
          name: 'Random 1',
          occupation: 'student',
          timeSinceArrival: '100',
          country: 'Parts  Unknown'
        },
        {
          name: 'Random 2',
          occupation: 'student',
          timeSinceArrival: '100',
          country: 'Parts  Unknown'
        },
        {
          name: 'Random 2',
          occupation: 'student',
          timeSinceArrival: '100',
          country: 'Parts  Unknown'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">WE ARE DACA</h1>
        </div>
        <div style={{paddingLeft:'10%', paddingRight:'10%'}}>
          {
            this.state.cards.map((card) => {
              return (
                <Card name={card.name} occupation={card.occupation}
                      timeSinceArrival={card.timeSinceArrival} country={card.country} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;

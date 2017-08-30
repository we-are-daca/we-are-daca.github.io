import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import './App.css';
import one from './img/1.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">WE ARE DACA</h1>
        </div>
        <div className="App-content">
          <FlipCard>
            <div>
              <img className='App-images' src={one} alt="Daniel Diaz"/>
            </div>
            <div>
              <p style={{ display: 'center', lineHeight: '100px', fontSize: 26 }}>11 Years</p>
              <p>Mexico</p>
            </div>
          </FlipCard>
          <p className="content-name">Daniel Diaz</p>
          <p className="content-title">Software Engineer</p>
        </div>
      </div>
    );
  }
}

export default App;

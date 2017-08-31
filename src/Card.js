import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import './Card.css';
import one from './img/1.jpg'

class Card extends Component {
  constructor(){
      super();
      this.state = {
          name: '',
          occupation: '',
          timeSinceArrival: '',
          country: ''
      };
  }

  render() {
    return (
      <div className="Card-content">
        <FlipCard>
          <div>
            <img className='Card-images' src={one} alt={this.props.name}/>
          </div>
          <div>
            <p style={{ display: 'center', lineHeight: '100px', fontSize: 26 }}>{this.props.timeSinceArrival}</p>
            <p>{this.props.country}</p>
          </div>
        </FlipCard>
        <div className="Card-name">{this.props.name}</div>
        <div className="Card-title">{this.props.occupation}</div>
      </div>
    );
  }
}

export default Card;

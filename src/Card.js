import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="Card-content col-xs-6 col-sm-3 col-md-3">
        <FlipCard>
          <div>
            <img className='Card-images' src={require(`./img/${this.props.image}`)} alt={this.props.name}/>
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

import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="Card-content col-6 col-sm-3 col-md-3">
        <FlipCard>
          <div>
            <img className='Card-images' src={`https://dwistynbcri9g.cloudfront.net/${this.props.image}`} alt={this.props.name}/>
          </div>
          <div>
            <p className="timearrival" style={{ display: 'center', lineHeight: '100px'}}>
              {`${this.props.timeSinceArrival} years in U.S.`}
              </p>
            <p>{`Born in ${this.props.country}`}</p>
          </div>
        </FlipCard>
        <div className="Card-name">{this.props.name}</div>
        <div className="Card-title">{this.props.occupation}</div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="Card-content col-12 col-sm-3 col-md-3" align="center">
        <div className="innercardcontent">
        <div className="hovereffect">
          <img className='Card-images' src={`https://dwistynbcri9g.cloudfront.net/${this.props.image}`} alt={this.props.name}/> 
          <div className="overlay">
            <p className="timearrival" >
              {`My Journey`}
            </p>
          </div>
        </div>
        <p className="Card-name">{this.props.name}</p>
        <p className="Card-title">{this.props.occupation}</p>
        </div>
      </div>
    );
  }
}

export default Card;

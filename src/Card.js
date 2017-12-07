import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="Card-content" align="center">
        <div className="innercardcontent">
        <div className="hovereffect">
          <img className='Card-images' src={`https://dwistynbcri9g.cloudfront.net/${this.props.image}`} alt={this.props.name}
            onLoad={this.props.imageLoaded} 
          /> 
          <div className="overlay">
            <p className="timearrival" >
              <Link to={this.props.link}>
                {'My Journey'}
              </Link>
            </p>
          </div>
        </div>
        <strong><p className="Card-name">{this.props.name}</p></strong>
        <p className="Card-title">{this.props.occupation}</p>
        </div>
      </div>
    );
  }
}

export default Card;

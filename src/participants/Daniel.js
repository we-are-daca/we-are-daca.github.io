import React from 'react';
import '../App.css';

class Daniel1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: 'Daniel',
          occupation: 'Software Engineer',
          timeSinceArrival: '10',
          country: 'Mexico',
          image: '1-1-journey.png'
        }
    }


    render() {
        return (
            <div className="participant">
            <div className="container">
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
                <div className="row">
                    <div className="portrait col-md-12">
                        <img src={`https://dwistynbcri9g.cloudfront.net/${this.state.image}`} alt={this.state.name}
                            onLoad={this.props.imageLoaded} 
                        /> 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Daniel1;
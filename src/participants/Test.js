import React from 'react';
import Info from '../common/Info';
import '../common.css';

const Test = () => (
    <div className="container">
        <div className="row info">
            <Info
                years={10}
                occupation={'Engineer'}
                country={'Mexico'}
                date={'March 15, 2018'}
            />
        </div>
    </div>
);

export default Test;
import React from 'react';

const Info = (props) => (
    <div className="col-md-6">
        <li>
            <p>{'YEARS IN US'}</p>
            <p>{props.years}</p>
        </li>
        <li>
            <p>{'OCCUPATION'}</p>
            <p>{props.occupation}</p>
        </li>
        <li>
            <p>{'Country of Origin'}</p>
            <p>{props.country}</p>
        </li>
        <li>
            <p>{'Interview Date'}</p>
            <p>{props.date}</p>
        </li>
    </div>
);

export default Info;
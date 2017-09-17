import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar-o';
import Flag from 'react-icons/lib/fa/flag-o';
import ClockO from 'react-icons/lib/fa/clock-o';
import Suitcase from 'react-icons/lib/fa/suitcase';

const Info = (props) => (
    <div className="col-md-6">
        <li>
            <p>
                {'YEARS IN US '}
                <ClockO />
            </p>
            <p>{props.years}</p>
        </li>
        <li>
            <p>
                {'OCCUPATION'}
                <Suitcase />
            </p>
            <p>{props.occupation}</p>
        </li>
        <li>
            <p>
                {'Country of Origin'}
                <Flag />
            </p>
            <p>{props.country}</p>
        </li>
        <li>
            <p>
                {'Interview Date'}
                <Calendar />
            </p>
            <p>{props.date}</p>
        </li>
    </div>
);

export default Info;
import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar-o';
import Flag from 'react-icons/lib/fa/flag-o';
import ClockO from 'react-icons/lib/fa/clock-o';
import Suitcase from 'react-icons/lib/fa/suitcase';
import '../common.css';

const Info = (props) => (
    <div className="info">
        <li className="info-years">
            <p>
                <span className="icon">
                    <ClockO />
                </span>
                {'years in united states'}
            </p>
            <p className="info-text">{props.years}</p>
        </li>
        <li className="info-occupation">
            <p>
                <span className="icon">
                    <Suitcase />
                </span>
                {'occupation'}
            </p>
            <p className="info-text">{props.occupation}</p>
        </li>
        <li className="info-country">
            <p>
                <span className="icon">
                    <Flag />
                </span>
                {'Country of Origin'}
            </p>
            <p className="info-text">{props.country}</p>
        </li>
        <li className="info-data">
            <p>
                <span className="icon">
                    <Calendar />
                </span>
                {'Interview Date'}
            </p>
            <p className="info-text">{props.date}</p>
        </li>
    </div>
);

export default Info;
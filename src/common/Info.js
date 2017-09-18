import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar-o';
import Flag from 'react-icons/lib/fa/flag-o';
import ClockO from 'react-icons/lib/fa/clock-o';
import Suitcase from 'react-icons/lib/fa/suitcase';
import '../common.css';

const Info = (props) => (
    <div className="col-md-12">
        <li className="info-years">
            <p>
                {'years in united states'}
                <span className="icon">
                    <ClockO />
                </span>
            </p>
            <p className="info-text">{props.years}</p>
        </li>
        <li className="info-occupation">
            <p>
                {'occupation'}
                <span className="icon">
                    <Suitcase />
                </span>
            </p>
            <p className="info-text">{props.occupation}</p>
        </li>
        <li className="info-country">
            <p>
                {'Country of Origin'}
                <span className="icon">
                    <Flag />
                </span>
            </p>
            <p className="info-text">{props.country}</p>
        </li>
        <li className="info-data">
            <p>
                {'Interview Date'}
                <span className="icon">
                    <Calendar />
                </span>
            </p>
            <p className="info-text">{props.date}</p>
        </li>
    </div>
);

export default Info;
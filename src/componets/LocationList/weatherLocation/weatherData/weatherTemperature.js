import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherTemperature = ({temperature, weatherState, unitsTemp}) => {
    if (typeof weatherState == 'undefined' || weatherState.length === 0) {
        weatherState = 'question';
    }
    return (
    <div className="weatherTemperatureCont">
        <FontAwesomeIcon className="iconTemperature" icon={weatherState} color="navy" fixedWidth/>
        <p className="temperature">{`  ${temperature} `} <span>{unitsTemp}</span></p>
    </div>
)};
WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};
export default WeatherTemperature;
import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './weatherExtraInfo';
import {getUnits} from '../../../../services/transformWeather'
import WeatherTemperature from './weatherTemperature';
import './styles.css'


const WeatherData = ({data , units}) => {
    const unitsObj= getUnits(units);
    const {temperature, weatherState, humidity, wind} = data;
    return (
    <div className='weatherDataCont'>
        <WeatherTemperature unitsTemp={unitsObj.temperature} temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} unitsSpeed={unitsObj.speed}/>
    </div>)
    };

    WeatherData.propTypes = {
        data: PropTypes.shape({
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.number.isRequired
        }),
    }
export default WeatherData;
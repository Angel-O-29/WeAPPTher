import React from 'react';
import PropTypes from 'prop-types'; // ES6

const WeatherExtraInfo = ({humidity, wind, unitsSpeed}) => {

    return (
        <div className='weatherExtraInfoCont'>
            <p className="humidity">Humedad: <span>{` ${humidity} %`}</span></p>
            <p className="wind">Vientos: <span>{` ${wind} ${unitsSpeed}`}</span></p>
        </div>
    );
}
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number,
    wind: PropTypes.number
}
export default WeatherExtraInfo;
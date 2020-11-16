import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Title from './title'
import WeatherData from '../../LocationList/weatherLocation/weatherData'


function ForCastItem({weekDay, data, units}){
        return (
            <div className='foreCastItemCont container'>
                <Title day={weekDay} />
                <WeatherData data={data} units={units} />
            </div>
        );
}

ForCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired
    }),
    units: PropTypes.string.isRequired
}
export default ForCastItem;

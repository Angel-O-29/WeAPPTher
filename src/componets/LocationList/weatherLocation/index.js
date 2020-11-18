import React from 'react';
import Location from './location';
import Weatherdata from './weatherData/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {getData} from './../../../services/transformWeather';
import './styles.css';
import PropTypes from 'prop-types'; // ES6


const WeatherLocation = ({onWeatherLocationClick, units, city, data}) => { 

    return (
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}/>
            <div style={{'height':'78%'}}>{data ? <Weatherdata data={data} units={units}/> : <div className='loading weatherDataCont'  ><FontAwesomeIcon icon='spinner' pulse/> </div> }</div>
        </div>
        )
}
WeatherLocation.propTypes = {
    city: PropTypes.string,
    data: PropTypes.object,
    units: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
const areCityPropsEqual = (prevProps, nextProps) => {
    return (prevProps.city === nextProps.city)

}
export default React.memo(WeatherLocation,areCityPropsEqual); 
    
/*
    componentWillMount() {
        //console.log('2');
        const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=dbe54650a9f2e7b5f7e01836c9980bf2&units=${this.state.units}`;
        this.handleUpdate(api_weather);
    }
    como vemos se puede colocar el api fetch en el component will mount pero es recomendable hacerlo en el did mount
    
    componentDidMount() {
        //console.log('4');
        this.handleUpdateUnits(this.state.city, this.state.units)
    }
    /*
    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.ft) {
            console.log('1')
            return (this.props.units !== nextProps.units) 
        } else {
            return true
        }
    }/*
    */
    /*
    componentWillUpdate(nextProps, nextState) {
        console.log('1 actualizado');
        console.log(nextProps);console.log(nextState);
    }*/

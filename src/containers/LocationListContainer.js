import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSelectedCity,setMenuDisplay, setCity, setWeather} from '../actions';
import { getActualCity, getInUseUnits,/* isSetForecastDataFromCities, */getWeatherCities} from '../reducer';
import PropTypes from 'prop-types';
import LocationList from '../componets/LocationList'

class LocationListContainer extends React.Component {

   /* handleUpdateUnits = (city, units) => {
        
        const api_weather = `${weatherLink}?q=${city}&appid=dbe54650a9f2e7b5f7e01836c9980bf2&units=${units}`;

       }*/

    componentDidMount() {
        this.updateCityData()

    }
    componentDidUpdate(prevProps) {
        if (this.props.units === prevProps.units) {
            //console.log('iguales')
        } else {
            this.updateCityData()
            //console.log('diferentes')
        }
    }
    updateCityData() {
        const data = [
            this.props.cities,
            this.props.units
        ]
        this.props.setWeather(data)
    }
    handleSelectedLocation = (city) => {
        //console.log('handleSelectedLocation');
        const data = [
            city.key,
            city.country,
            this.props.units
        ];
        
        this.props.setMenuDisplay('deployed');
        this.props.setSelectedCity(data);//actions.setSelectedCity(data)

    }
    render() {
        return (
            <LocationList cities={this.props.citiesWeather} units={this.props.units} onSelectLocation={this.handleSelectedLocation}></LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setweather: PropTypes.array,
    setMenuDisplay: PropTypes.func.isRequired,
    units: PropTypes.string.isRequired,
    citiesWeather: PropTypes.array,
}
const mapStateToProps = state => ({
    units: getInUseUnits(state),
    citiesWeather: getWeatherCities(state),
    city: getActualCity(state)[0],
})
/* forma solo con redux*/
const actions = {
    setSelectedCity,
    setCity,
    setWeather,
    setMenuDisplay
}
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
/* forma con react redux
const mapDispatchToProps = dispatch => (
    { setSelectedCity: value =>dispatch(setSelectedCity(value)),
        setMenuDisplay: value =>dispatch(setMenuDisplay(value)),
        setCity: value =>dispatch(setCity(value)),
        setWeather: value => dispatch(setWeather(value))
    })

*/

const LocationListContainerConnected = connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)

export default LocationListContainerConnected;
import React, {Suspense} from 'react';
import PropTypes from 'prop-types'; // ES6
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WeatherLocation = React.lazy(()=> import('./weatherLocation'))

/*const cities2 = [
    'Caracas',
    'La Guaira'
]*/
class LocationList extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        const next = nextProps.cities[0];
        const actual = this.props.cities[0];
        return (next !== actual)
    }
    
    handleWeatherLocationClick = (city) => { 
        console.log(city);
        this.props.onSelectLocation(city);
    };
    strToComponent = (cities, units) => {
        if (cities) {
            return(
                cities.map( 
                    (city, i ) => (
                        <WeatherLocation
                            key={`weatherLocation_${i}`} 
                            city={city.name} 
                            data={city.data} 
                            units={units}
                            onWeatherLocationClick= {()=> this.handleWeatherLocationClick(city)}>
                        </WeatherLocation>
                    )
                )
            )
        }
        }

    render() {
        const {cities, units} = this.props;
        return (
            <div className="locationList">
                <Suspense fallback={<div className='firstLoading'  > <div className='loadingText'>Cargando Pronostico actual del Clima...</div><FontAwesomeIcon icon='spinner' pulse/> </div>} >
                {this.strToComponent(cities, units)} 
                </Suspense>
            </div>
    );
    }
    
}
LocationList.propType ={
    cities: PropTypes.array.isRequired,
    onSelectLocation: PropTypes.func
}
export default LocationList;

import React from 'react';
import { connect } from 'react-redux';
import {setMenuDisplay} from '../actions';
import { getForecastDataFromCities, getActualCity, getInUseUnits, getDisplayMenu, getForecastState } from '../reducer';
import PropTypes from 'prop-types';
import ForCastExtended from '../componets/ForCastExtended'


class ForeCastExtendedContainer extends React.Component {

    handleCloseMenu = () => {
        this.props.setMenuDisplay(null);
        console.log('handleSelectedLocation');
    }
    
    render() {
        const {city, ForecastState} = this.props;
        
        let frase = '';
        if(city !== 'No se selecciono ninguna ciudad') {
            frase ='Pronostico Extendido Para '
        }
        return (
            <ForCastExtended city={`${frase} ${city}`} foreCastData={this.props.cityForecast}  state={ForecastState} units={this.props.units1} menu={this.props.menu} onCloseInfo={() => this.handleCloseMenu()} />
        )
    }
}

ForeCastExtendedContainer.propTypes = {
    setMenuDisplay: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    units1: PropTypes.string.isRequired,
}
const mapDispatchToProps = dispatch => (
    {
        setMenuDisplay: value =>dispatch(setMenuDisplay(value)),
    })

const mapStateToProps = state => ({
    city: getActualCity(state)[0],
    cityForecast: getForecastDataFromCities(state),
    ForecastState: getForecastState(state),
    units1: getInUseUnits(state),
    menu: getDisplayMenu(state)
})
const ForeCastExtendedContainerConnected = connect(mapStateToProps, mapDispatchToProps)(ForeCastExtendedContainer)

export default ForeCastExtendedContainerConnected;
import React from 'react';
import { connect } from 'react-redux';
import {setSelectedCity, setUnits, setForecastDataClear} from '../actions';
import { getActualCity, getInUseUnits} from '../reducer';
import PropTypes from 'prop-types';
import Barra from '../componets/barra'


class BarraContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps !== this.props)
    }
    

    onToggleUnits = () => {
        let units = '';
        if (this.props.units === 'metric') {
            units = 'imperial';
        } else {
            units = 'metric';
        }        
        const data = [
            this.props.city[0],
            this.props.city[1],
            units
        ];
        this.props.setDataClear()
        this.props.setSelectedCity(data);

        this.props.setUnits(units)
    }

    render() {
        
        let {city} = this.props;
        if(city === null) {
            city='No se selecciono ciudad'
        } else {
            city = 'Pronostico Extendido Para ' + city;
        }
        return (
            <Barra ToggleUnits={() => this.onToggleUnits()}  />
        )
    }
}

BarraContainer.propTypes = {
    setUnits: PropTypes.func.isRequired,
    units: PropTypes.string.isRequired
}
const mapDispatchToProps = dispatch => (
    {
        setUnits: value =>dispatch(setUnits(value)),
        setDataClear: value =>dispatch(setForecastDataClear()),
        setSelectedCity: value =>dispatch(setSelectedCity(value))
    })

const mapStateToProps = state => ({
    city: getActualCity(state),
    units: getInUseUnits(state)
})
const BarraContainerConnected = connect(mapStateToProps, mapDispatchToProps)(BarraContainer)

export default BarraContainerConnected;
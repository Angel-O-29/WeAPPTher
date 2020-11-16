import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
    const {city} = props; // object destructuring (ES6) es una abreviatura de const city = props.city
    // para dar un nombre distinto seria const {city: ciudad} = props y asi la var ciudad guarda el valor city
    return (
        <div className="locationCont">
            <h2>{city}</h2>
        </div>);
};
Location.propTypes = {
    city: PropTypes.string
};
/*
o se puede hacer asi
const Location = ({city}) => (
        <div>
            <h1>{city}</h1>
        </div>);
*/

export default Location;
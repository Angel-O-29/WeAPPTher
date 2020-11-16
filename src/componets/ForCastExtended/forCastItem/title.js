import React from 'react';
import PropTypes from 'prop-types';

const Title = ({day}) => {
    return (
        <div className="locationCont">
            <h2>{day}</h2>
        </div>);
};
Title.propTypes = {
    day: PropTypes.string.isRequired
};
export default Title;
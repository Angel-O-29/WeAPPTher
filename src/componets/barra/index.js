import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Barra extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }
    render = () => {
        const {ToggleUnits} = this.props
        return (
        <div className="barraCont">
        <div onClick={ToggleUnits} className="barraIcon" ><FontAwesomeIcon icon='bars' /></div>
            <h1 className="barraTittle">We<span>APP</span>ther </h1>
        </div>
        )};
}
export default Barra; 
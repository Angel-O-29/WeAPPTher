import React, {Suspense} from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ForeCastItem = React.lazy(() => import('./forCastItem'));


function renderForCastItemDays(foreCastData, units) {
    let forecastItemArray = []
    if (foreCastData) {
        forecastItemArray= foreCastData.map((element, i) => {
            return (
                <Suspense fallback={<div className='loading'  ><FontAwesomeIcon icon='spinner' pulse/> </div>} >
                    <ForeCastItem key={`forCastItem_${i}`} data={element.data} units={units} weekDay={element.weekDay}/>
                </Suspense>
            )})
    } else {
        renderProgress('hola')
    }
    return forecastItemArray
}
function renderProgress(city) {
    if(city !== ' No se selecciono ninguna ciudad') {
    return(<div className='loading'  ><FontAwesomeIcon icon='spinner' pulse/> </div> )
    }
    
}
function closeInfo(onCloseInfo) {
    onCloseInfo();
}
const ForCastExtended = ({city, state , menu, units, onCloseInfo, foreCastData}) => {

            
            let class_names = 'details'
            if (menu != null) {
                class_names += ' detailsExpanded'
            }
        return (
            <div className={class_names}>
                <FontAwesomeIcon className='closeDetailsIcon' onClick={() => closeInfo(onCloseInfo)} icon='times-circle'/>
                <h2 className='detailsTitle'> {city} </h2>
                {(state !== undefined) ? renderForCastItemDays(foreCastData, units) : renderProgress(city)}
            </div>
        );
}

ForCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string,
    units:PropTypes.string.isRequired,
    foreCastData: PropTypes.array
}
export default ForCastExtended;

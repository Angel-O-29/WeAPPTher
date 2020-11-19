import React, {Suspense} from 'react';
import './App.css';
//import {store} from './store'; como vinculamos react-redux en el src/index.js no es necesario importarla
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BarraContainer = React.lazy(() => import('./containers/BarraContainer')) ;  
const LocationListContainer = React.lazy(() => import('./containers/LocationListContainer')) ; 
const ForeCastExtendedContainer = React.lazy(() => import('./containers/ForeCastExtendedContainer')) ; 
//import { render } from '@testing-library/react';

library.add(fab, fas);

const cities = [
  {city: 'Caracas', country: ''},
  {city: 'La Guaira', country: 'VE'},
  {city: 'Madrid', country: 'ES'},
  {city: 'La Paz', country: 'BO'},
  {city: 'Moscow', country: 'RU'},
  {city: 'Mexico City', country: 'MX'},
  {city: 'buenos Aires', country: 'AR'},
  {city: 'Bogotá', country: 'CO'},
  {city: 'Tokyo', country: ''}/* */
];/**/
class App extends React.Component {



  render() {
    return (
      <div className="App">
      <Suspense fallback= {<div className='firstLoading'  > <div className='loadingText'>Cargando App...</div> <FontAwesomeIcon icon='spinner' pulse/></div>} >
        <BarraContainer />
        <div className="flex-container container">
          <LocationListContainer cities={cities}></LocationListContainer>
          <ForeCastExtendedContainer />
        </div>
      </Suspense>
      </div> 
    );
  }
}

export default App;

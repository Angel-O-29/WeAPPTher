import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducer'

const initialState = {
    cities: {stateLoad: undefined},
    city: {actualCity: ['No se selecciono ninguna ciudad', null]},
    units: {inUse: 'metric'},
    menu: {display: null}
}

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
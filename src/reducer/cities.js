import {SET_FORECAST_DATA, SET_LOAD_FORECAST_DATA, SET_FORECAST_DATA_CLEAR, GET_WEATHER, SET_WEATHER} from './../actions';
import toPairs from 'lodash.topairs';
import {createSelector} from 'reselect';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:{
            const {city, forecastData} = action.value
            return {...state, [city]: {...state[city], forecastData: forecastData, forecastDataDate: new Date()} }; 
        }
        case SET_LOAD_FORECAST_DATA:{
            return {...state, stateLoad: action.value};
    }
        case SET_FORECAST_DATA_CLEAR:{
            return {};
    }
        case GET_WEATHER:{
            const city = action.value;
            return {...state, [city] : {...state[city], weather: null }};
    }
        case SET_WEATHER:{
            const {city1, data} = action.value
            return {...state, [city1]: {...state[city1],weather: data}};
        }

        default:
            return state;
    }
}

export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);

export const isSetForecastDataFromCities = createSelector((state) => {const isset = (city) => {return state[city] && state[city]['forecastData']}; return isset}, isset =>isset);

const fromObjToArray = (cities) => {const content = toPairs(cities).map(([key, value])=> ({key, name:value && value.weather && value.weather.city, data: value && value.weather && value.weather.data})); content.shift(); return (content)
}
export const getWeatherCities = createSelector(state => fromObjToArray(state), cities => cities)
 

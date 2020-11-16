import { combineReducers } from 'redux';
import {createSelector} from 'reselect';
import {cities, getForecastDataFromCities as _getForecastDataFromCities, isSetForecastDataFromCities as _isSetForecastDataFromCities, getWeatherCities as _getWeatherCities} from './cities';
import {city} from './city';
import {units} from './units';
import {menu} from './menu';

export default combineReducers({
    cities,
    city,
    units,
    menu
});


export const getActualCity = createSelector((state) => state.city.actualCity, actualCity => actualCity)
export const getForecastDataFromCities = createSelector((state) => state.cities, (state) => state.city.actualCity[0], _getForecastDataFromCities)
export const isSetForecastDataFromCities = createSelector((state) => state.cities, _isSetForecastDataFromCities);
export const getForecastState = createSelector((state) => state.cities['stateLoad'], load => load)
export const getInUseUnits = createSelector((state) => state.units.inUse, units => units);
export const getDisplayMenu = createSelector((state) => state.menu.display, menu => menu);
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities)
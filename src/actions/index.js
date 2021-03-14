import {GetArrayList, getData} from './../services/transformWeather';

export const SET_CITY ='SET_CITY';
export const SET_FORECAST_DATA ='SET_FORECAST_DATA';
export const SET_LOAD_FORECAST_DATA ='SET_LOAD_FORECAST_DATA';
export const SET_FORECAST_DATA_CLEAR ='SET_FORECAST_DATA_CLEAR';
export const SET_WEATHER ='SET_WEATHER';
export const GET_WEATHER ='GET_WEATHER';
export const SET_UNITS ='SET_UNITS';
export const SET_MENU_DISPLAY ='SET_MENU_DISPLAY';
const api_Key ='dbe54650a9f2e7b5f7e01836c9980bf2'
const forecastLink = 'https://api.openweathermap.org/data/2.5/forecast';
const weatherLink = 'https://api.openweathermap.org/data/2.5/weather';


const setForecastData = value => { return ({type: SET_FORECAST_DATA, value})}
const setLoadForecastData = value => { return ({type: SET_LOAD_FORECAST_DATA, value})}
const setWeatherCity = value => { return ({type: SET_WEATHER, value})}
const getWeatherCity = value => { return ({type: GET_WEATHER, value})}

export const setCity = value => ({type: SET_CITY, value});
export const setForecastDataClear = value => { return ({type: SET_FORECAST_DATA_CLEAR})}
export const setUnits = value => ({type: SET_UNITS, value});
export const setMenuDisplay = (value) => ({type: SET_MENU_DISPLAY, value});

export const setSelectedCity = (payload) => {
    return (dispatch, getState) => {
        const units = payload.pop()
        let coma = ''
        if (payload[1] !== '') {
            coma = ', '
        }
        const api_weather = `${forecastLink}?q=${payload[0]}${coma}${payload[1]}&appid=${api_Key}&units=${units}`;
        //activa en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        const state = getState();//devuelve el estado de la aplicacion
        const date = state.cities[payload[0]] && state.cities[payload[0]].forecastDataDate;
        const now = new Date()
        if (date && (now-date) < 2/*min*/ * 60/*seg*/ * 1000/*mseg*/) {
            return
        }
        dispatch(setLoadForecastData(undefined));
        fetch(api_weather).then(data => data.json()).then(weather_data => {
            //modifica el resultado de la promise (fetch)
            if (weather_data.cod === '200') {
                const arrayList = GetArrayList(weather_data);
                dispatch(setForecastData({city: payload[0], forecastData: arrayList}));
                dispatch(setLoadForecastData('Loaded'));
                //console.log(arrayList)
            }
        }).catch (err => {console.log('error: ' + err)}) 
        
    };
}

export const setWeather = (payload) => {
    
    const units = payload.pop()

    return dispatch => {
        payload[0].forEach(city => {
            dispatch(getWeatherCity(city.city))
            let coma = ''
            if(city.country !== ''){
                coma=', '
            }
            const api_weather= `${weatherLink}?q=${city.city}${coma}${city.country}&appid=${api_Key}&units=${units}`
            fetch(api_weather).then(data => data.json()).then(weather_data => {
                if (weather_data.cod === 200) {
                    const data = getData(weather_data)
                    const city1= city.city
                    
                    dispatch(setWeatherCity({city1,data}))
                } else {
                    const data = {data: {temperature: 0, weatherState: '', humidity: 0, wind: '? '}, city: '?, ?'}
                    dispatch(setWeatherCity({city,data}))
                }
            }).catch (err => {console.log('error: ' + err)}) 
        })
    };
}
/*
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.units !== this.props.units) {
            this.setState({data: null})
            const {city, country} = this.props;
            const location = city + ', ' + country
            this.handleUpdateUnits(location, this.props.units)
        }
    }
  


   handleUpdate = (api_weather) => {
    fetch(api_weather).then(data => data.json()).then(weather_data => {
        if (weather_data.cod === 200) {
            const data = getData(weather_data)
            this.setState( {
                data: data.data
                ,
                city: data.city,
                ft: null
            })
        } else {
            this.setState({data: {temperature: 0, weatherState: '', humidity: 0, wind: '? '}, city: '?, ?'})
        }
    }).catch (err => {console.log('error: ' + err)}) 
    
    }
*/
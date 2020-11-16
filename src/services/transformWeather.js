import { BOLT, DRIZZLE, CLOUD, SUN, RAIN, SNOW, WIND} from '../constants/weathers';
import moment from 'moment';
import 'moment/locale/es';


const getWeatherState = weather =>{
    switch (weather) {
        case 'Thunderstorm':
            return (BOLT);
        case 'Drizzle':
            return (DRIZZLE);
        case 'Rain':
            return (RAIN);
        case 'Snow':
            return (SNOW);
        case 'Clear':
            return (SUN);
        case 'Clouds':
            return (CLOUD);
        default:
            return (WIND);
    }
}
export const getData= (data) => {
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    const {main} = data.weather[0];
    const {name} = data;
    const {country} = data.sys;
    const state = getWeatherState(main);
    /*const tempC = temp - 273.15;*/
    return ({
        data: { temperature: Number(temp.toFixed(1)), weatherState: state, humidity: humidity, wind: speed},
        city: `${name}, ${country}`
    });
}
export const getDataList= (data) => {
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    const {main} = data.weather[0];
    const state = getWeatherState(main);
    /*const tempC = temp - 273.15;*/
    return ({
        data: { temperature: Number(temp.toFixed(1)), weatherState: state, humidity: humidity, wind: speed},
        weekDay: moment.unix(data.dt).utc().format('ddd hh:mm A'),
        dt: data.dt
    });
}

export const GetArrayList = (data) => {
        const {list} = data
        const dataList = list.map(item => {
            const itemData =getDataList(item)
            return itemData
        })
        const filterList = dataList.filter(item =>{ 
            return (
           // moment.unix(item.dt).utc().hour() === 5 ||
            moment.unix(item.dt).utc().hour() === 6 ||
            //moment.unix(item.dt).utc().hour() === 7 ||
            //moment.unix(item.dt).utc().hour() === 11 ||
            moment.unix(item.dt).utc().hour() === 12 ||
            //moment.unix(item.dt).utc().hour() === 13 ||
            //moment.unix(item.dt).utc().hour() === 17 ||
            moment.unix(item.dt).utc().hour() === 18 
            //|| moment.unix(item.dt).utc().hour() === 19
        )})
        
        return filterList
}

export const getUnits = (units) => {
    switch (units) {
        case 'metric':
            return ({temperature: 'C°', speed: 'm/s'})
        case 'imperial':
            return ({temperature: 'F°', speed: 'Mph'})
        default:
            return ({temperature: 'K°', speed: 'm/s'})
    }
}
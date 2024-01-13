import { LightningElement } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherApiController.getWeatherData';

export default class WeatherApiApp extends LightningElement {
city;
weatherIcon;
weatherText;

    handleCity(event){
this.city =event.target.value;
    }
    handleGetWeather(){
getWeatherData({city:this.city})
.then(response=>{
let weatherParseData = JSON.parse(response);
this.weatherIcon = weatherParseData.current.condition.icon;
this.weatherText = weatherParseData.current.condition.text;
})
.catch(error=>{
    this.weatherText = 'No Matching Locations Or City found';
    console.error('-----error-------',JSON.stringify(error));
})
    }
}

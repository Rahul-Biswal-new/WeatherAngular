import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient) { }

  getWeather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=0086dec4395e39282f21d54f6ae50867&units=metric');
  }
}

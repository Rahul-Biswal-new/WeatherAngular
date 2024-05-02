import { Component , OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  myWeather: any;
  temperature: number=0;
  feelsLikeTemp: number=0;
  humidity: number=0;
  pressure: number=0;
  summery: string = "";
  iconURL: string = "";
  city: string = "bhubaneswar";
  constructor(private weatherService: WeatherService){}

  ngOnInit() {
    this.weatherService.getWeather().subscribe({

      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summery = this.myWeather.weather[0].main;


        this.iconURL = "https://openweathermap.org/img/wn/" + this.myWeather.weather[0].icon +"@2x.png";
      },

      error: (error) => console.log(error.message),
      complete: () => console.log("API call completed")
    })
  }
}

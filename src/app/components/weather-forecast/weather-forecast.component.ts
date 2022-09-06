import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, observable } from 'rxjs';
import { WeatherRootObject } from 'src/app/weather-data';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weatherData: WeatherRootObject; 
  weatherDataLnL: WeatherRootObject;
  title: string;

  constructor(private weatherService: WeatherService) { 
    this.title = "Weather Forecast";
    this.weatherData = <WeatherRootObject>{};
    this.weatherDataLnL = <WeatherRootObject>{};
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(x => this.weatherData = x);
    this.weatherService.getWeatherDataUsingLangitudeAndLatitude('39.7456','-97.0892').subscribe(x => this.weatherDataLnL = x);
  }
}

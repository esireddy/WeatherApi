import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { WeatherRootObject } from '../weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<WeatherRootObject> {
    return this.http.get<WeatherRootObject>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
                    .pipe(
                      map((data: WeatherRootObject) => {
                        return data;
                      }));
  }

  getWeatherDataUsingLangitudeAndLatitude(latitude : string, longitude : string): Observable<WeatherRootObject> {
    return this.http.get<WeatherRootObject>(`https://api.weather.gov/points/${latitude},${longitude}`)
                    .pipe(
                      map((data: WeatherRootObject) => {
                        return data;
                      }));
  }
}

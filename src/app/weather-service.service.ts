

import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient,) { }



  getCityWather(){
    return this.http.get(
        'https://api.openweathermap.org/data/2.5/group?id=2759794,524901,2643743,2968815,3117735&units=metric&APPID=3d8b309701a13f65b660fa2c64cdc517'
    );
}

getCityWatherDetail(name){
  return this.http.get(
    'http://api.openweathermap.org/data/2.5/forecast?q='+ name + "&appid=3d8b309701a13f65b660fa2c64cdc517"
);
}
}
// Request URL: https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=55.7522&lon=37.6156&exclude=current,minutely,daily&APPID=dfcc4c8ffb4d85e5183930398cbcacff

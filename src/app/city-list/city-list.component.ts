import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  Watherdata: any;

  constructor(private router: Router, private watherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.getCityWather();
  }

  getCityWather() {
    this.watherService.getCityWather().subscribe(
      (res: any) => {
        console.log(res.list);
        this.Watherdata = res.list;
      
        
      },
      err => {
        console.log(err.detail)
      });
  }

 

  viewDetail(name) {
    this.router.navigate(['./cityweather', name]);
  }


}

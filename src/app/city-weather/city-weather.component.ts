import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  selectedCityName: string;
  validationMessage: any = {};
  CityWatherdata: any;
 
  constructor(private route: ActivatedRoute, private router: Router,private toastr: ToastrService, private watherService:WeatherServiceService) {
    this.selectedCityName = this.route.snapshot.paramMap.get('name');
  
  }

  ngOnInit(): void {
    this.getCityWatherDetail()
  }
 
  getCityWatherDetail() {
    this.watherService.getCityWatherDetail(this.selectedCityName).subscribe(
      (res: any) => {
        console.log(res.list);
        this.CityWatherdata = res.list;
      
        
      },
      err => {
        console.log(err.detail)
      });
  }

  goToList() {
    this.router.navigate(['./cityList']);
  }

}

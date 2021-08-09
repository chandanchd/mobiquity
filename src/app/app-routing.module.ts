import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: 'loginorsignup', component: LoginComponent
  },
  {
    path: 'cityList', component: CityListComponent
  },

  {
    path: 'cityweather/:name', component: CityWeatherComponent
  },
  {
    path: '', redirectTo: 'loginorsignup', pathMatch: 'full'
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

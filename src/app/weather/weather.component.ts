import { Component, OnInit } from '@angular/core';
import { City } from '../core/interfaces/city';
import { CitiesService } from '../core/services/city.service';

@Component({
 selector: 'app-weather',
 templateUrl: './weather.component.html',
 styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

 cities: Array<City> = [];
 chosenCity!: number; // create variable for saving current (chosen) city
 // create variable for saving current (chosen) city

 constructor(private citiesService: CitiesService) { }

 ngOnInit() {
   this.cities = this.citiesService.getCities();
 }

 onChooseCity(index: number): void {
   console.log(index); // create method, which will handle choose of the city
 this.chosenCity = index;
}

}
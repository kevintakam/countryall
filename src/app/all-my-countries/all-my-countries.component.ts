import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
@Component({
  selector: 'app-all-my-countries',
  templateUrl: './all-my-countries.component.html',
  styleUrls: ['./all-my-countries.component.css'],
})
export class AllMyCountriesComponent implements OnInit {
  countriesData!: any[];
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {
    
    this.apiservice.getCountryData().subscribe((data) => {
      this.countriesData = data;
      console.log(this.countriesData);
    });
  }
}

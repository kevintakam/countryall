import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-america-countries',
  templateUrl: './america-countries.component.html',
  styleUrls: ['./america-countries.component.css'],
})
export class AmericaCountriesComponent {
  countriesData!: any[];
  americaCountries!: any[];
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {
    this.apiservice.getCountryData().subscribe((data) => {
      this.countriesData = data;
      this.filterAmericaCountries();
    });
  }
  filterAmericaCountries(): void {
    this.americaCountries = this.countriesData.filter(
      (country) => country.region === 'Americas'
    );
  }
}

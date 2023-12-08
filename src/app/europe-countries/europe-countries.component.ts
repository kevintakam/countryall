import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-europe-countries',
  templateUrl: './europe-countries.component.html',
  styleUrls: ['./europe-countries.component.css'],
})
export class EuropeCountriesComponent {
  countriesData!: any[];
  europeanCountries!: any[];
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {
    this.apiservice.getCountryData().subscribe((data) => {
      this.countriesData = data;
      this.filterEuropeanCountries();
    });
  }
  filterEuropeanCountries(): void {
    this.europeanCountries = this.countriesData.filter(
      (country) => country.region === 'Europe'
    );
  }
}

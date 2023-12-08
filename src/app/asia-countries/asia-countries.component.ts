import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-asia-countries',
  templateUrl: './asia-countries.component.html',
  styleUrls: ['./asia-countries.component.css'],
})
export class AsiaCountriesComponent {
  countriesData!: any[];
  asiaCountries!: any[];
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {
    this.apiservice.getCountryData().subscribe((data) => {
      this.countriesData = data;
      this.filterAsiaCountries();
    });
  }
  filterAsiaCountries(): void {
    this.asiaCountries = this.countriesData.filter(
      (country) => country.region === 'Asia'
    );
  }
}

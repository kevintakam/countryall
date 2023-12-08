import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-africa-countries',
  templateUrl: './africa-countries.component.html',
  styleUrls: ['./africa-countries.component.css'],
})
export class AfricaCountriesComponent {
  countriesData!: any[];
  africaCountries!: any[];
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {
    this.apiservice.getCountryData().subscribe((data) => {
      this.countriesData = data;
      this.filterAfricaCountries();
    });
  }
  filterAfricaCountries(): void {
    this.africaCountries = this.countriesData.filter(
      (country) => country.region === 'Africa'
    );
  }
}

import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-oceanie',
  templateUrl: './oceanie.component.html',
  styleUrls: ['./oceanie.component.css'],
})
export class OceanieComponent {
  countriesData!: any[];
  OceaniaCountries!: any[];
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {
    this.apiservice.getCountryData().subscribe((data) => {
      this.countriesData = data;
      this.filterOceaniaCountries();
    });
  }
  filterOceaniaCountries(): void {
    this.OceaniaCountries = this.countriesData.filter(
      (country) => country.region === 'Oceania'
    );
  }
}

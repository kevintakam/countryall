import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  constructor(
    private apiservice: ApiserviceService,
    private route: ActivatedRoute
  ) {}
  country: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const countryCode = params['code'];
      console.log(countryCode);
      this.apiservice.getCountryByCode(countryCode).subscribe(
        (data) => {
          this.country = data;
          console.log(data);
          console.log(this.country[0].languages);
          console.log(this.country[0].currencies);
        },
        (error) => console.error('API Error:', error)
      );
    });
  }
  getLanguages(languages: any): string[] {
    return Object.values(languages);
  }
  getcurrencies(curr: any): string[] {
    return Object.keys(curr);
  }
  getmaps(maps: any): string[] {
    return Object.keys(maps);
  }
}

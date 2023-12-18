import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'app-all-my-countries',
  templateUrl: './all-my-countries.component.html',
  styleUrls: ['./all-my-countries.component.css'],
})
export class AllMyCountriesComponent implements OnInit {
  countriesData!: any[];
  filteredCountries!: any[];
  searchCtrl!: FormControl;
  message: string = '';
  constructor(
    private apiservice: ApiserviceService,
    private searchService: SearchService
  ) {}
  ngOnInit(): void {
    // Souscrire aux changements de recherche
    this.searchCtrl = new FormControl('');

    // Souscrire aux changements de recherche avec distinctUntilChanged
    this.searchService.search$
      .pipe(distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.searchCtrl.setValue(searchTerm);
        this.filterCountries();
      });

    // Souscrire aux changements dans la zone de recherche
    this.searchCtrl.valueChanges.subscribe((value) => {
      this.searchService.setSearch(value);
    });

    this.apiservice.getCountryData().subscribe((data) => {
      this.countriesData = data;
      this.filterCountries();
    });
  }

  filterCountries() {
    if (this.searchCtrl && this.searchCtrl.value) {
      const searchTerm = this.searchCtrl.value.toLowerCase();
      this.apiservice.getCountriesContains(searchTerm).subscribe(
        (result) => {
          if (result.length > 0) {
            this.filteredCountries = result;
            this.message = '';
          } else {
            this.filteredCountries = [];
            this.message = 'Country no found : ' + searchTerm;
          }
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    } else {
      this.filteredCountries = this.countriesData;
    }
  }
}

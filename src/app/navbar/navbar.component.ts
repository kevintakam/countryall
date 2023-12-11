import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchCtrl!: FormControl<string>;

  constructor(
    private searchService: SearchService,
    private apiService: ApiserviceService
  ) {}

  onSearchChange(event: Event): void {
    // Vérifier si la cible de l'événement est un input
    if (event.target instanceof HTMLInputElement) {
      const searchTerm = event.target.value;
      this.searchService.setSearch(searchTerm);

      // Utilisez votre service pour effectuer la recherche ici
      this.apiService.getCountriesContains(searchTerm).subscribe((result) => {
        // Traitez le résultat ici
        console.log(result);
      });
    }
  }
}

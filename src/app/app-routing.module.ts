import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuropeCountriesComponent } from './europe-countries/europe-countries.component';
import { AsiaCountriesComponent } from './asia-countries/asia-countries.component';
import { AmericaCountriesComponent } from './america-countries/america-countries.component';
import { AfricaCountriesComponent } from './africa-countries/africa-countries.component';
import { AllMyCountriesComponent } from './all-my-countries/all-my-countries.component';
import { OceanieComponent } from './oceanie/oceanie.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'all-my-countries',
    component: AllMyCountriesComponent,
  },
  {
    path: 'europe-countries',
    component: EuropeCountriesComponent,
  },
  {
    path: 'africa-countries',
    component: AfricaCountriesComponent,
  },
  {
    path: 'america-countries',
    component: AmericaCountriesComponent,
  },
  {
    path: 'asia-countries',
    component: AsiaCountriesComponent,
  },
  {
    path: 'oceanie',
    component: OceanieComponent,
  },
  {
    path: 'country-details/:code',
    component: CountryDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '', // Route par défaut (page d'accueil)
    redirectTo: 'all-my-countries', // Redirigez vers le formulaire de connexion
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

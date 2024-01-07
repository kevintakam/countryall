import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllMyCountriesComponent } from './all-my-countries/all-my-countries.component';
import { EuropeCountriesComponent } from './europe-countries/europe-countries.component';
import { AsiaCountriesComponent } from './asia-countries/asia-countries.component';
import { AfricaCountriesComponent } from './africa-countries/africa-countries.component';
import { AmericaCountriesComponent } from './america-countries/america-countries.component';
import { OceanieComponent } from './oceanie/oceanie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllMyCountriesComponent,
    EuropeCountriesComponent,
    AsiaCountriesComponent,
    AfricaCountriesComponent,
    AmericaCountriesComponent,
    OceanieComponent,
    CountryDetailsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}

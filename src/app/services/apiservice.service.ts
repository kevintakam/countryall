import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}
  ApiUrl = 'https://restcountries.com/v3.1/all';

  getCountryData(): Observable<any> {
    return this.http.get<any[]>(`${this.ApiUrl}`);
  }

  getCountriesContains(search: string): Observable<any[]> {
    return this.http
      .get<any[]>(this.ApiUrl)
      .pipe(
        map((countries) =>
          countries.filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
  }

  getCountriesStartsWith(letter: string): Observable<any[]> {
    return this.http
      .get<any[]>(this.ApiUrl)
      .pipe(
        map((countries) =>
          countries.filter((country) =>
            country.name.common.toLowerCase().startsWith(letter.toLowerCase())
          )
        )
      );
  }
}

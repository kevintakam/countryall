import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}
  ApiUrl = 'https://restcountries.com/v3.1/all';
  ApiCode = 'https://restcountries.com/v3.1/alpha/';
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
  private countryCodeSource = new BehaviorSubject<string | null>(null);
  countryCode$ = this.countryCodeSource.asObservable();

  setCountryCode(code: string) {
    this.countryCodeSource.next(code);
  }
  getCountryByCode(code: string): Observable<any> {
    const url = `${this.ApiCode}${code}`;
    return this.http.get<any>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}
  ApiUrl = 'https://restcountries.com/v3.1/all';

  getCountryData(): Observable<any> {
    return this.http.get<any[]>(`${this.ApiUrl}`);
  }
}

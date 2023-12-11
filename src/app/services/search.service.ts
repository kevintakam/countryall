// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  public search$: Observable<string> = this.searchSubject.asObservable();
  searchResults$: any;

  setSearch(search: string) {
    this.searchSubject.next(search);
  }
}

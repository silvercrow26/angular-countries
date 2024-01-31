import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`)
      .pipe(
        //Map sirve para transformar la información
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/region/${term}`)
      .pipe(
        catchError(() => of([]))
      )
  }
}

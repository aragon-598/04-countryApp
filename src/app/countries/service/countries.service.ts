import { HttpClient } from '@angular/common/http';
import { Injectable, untracked } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interface/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string ='https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  getCountriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/${url}`)
                      .pipe(
                        catchError(() => of([])),//el array vacío es de tipo obsevable<Country>
                        // delay(2000)
                      );
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).
                    pipe(
                      map(countries => countries.length>0?countries[0]:null ),
                      catchError(() => of(null))
                    );
  }

  // searchCapital(term:string):Observable<Country[]>{
  //   const url = `${this.apiUrl}/capital/${term}`;
  //   return this.http.get<Country[]>(url).
  //                   pipe(
  //                     catchError(() => of([]))//el array vacío es de tipo obsevable<Country>
  //                   );
  // }

  // searchCountry(term:string):Observable<Country[]>{
  //   const url = `${this.apiUrl}/name/${term}`;
  //   return this.http.get<Country[]>(url).
  //                   pipe(
  //                     catchError(() => of([]))//el array vacío es de tipo obsevable<Country>
  //                   );
  // }

  // searchRegion(region:string):Observable<Country[]>{
  //   const url = `${this.apiUrl}/region/${region}`;
  //   return this.http.get<Country[]>(url).
  //                   pipe(
  //                     catchError(() => of([]))//el array vacío es de tipo obsevable<Country>
  //                   );
  // }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Country } from '../interface/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string ='https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url).
                    pipe(
                      catchError(() => of([]))//el array vacío es de tipo obsevable<Country>
                    );
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url).
                    pipe(
                      catchError(() => of([]))//el array vacío es de tipo obsevable<Country>
                    );
  }

  searchRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url).
                    pipe(
                      catchError(() => of([]))//el array vacío es de tipo obsevable<Country>
                    );
  }

}

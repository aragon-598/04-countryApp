import { Component } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/countries.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries:Country[]=[]

  constructor(private countriesService:CountriesService) {}

  searchCountry(term:string):void{
    this.countriesService.searchCountry(term)
                          .subscribe(countries =>{
                            this.countries = countries;
                          })
  }
}

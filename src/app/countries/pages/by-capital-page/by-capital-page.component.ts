import { Component } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/countries.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries:Country[]=[];

  public isLoading:boolean = false;

  constructor(private countriesService:CountriesService) { }

  searchByCapital(term:string):void{
    this.isLoading=true;
    const url = `capital/${term}`
    this.countriesService.getCountriesRequest(url)
                          .subscribe(countries =>{
                            this.countries = countries;
                            this.isLoading=false;
                          })
  }

}

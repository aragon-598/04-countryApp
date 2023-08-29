import { Component } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/countries.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries:Country[]=[];

  constructor(private countriesService:CountriesService) {}

  searchRegion(region:string):void{
    const url = `region/${region}`
    this.countriesService.getCountriesRequest(url)
                          .subscribe(countries =>{
                            this.countries = countries;
                          })
  }

}

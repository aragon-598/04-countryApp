import { Component, Input } from '@angular/core';
import { Country } from '../../interface/countries.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [`
  #flag{
    width: 25px
  }
  `
  ]
})
export class CountryTableComponent {

 constructor() {}

 @Input()
 public countries: Country[]=[];

}

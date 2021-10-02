import { Component, OnInit } from '@angular/core';
import { Countries } from '../myclasses/countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

myCountries="My Favorite Countries"

countries_tab = [
  new Countries('Poland', 312679),
  new Countries('Denmark', 421321),
  new Countries('Germany', 6541223),
  new Countries('Russia', 63244253),
  new Countries('Ukraine', 532153),
]

  constructor() { }

  ngOnInit(): void {
  }

}

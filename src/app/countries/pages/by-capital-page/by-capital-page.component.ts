import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string) {
    this.countriesService.searchCapital(term)
    //Hay que suscribirse al observable para que este se pueda emitir
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}

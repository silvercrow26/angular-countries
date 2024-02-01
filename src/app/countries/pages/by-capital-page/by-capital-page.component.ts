import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital(term: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      //Hay que suscribirse al observable para que este se pueda emitir
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}

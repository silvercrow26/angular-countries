import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        //Recibe el valor anterior y su objetivo es regresar un nuevo observable
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) {
          return this.router.navigateByUrl('')
        }
        console.log('WE HAVE COUNTRY');
        return this.country = country;
      })
  }

  searchCountry(code: string) {
    this.countriesService.searchCountryByAlphaCode(code)
      .subscribe(country => {
        console.log(country);
      })
  }
}

import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ByCapitalPageComponent } from '../../../countries/pages/by-capital-page/by-capital-page.component';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();


  emitValue(value: string): void {
    this.onValue.emit(value);
  }

}

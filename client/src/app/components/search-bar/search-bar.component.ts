import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
    public textValue = 'initial';
    @Output() searchValue: EventEmitter<string> = new EventEmitter();

    public logText(value: string): void {
     this.searchValue.emit(value);
  }
}

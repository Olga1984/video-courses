import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public textValue = 'initial value';

  public logText(value: string): string {
      console.log(`Text changed to '${value}`);
      return value;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    public search: string;
    public searchHandler(searchText: string): void {
        this.search = searchText;
    }
}

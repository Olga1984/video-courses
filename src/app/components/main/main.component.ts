import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    public search: string;
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }
    public searchHandler(searchText: string): void {
        this.search = searchText;
    }
    reRouteToCreatePage(): void {
        this.router.navigate(['courses/', 'new' ]);
    }
}

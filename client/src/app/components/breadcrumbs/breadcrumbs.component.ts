import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumbs: any;
  public displayedBreadcrumbs: any;
  public subs: Subscription;

  constructor(
      private authenticationService: AuthenticationService,
      private activatedRoute: ActivatedRoute,
      private router: Router) {}
    public ngOnInit(): void {
        this.subs = this.router.events
                .pipe(filter((event) => event instanceof NavigationEnd),
                    map(() => this.activatedRoute),
                    map((route) => {
                        while (route.firstChild) { route = route.firstChild; }
                        return route;
                    }),
                    filter((route) => route.outlet === PRIMARY_OUTLET)
                ).subscribe((route) => {
                    this.breadcrumbs = [];
                    const label = route.snapshot.data.breadcrumb;
                    this.breadcrumbs.push({label});
                    this.displayedBreadcrumbs = label;
                });
    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
  }
}

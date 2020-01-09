import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../interfaces/user';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public currentUser: User;
  public breadcrumbs: any;
  public displayedBreadcrumbs: any;
  public subs: Subscription;

  constructor(
      private authenticationService: AuthenticationService,
      private activatedRoute: ActivatedRoute,
      private router: Router) {}
    public ngOnInit(): void {
        this.subs = this.authenticationService.currentUser.subscribe((x) => this.currentUser = x);
        const subscription = this.router.events
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
        this.subs.add(subscription);
    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';
import { Observable, Subject } from 'rxjs';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public isAuth$: Observable<boolean> = this.authorizationService.autenticated();
  private unsubscribe$ = new Subject<void>();
  public breadcrumbs;
  private activatedRoute: ActivatedRoute;
  private router: Router;

  constructor(
      private authorizationService: AuthorizationService,
              activatedRoute: ActivatedRoute,
              router: Router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
  }
  ngOnInit(): void {
      this.authorizationService.autenticated()
          .pipe(
              filter((isAuth) => !!isAuth),
              switchMap(() => {
               this.router.events
                      .pipe(
                          takeUntil(this.unsubscribe$),
                          filter((event) => event instanceof NavigationEnd),
                          map(() => this.activatedRoute),
                          map((route) => {
                              while (route.firstChild) {
                                  route = route.firstChild;
                              }
                              return route;
                          }))
                      .subscribe((route) => {
                          this.breadcrumbs = [];
                          const routeData = route.snapshot.data;
                          const label = routeData.breadcrumb;
                          this.breadcrumbs.push({
                              label
                          });
                      });
              }));
  }
    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
  }
}

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET} from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';
import { Subject } from 'rxjs';
import {AuthenticationService} from '../../services/authentication.service';
import { User } from '../../interfaces/user';


@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public currentUser: User;
  private unsubscribe$ = new Subject<void>();
  public breadcrumbs;
  private activatedRoute: ActivatedRoute;
  private router: Router;

  constructor(
      private authenticationService: AuthenticationService,
              activatedRoute: ActivatedRoute,
              router: Router)
  {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
    ngOnInit(): void {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((route) => {
                while (route.firstChild) { route = route.firstChild; }
                return route;
            }))
            .pipe(filter((route) => route.outlet === PRIMARY_OUTLET), takeUntil(this.unsubscribe$))
            .subscribe((route) => {
                this.breadcrumbs = [];
                const routeData = route.snapshot.data;
                const label = routeData.breadcrumb;
                this.breadcrumbs.push({
                    label
                });
            });
    }
    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
  }
}

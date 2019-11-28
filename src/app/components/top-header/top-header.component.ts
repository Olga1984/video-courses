import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
    public isAuth$: Observable<boolean>;
    private router: Router;
    constructor(private authorizationService: AuthorizationService, router: Router) {
        this.router = router;
    }
    ngOnInit(): void {
        this.isAuth$ = of(this.authorizationService.autenticated());
    }
    public logoff(): void {
        this.router.navigate(['/logoff']);
        this.authorizationService.isAutenticated.emit(false);
        this.authorizationService.logout();
        this.isAuth$ = of(this.authorizationService.autenticated());
    }
}

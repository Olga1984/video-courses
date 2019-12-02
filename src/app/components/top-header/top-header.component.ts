import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
    public isAuth$: Observable<boolean> = this.authorizationService.autenticated();
    private router: Router;
    constructor(private authorizationService: AuthorizationService,
                router: Router) {
        this.router = router;
    }
    public logoff(): void {
        this.authorizationService.logout();
        this.isAuth$ = this.authorizationService.autenticated();
        this.authorizationService.isAutenticated.emit(false);
        this.router.navigate(['login']);
    }
}

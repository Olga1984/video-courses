import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserLogoutAction } from '../../pages/userlogin/state/user.actions';
import { Store } from '@ngrx/store';
import { UsersState } from '../../pages/userlogin/state/user.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private store$: Store<UsersState>
    ) {}

    public logout(): void {
        this.store$.dispatch(new UserLogoutAction());
        this.router.navigate(['/login']);
    }
}

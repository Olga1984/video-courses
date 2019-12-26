import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public currentUser: User;
    public subs: Subscription;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}
    public ngOnInit(): void {
        const subscription = this.authenticationService.currentUser.subscribe((x) => this.currentUser = x);
        // this.subs.add(subscription);
    }

    public logout(): void {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}

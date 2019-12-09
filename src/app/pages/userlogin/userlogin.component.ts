import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './userlogin.component.html',
    styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent {
    private submitted = false;
    private success = false;
    private router: Router;
    private firstName: FormControl = new FormControl('', []);
    private lastName: FormControl = new FormControl('', []);

    public loginForm: FormGroup = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
    });
  constructor(private authorizationService: AuthorizationService, router: Router) {
    this.router = router;
  }
    login(): void {
        this.submitted = true;
        this.success = true;
        this.authorizationService.login();
        this.authorizationService.isAutenticated.emit(true);
        this.router.navigate(['/courses']);
    }
}

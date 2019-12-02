import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserEntity } from '../../interfaces/user-entity';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent {
  public loginForm: IUserEntity;
  private router: Router;
  constructor(private authorizationService: AuthorizationService, router: Router) {
    this.router = router;
  }
  public onSubmit(): void {
    this.loginForm = {
      id: 1,
      firstName: 'ivan',
      lastName: 'Ivanov'
    };
  }
  public login(): void {
      this.authorizationService.login();
      this.authorizationService.isAutenticated.emit(true);
      this.router.navigate(['/courses']);
  }
}

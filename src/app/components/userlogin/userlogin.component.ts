import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserEntity } from '../../interfaces/user-entity';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent {
  public loginForm: IUserEntity;
  private router: Router;
  constructor(private auth: AuthorizationService, router: Router) {
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
    this.auth.login();
    this.router.navigate(['/courses']);
  }
}

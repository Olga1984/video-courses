import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserEntity } from '../../interfaces/user-entity';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent {
  public loginForm: IUserEntity;
  private router: Router;
  constructor(router: Router) {
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
    this.router.navigate(['/courses']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from '../../interfaces/user-entity';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent {
  public loginForm: UserEntity;
  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  onSubmit() {
    this.loginForm = {
      id: 1,
      firstName: 'ivan',
      lastName: 'Ivanov'
    };
  }
  login() {
    this.router.navigate(['/courses']);
  }
}

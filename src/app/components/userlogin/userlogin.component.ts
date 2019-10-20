import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from '../../interfaces/user-entity';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  submitted = false;
  loginForm: UserEntity;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.loginForm = {
      id: 1,
      firstName: 'ivan',
      lastName: 'Ivanov'
    };
    this.submitted = true;
  }
  login() {
    this.router.navigate(['/courses']);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './userlogin/userlogin.component';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserLoginComponent
  ]
})
export class LoginPageModule { }

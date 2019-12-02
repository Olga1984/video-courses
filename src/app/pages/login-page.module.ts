import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './userlogin/userlogin.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
      ReactiveFormsModule
  ],
  exports: [
    UserLoginComponent
  ]
})
export class LoginPageModule { }

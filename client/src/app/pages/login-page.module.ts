import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './userlogin/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../services/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { UserEffects } from './userlogin/state/user.effects';
import { usersReducer } from './userlogin/state/user.reducer';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      StoreModule.forFeature('users', usersReducer),
      EffectsModule.forFeature([
          UserEffects
      ]),
      TranslateModule.forChild()
  ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
  exports: [
    LoginComponent
  ]
})
export class LoginPageModule { }

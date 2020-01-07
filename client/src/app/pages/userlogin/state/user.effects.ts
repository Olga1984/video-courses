import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
    map,
    withLatestFrom
} from 'rxjs/operators';
import { UserAction, UserActionType } from './user.actions';
import { selectUserCreads } from './user.selectors';
import { AuthenticationService } from '../../../services/authentication.service';
import { UsersState } from './user.state';
import { first } from 'rxjs/internal/operators/first';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
    @Effect({dispatch: false})
    loginUserAction =
        this.actions$.pipe(
            ofType<UserAction>(UserActionType.LoginUser),
            withLatestFrom(this.store$.pipe(select(selectUserCreads))),
            map(([payload, user]) => {
                if (user.username && user.password) {
                    return this.authenticationService.login(user.username, user.password)
                        .pipe(first())
                        .subscribe(
                            (data) => {
                                window.location.reload();
                                this.router.navigate(['courses']);
                            });
                }
            })
        );

    @Effect({dispatch: false})
    UserLogOutAction =
        this.actions$
            .pipe(
            ofType<UserAction>(UserActionType.UserLogout),
            map(() => {
                return this.authenticationService.logout();
            })
        );

    constructor(
        private actions$: Actions,
        private store$: Store<UsersState>,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {}
}

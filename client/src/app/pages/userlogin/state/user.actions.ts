import { Action } from '@ngrx/store';
import { Credentials } from './user.state';
import { User } from '../../../interfaces/user';

export enum UserActionType {
    LoginUser = '[user] LoginUser',
    UserLogout = '[user] UserLogout',
    SetCreadentials = '[user] SetCreadentials'
}

export class LoginUserAction implements Action {
    readonly type = UserActionType.LoginUser;
}

export class UserLogoutAction implements Action {
    readonly type = UserActionType.UserLogout;
}

export class SetCreadentialsAction implements Action {
    readonly type = UserActionType.SetCreadentials;
    constructor(
        public payload: Credentials
    ) {}
}

export type UserAction = LoginUserAction |
    UserLogoutAction |
    SetCreadentialsAction;

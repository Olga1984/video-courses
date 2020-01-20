import { Credentials, initialUsersState, UsersState } from './user.state';
import { UserAction, UserActionType } from './user.actions';

export function usersReducer(state: UsersState = initialUsersState, action: UserAction): UsersState {
    switch (action.type) {
        case UserActionType.SetCreadentials:
            return {
                ...state,
                userCreads: action.payload
            };
        case UserActionType.LoginUser:
            return {
                ...state,
                loading: false
            };
        case UserActionType.UserLogout:
            return {
                ...state,
                userCreads: null
            };
        default:
            return state;
    }
}

export const userReducers = {
    urers: usersReducer
};

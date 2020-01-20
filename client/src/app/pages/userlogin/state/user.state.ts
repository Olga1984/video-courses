export interface Credentials {
    username: string;
    password: string;
}

export interface UsersState {
    loading: boolean;
    error: boolean;
    userCreads: Credentials;
}

export const initialUsersState: UsersState = {
    error: false,
    loading: false,
    userCreads: null
};

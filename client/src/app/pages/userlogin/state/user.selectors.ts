
// users
import { UsersState } from './user.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<UsersState>('users');
export const selectUserCreads = createSelector(selectFeature, (state: UsersState) => state.userCreads);
export const selectUserLoading = createSelector(selectFeature, (state: UsersState) => state.loading);

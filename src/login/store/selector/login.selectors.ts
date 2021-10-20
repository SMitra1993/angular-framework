import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '../reducer/login.reducer';

export const selectLoginKey = createFeatureSelector<fromLogin.LoginState>(
  fromLogin.loginFeatureKey
);
export const selectLogin = createSelector(
  selectLoginKey,
  (state: fromLogin.LoginState) => state.login
);

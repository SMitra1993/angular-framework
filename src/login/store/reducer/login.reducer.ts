import { Action, createReducer, on } from '@ngrx/store';
import { Login } from 'src/models/login';
import * as LoginAction from '../action/login.actions';

export const loginFeatureKey = 'login';

export interface LoginState {
  login: Login[];
}

export const initialState: LoginState = {
  login: [],
};

export const loginReducer = createReducer(
  initialState,
  on(LoginAction.loadLogins, (state: LoginState, { login }) => ({
    ...state,
    login: [...state.login, login],
  }))
);

export function reducer(state: LoginState | undefined, action: Action): any {
  return loginReducer(state, action);
}

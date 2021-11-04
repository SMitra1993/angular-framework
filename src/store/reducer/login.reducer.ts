import { Action, createReducer, on } from '@ngrx/store';
import { loginSuccess } from '../action/login.action';
import { initialState } from '../state/login.state';

export const _authService = createReducer(
  initialState,
  on(loginSuccess, (state: any, action: any) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export function authReducer(state: any, action: Action) {
  return _authService(state, action);
}

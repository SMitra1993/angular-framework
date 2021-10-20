import { Action, ActionReducer, createReducer, INIT, MetaReducer, on } from '@ngrx/store';
import { Login } from 'src/models/login';
import * as LoginAction from '../action/login.actions';

export const loginFeatureKey = 'login';

export interface LoginState {
  login: Login[];
  logout: Login[];
}

export const initialState: LoginState = {
  login: [],
  logout: []
};

export function logout(reducer: any): any {
  return (state: any, action: { type: any; } | null) => {
    if ( action != null && action.type === LoginAction.logout.type) {
      return reducer( undefined, {type: INIT});
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer[] = [ logout ];

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

import { createAction, props } from '@ngrx/store';
import { Login } from 'src/models/login';

export const loadLogins = createAction(
  '[Login] Load Logins',
  (login: Login) => ({ login })
);


export const logout = createAction(
  '[Users] logout request'
);
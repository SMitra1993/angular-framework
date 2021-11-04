import { createAction, props } from '@ngrx/store';
import { User } from 'src/models/user.model';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ userId: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);

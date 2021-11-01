import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from 'src/store/state/counter.state';
import * as fromLogin from '../reducer/login.reducer';

export const selectLoginKey = createFeatureSelector<fromLogin.LoginState>(
  fromLogin.loginFeatureKey
);

export const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});

export const selectLogin = createSelector(
  selectLoginKey,
  (state: fromLogin.LoginState) => state.login
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from 'src/store/state/counter.state';
import * as fromLogin from '../reducer/counter.reducer';

// export const selectLoginKey = createFeatureSelector<fromLogin.LoginState>(
//   fromLogin.loginFeatureKey
// );

export const COUNTER_STATE_NAME = 'counter';

export const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});

// export const selectLoginKey = createSelector(
//   selectLoginKey,
//   (state: fromLogin.LoginState) => state.login
// );

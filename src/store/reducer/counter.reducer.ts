import { Action, createReducer, INIT, MetaReducer, on } from '@ngrx/store';
import { initialCounterState } from '../state/counter.state';
import * as LoginAction from '../action/counter.actions';

export function logout(reducer: any): any {
  return (state: any, action: { type: any } | null) => {
    if (action != null && action.type === LoginAction.logout.type) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer[] = [logout];

const _counterReducer = createReducer(
  initialCounterState,
  on(LoginAction.increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(LoginAction.decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(LoginAction.reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(LoginAction.customIncrement, (state, action) => {
    return {
      ...state,
      counter: +state.counter + action.count,
    };
  }),
  on(LoginAction.changeChannelName, (state) => {
    return {
      ...state,
      channelName: 'Modified Tech Stack'
    }
  })
);

export function counterReducer(state: any, action: Action): any {
  return _counterReducer(state, action);
}

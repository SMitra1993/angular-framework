import { createAction, props } from '@ngrx/store';

export const logout = createAction('[Users] logout request');

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction(
  'customIncrement',
  props<{ count: number }>()
);

export const changeChannelName = createAction('changeChannelName');

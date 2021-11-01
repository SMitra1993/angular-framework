import { counterReducer } from '../store/reducer/login.reducer';
import { profileReducer } from '../store/reducer/profile.reducer';
import { CounterState } from '../store/state/counter.state';
import { ProfileState } from '../store/state/profile.state';

export interface AppState {
  counter: CounterState;
  profile: ProfileState;
}

export const appReducer = {
  counter: counterReducer,
  profile: profileReducer,
};

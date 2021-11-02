import { counterReducer } from '../store/reducer/login.reducer';
import { postReducer } from './reducer/post.reducer';
import { CounterState } from '../store/state/counter.state';
import { PostState } from './state/post.state';

export interface AppState {
  counter: CounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
};

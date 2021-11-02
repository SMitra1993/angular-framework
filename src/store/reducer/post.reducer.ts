import { Action, createReducer, on } from '@ngrx/store';
import { addPost } from '../action/post.action';
import { initialState } from '../state/post.state';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post: any = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  })
);

export function postReducer(state: any, action: Action) {
  return _postReducer(state, action);
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../state/post.state';

const getPostState = createFeatureSelector<PostState>('posts');

export const getPost = createSelector(getPostState, (state) => {
  return state.posts;
});

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../state/post.state';

export const POST_STATE_NAME = 'posts';
const getPostState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPost = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPostState,
  (state: any, props: any) => {
    return state.posts.find((post: any) => post.id === props.id);
  }
);

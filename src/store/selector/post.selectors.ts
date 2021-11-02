import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../state/post.state';

const getPostState = createFeatureSelector<PostState>('posts');

export const getPost = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPostState,
  (state: any, props: any) => {
    return state.posts.find((post: any) => post.id === props.id);
  }
);

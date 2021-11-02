import { Action, createReducer } from "@ngrx/store";
import { initialState } from "../state/post.state";

const _postReducer = createReducer(initialState);

export function postReducer(state: any, action: Action) {
    return _postReducer(state, action);
}
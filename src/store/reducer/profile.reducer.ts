import { Action, createReducer } from "@ngrx/store";
import { initialState } from "../../store/state/profile.state";

const _profileReducer = createReducer(initialState);

export function profileReducer(state: any, action: Action) {
    return _profileReducer(state, action);
}
import { combineReducers } from 'redux';

import todoReducer from './ducks/todo';
import { TodoState } from "./ducks/todo/types";

export interface AppState {
    todo: TodoState
}

export default combineReducers({
    todoReducer,
});

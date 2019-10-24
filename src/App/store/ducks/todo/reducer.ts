import { SET, ADD, Action } from "./actions";
import { TodoState } from './types';

const initialState: TodoState = {
  todos: []
};

export default function reducer(state = initialState, action: Action): TodoState {
  switch (action.type) {
    case SET:
      return {
        todos: action.payload.todos
      }

    case ADD:
      return {
        todos: [
          ...state.todos,
          action.payload.todo
        ]
      }

    default:
      return state;
  }
}

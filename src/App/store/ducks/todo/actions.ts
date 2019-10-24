import { Todo } from './types';

export const SET = 'todo/reducer/set';
export const ADD = 'todo/reducer/add';

interface SetAction {
  type: typeof SET;
  payload: {
    todos: Todo[];
  };
}

interface AddAction {
  type: typeof ADD;
  payload: {
    todo: Todo;
  };
}

export type Action = SetAction | AddAction;

export function setTodos(todos: Todo[]): Action {
  return {
    type: SET,
    payload: {
      todos,
    }
  };
}

let _todoSequence = 0;

export function addTodo(title: string): Action {
  return {
    type: ADD,
    payload: {
      todo: {
        id: ++_todoSequence,
        title
      }
    },
  };
}

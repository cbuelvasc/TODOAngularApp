import {createReducer, on} from '@ngrx/store';
import * as actions from './todo.actions';
import {Todo} from './models/todo';

export const initialState: Todo[] = new Array(new Todo('Kiss the love of your life'), new Todo('Smile and be happy'));

const _todoReducer = createReducer(initialState,
  on(actions.clearTODO, state => state.filter(todo => !todo.completed)),
  on(actions.addTODO, (state, {text}) => [...state, new Todo(text)]),
  on(actions.toggleTODO, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo;
      }
    });
  }),
  on(actions.toggleAllTODO, (state, {completed}) => {
    return state.map(todo => {
      return {...todo, completed: completed}
    });
  }),
  on(actions.editTODO, (state, {id, text}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {...todo, text: text}
      } else {
        return todo;
      }
    });
  }),
  on(actions.deleteTODO, (state, {id}) => state.filter(todo => todo.id !== id))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

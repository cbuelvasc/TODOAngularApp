import {Todo} from './todos/models/todo';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducers';
import {validFilters} from './filters/filter.actions';
import {filterReducer} from "./filters/filter.reducers";

export interface AppState {
  todos: Todo[];
  filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}


import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../app.reducers';
import {Todo} from '../models/todo';
import {validFilters} from "../../filters/filter.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = new Array();
  actualFilter: validFilters;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.actualFilter = filter;
    });
  }

}

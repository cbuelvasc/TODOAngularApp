import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as actions from "../../filters/filter.actions";
import {clearTODO} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = new Array('all', 'completed', 'pending');
  pendings: number = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => this.actualFilter = filter);
    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.pendings = state.todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({filter}));
  }

  clearCompleted() {
    this.store.dispatch(clearTODO());
  }
}

import {createAction, props} from '@ngrx/store';

type validFilters = 'all' | 'completed' | 'pending';

const setFilter = createAction('[Filter] Set Filter', props<{ filter: validFilters }>());

export {
  validFilters,
  setFilter
}

import {createAction, props} from '@ngrx/store';

const clearTODO = createAction('[TODO] Clear TODO');
const addTODO = createAction('[TODO] Add TODO', props<{text: string}>());
const toggleTODO = createAction('[TODO] Toggle TODO', props<{id: number}>());
const toggleAllTODO = createAction('[TODO] Toggle All TODO', props<{completed: boolean}>());
const editTODO = createAction('[TODO] Edit TODO', props<{id: number, text: string}>());
const deleteTODO = createAction('[TODO] Delete TODO', props<{id: number}>());

export {
  clearTODO,
  addTODO,
  toggleTODO,
  toggleAllTODO,
  editTODO,
  deleteTODO
}

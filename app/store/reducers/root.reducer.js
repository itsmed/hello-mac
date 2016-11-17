import { combineReducers } from 'redux';
import navigateReducer from './navigator.reducer';

import tasks from '../tasks';

const rootReducer = (state = {
currentTask: 0,
  tasks
}, action) => {
  switch(action.type) {
  case 'NAVIGATE_PREVIOUS':
    return navigateReducer(state, action);
    break;
  case 'NAVIGATE_NEXT':
    return navigateReducer(state, action);
    break;
  default:
    return state;
    break;
  }
}

export default rootReducer;

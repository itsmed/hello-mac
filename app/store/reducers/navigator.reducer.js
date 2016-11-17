import {
  NAVIGATE_PREVIOUS,
  NAVIGATE_NEXT,
  navigatePrevious,
  navigateNext
} from '../actions/navigator.actions';

import tasks from '../tasks';

const navigateReducer = (state = {
  tasks: tasks,
  currentTask: 0
}, action) => {
  switch(action.type) {
  case NAVIGATE_PREVIOUS:
    return Object.assign({}, state, {
      currentTask: --state.currentTask
    });
    break;
  case NAVIGATE_NEXT:
    return Object.assign({}, state, {
      currentTask: ++state.currentTask
    })
    break;
  default:
    return state;
    break;
  }
};

export default navigateReducer;

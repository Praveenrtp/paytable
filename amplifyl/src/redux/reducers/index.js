import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import courseReducer from './courseReducer';

const rootReducers = combineReducers({
  errors: errorReducer,
  courses: courseReducer
});

export default rootReducers;

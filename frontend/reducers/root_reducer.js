import { combineReducers } from 'redux';


import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities';


const rootReducer = combineReducers({
  session,
  errors,
  entities
});

export default rootReducer;

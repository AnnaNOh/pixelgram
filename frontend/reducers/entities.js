import { combineReducers } from 'redux';

import photos from './photos';
import users from './users_reducer';
import comments from './comments';

export default combineReducers({
  photos,
  users,
  comments
});

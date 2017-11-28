import merge from 'lodash/merge';

import {
  RECEIVE_USER
} from '../actions/users';


const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    default:
      return oldState;
  }
};

export default usersReducer;

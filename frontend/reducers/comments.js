import {
  RECEIVE_COMMENTS } from '../actions/comments';
import merge from 'lodash/merge';

const commentsReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    default:
      return oldState;
  }
};

export default commentsReducer;

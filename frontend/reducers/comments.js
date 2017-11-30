import {
  RECEIVE_COMMENTS, RECEIVE_AFTER_DELETE} from '../actions/comments';
import merge from 'lodash/merge';

const commentsReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, oldState, action.comments);
    case RECEIVE_AFTER_DELETE:
      return merge({}, action.comments);
    default:
      return oldState;
  }
};

export default commentsReducer;

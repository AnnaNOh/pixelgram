import {
  CURRENTLY_LOADING,
  RECEIVE_PHOTOS,
  RECEIVE_SINGLE_PHOTO
} from '../actions/photos';
import merge from 'lodash/merge';

const uiReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case CURRENTLY_LOADING:
      
      return merge({}, oldState, {loading: true});
    case RECEIVE_PHOTOS:
      setTimeout(function(){return merge({}, oldState, {loading: false});}, 5000);
    case RECEIVE_SINGLE_PHOTO:
      return merge({}, oldState, {loading: false});
    default:
      return merge({}, oldState, {loading: false});
  }
};

export default uiReducer;

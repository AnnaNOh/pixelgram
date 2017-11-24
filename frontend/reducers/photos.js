import {
  RECEIVE_PHOTOS,
  RECEIVE_SINGLE_PHOTO } from '../actions/photos';
import merge from 'lodash/merge';

const photosReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    default:
      return oldState;
  }
};

export default photosReducer;

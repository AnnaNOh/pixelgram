import {
  RECEIVE_PHOTOS,
  RECEIVE_SINGLE_PHOTO } from '../actions/photos';
import merge from 'lodash/merge';

const photosReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_SINGLE_PHOTO:
      return merge({}, oldState, {[action.photo.id]: action.photo});
    default:
      return oldState;
  }
};

export default photosReducer;

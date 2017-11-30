import {
  RECEIVE_PHOTOS,
  RECEIVE_SINGLE_PHOTO } from '../actions/photos';

import { RECEIVE_USER } from '../actions/users';
import merge from 'lodash/merge';

const photosReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_SINGLE_PHOTO:
      return merge({}, oldState, {[action.photo.id]: action.photo});
    case RECEIVE_USER:
      let newState = merge({}, oldState);
      Object.values(newState).forEach(function(photo){
        if (photo.author.id === action.user.id){
          newState[photo.id].author.followed = action.user.following;
        }
      });
      return newState;
    default:
      return oldState;
  }
};

export default photosReducer;

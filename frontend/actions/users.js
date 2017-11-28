import * as APIUtil from '../util/user';


export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUser = username => dispatch => {
  return APIUtil.getUser(username).then(user => dispatch(receiveUser(user)));
};

export const addFollow = user_id => dispatch => {
  return APIUtil.addFollow(user_id).then(user => dispatch(receiveUser(user)));
};

export const deleteFollow = user_id => dispatch => {
  return APIUtil.deleteFollow(user_id).then(user => dispatch(receiveUser(user)));
};

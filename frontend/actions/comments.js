import * as APIUtil from '../util/comments';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_AFTER_DELETE = "RECEIVE_AFTER_DELETE";

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveAfterDelete = comments => ({
  type: RECEIVE_AFTER_DELETE,
  comments
});

export const getComments = photo_id => dispatch => {
  return APIUtil.getComments(photo_id).then(comments => dispatch(receiveComments(comments)));
};


export const createComment = (photo_id, body) => dispatch => {
  return APIUtil.createComment(photo_id, body).then(comments => dispatch(receiveComments(comments)));
};

export const deleteComment = id => dispatch => {
  return APIUtil.deleteComment(id).then(comments => dispatch(receiveAfterDelete(comments)));
};

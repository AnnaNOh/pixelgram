import React from 'react';
import { connect } from 'react-redux';

import PhotoIndex from './photos_index';
import { fetchPhotos, createComment, deleteComment } from '../../actions/photos';
import { getUser, addFollow, deleteFollow } from '../../actions/users';

const mapStateToProps = state => ({
  photos: Object.values(state.entities.photos),
  currentUser: state.session.currentUser,
  user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  createComment: (photo_id, body) => dispatch(createComment(photo_id, body)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  getUser: username => dispatch(getUser(username)),
  addFollow: id => dispatch(addFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);

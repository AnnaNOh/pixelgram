import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PhotoIndex from './photos_index';
import { fetchPhotos, fetchPhoto} from '../../actions/photos';
import { getUser, addFollow, deleteFollow } from '../../actions/users';

const mapStateToProps = state => ({
  photos: Object.values(state.entities.photos),
  currentUser: state.session.currentUser,
  user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchPhoto: () => dispatch(fetchPhoto()),
  getUser: username => dispatch(getUser(username)),
  addFollow: id => dispatch(addFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoIndex));

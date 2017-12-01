import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Profile from './profile';
import { getProfilePhotos } from '../../../actions/photos';
import { getUser, addFollow, deleteFollow } from '../../../actions/users';

const mapStateToProps = (state) => {

  return({
    photos: Object.values(state.entities.photos),
    user: state.entities.users
  });
};


const mapDispatchToProps = dispatch => ({
  getProfilePhotos: username => dispatch(getProfilePhotos(username)),
  getUser: username => dispatch(getUser(username)),
  addFollow: id => dispatch(addFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

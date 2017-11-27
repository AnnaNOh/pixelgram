import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Profile from './profile';
import { getProfilePhotos } from '../../../actions/photos';


const mapStateToProps = (state) => ({
  photos: Object.values(state.entities.photos),
});


const mapDispatchToProps = dispatch => ({
  getProfilePhotos: username => dispatch(getProfilePhotos(username))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));


// photos: Object.values(state.entities.photos),
// username: ownProps.match.params.

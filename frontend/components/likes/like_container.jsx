import React from 'react';
import { connect } from 'react-redux';

import Like from './like';
import { addLike, deleteLike } from '../../actions/photos';


const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.photo_id],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  addLike: id => dispatch(addLike(id)),
  deleteLike: id => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);

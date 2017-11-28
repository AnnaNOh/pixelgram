import React from 'react';
import { connect } from 'react-redux';

import Explore from './explore';
import { getAllPhotos, createComment, deleteComment } from '../../../actions/photos';


const mapStateToProps = state => ({
  photos: Object.values(state.entities.photos),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllPhotos: () => dispatch(getAllPhotos()),
  createComment: (photo_id, body) => dispatch(createComment(photo_id, body)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);

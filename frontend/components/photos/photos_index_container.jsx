import React from 'react';
import { connect } from 'react-redux';

import PhotoIndex from './photos_index';
import { fetchPhotos, createComment, deleteComment } from '../../actions/photos';


const mapStateToProps = state => ({
  photos: Object.values(state.entities.photos)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  createComment: (photo_id, body) => dispatch(createComment(photo_id, body)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);

import React from 'react';
import { connect } from 'react-redux';

import PhotoIndex from './photos_index';
import { fetchPhotos } from '../../actions/photos';


const mapStateToProps = state => ({
  photos: Object.values(state.entities.photos)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);

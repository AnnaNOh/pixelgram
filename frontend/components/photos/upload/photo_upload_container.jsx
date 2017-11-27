import { connect } from 'react-redux';

import { uploadPhoto } from '../../../actions/photos';
import PhotoUpload from './photo_upload';

const mapStateToProps = ({errors, session}) => {
  return {
    currentUser: session.currentUser,
    errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: (photo) => dispatch(uploadPhoto(photo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);

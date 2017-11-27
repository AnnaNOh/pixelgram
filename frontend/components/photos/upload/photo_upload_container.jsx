import { connect } from 'react-redux';
import PhotoUpload from './photo_upload';
import { uploadPhoto } from '../../../actions/photos';

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

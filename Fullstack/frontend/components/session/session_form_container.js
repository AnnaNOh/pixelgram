
import {connect} from 'react-redux';

import {login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = "login";
  if (ownProps.location.pathname.slice(1)!=="login"){
    formType = "signup";
  }

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === "login" ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

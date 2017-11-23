import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  const formType = ownProps.location.pathname.slice(1);


  return{
    formType,
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Greeting);

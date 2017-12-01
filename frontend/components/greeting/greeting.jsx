import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Greeting extends React.Component {


  sessionLinks(){
    if (this.props.formType === "login"){
      return(
        <nav className="login-signup">
          <Link className="login-signup-link" to="/signup">Sign up</Link>
        </nav>
      );
    }
    else if (this.props.formType === "signup"){
      return(
        <nav className="login-signup">
          <Link className="login-signup-link" to="/login">Log in</Link>
        </nav>
      );
    }
  }

  personalGreeting(){

    let currentUser = this.props.currentUser;
    if (currentUser){
      return(
        <div className="header-group">
          <button onClick={()=> this.props.history.push('/explore')}>
            <i className="fa fa-map" aria-hidden="true"></i>
          </button>
          <button>
            <i className="fa fa-magic" aria-hidden="true"></i>
          </button>
          <button onClick={()=> this.props.history.push(`/user/${currentUser.username}`)}>
            <i className="fa fa-user-o" aria-hidden="true"></i>
          </button>
          <button className="header-button" onClick={this.props.logout}>
            Log out
          </button>
        </div>
      );
    }
    else {
      return(
        this.sessionLinks()
      );
    }
  }

  render(){
    return(
      <div>
        {this.personalGreeting()}
      </div>
    );
  }
}

export default withRouter(Greeting);

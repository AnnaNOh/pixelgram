import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Greeting extends React.Component {


  sessionLinks(){
    if (this.props.formType === "login"){
      return(
        <nav className="login-signup">
          <Link to="/signup">Sign up</Link>
        </nav>
      );
    }
    else if (this.props.formType === "signup"){
      return(
        <nav className="login-signup">
          <Link to="/login">Log in</Link>
        </nav>
      );
    }
  }


  personalGreeting(){
    let currentUser = this.props.currentUser;
    if (currentUser){
      return(
        <div className="header-group">
          <h2 className="header-name">Welcome, {currentUser.username}!</h2>

          <button className="header-button" onClick={this.props.logout}>
            Log out
          </button>
        </div>
      );
    }
    else {
      this.sessionLinks();
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

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
          <button onClick={()=> this.props.history.push('/explore')}>
            <img src="http://res.cloudinary.com/annaoh/image/upload/v1512004619/navigation-1_qaryvi.png"/>
          </button>
          <button>
            <img src="http://res.cloudinary.com/annaoh/image/upload/v1512004887/like-1_r1bajz.png" />
          </button>
          <button onClick={()=> this.props.history.push(`/user/${currentUser.username}`)}>
            <img src="http://res.cloudinary.com/annaoh/image/upload/v1512004980/user-4_zpahxy.png" />
          </button>
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

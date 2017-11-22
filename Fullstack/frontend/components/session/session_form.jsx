
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {username: "", password: "", email: ""};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink(){
    if (this.props.formType === "login"){
      return (
        <div>
          <p>"Don't have an account?"</p>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>"Have an account?"</p>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    if (this.props.formType === "login"){
      return(
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <h3>Welcome to Instagram</h3>
            <br/>

            {this.renderErrors()}
            <br/>

            <div className="login-form">
              <label>Username:
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input"
                />
              </label>
              <br/>

              <label>Password:
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"
                />
              </label>
              <br/>

              <input type="submit" value="Submit" />
            </div>
            <br/>

            {this.navLink()}

          </form>


        </div>
      );
    }
    else {
      return(
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <h3>Welcome to Instagram</h3>
            <br/>

            {this.renderErrors()}
            <br/>

            <div className="login-form">
              <label>Username:
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input"
                  />
              </label>
              <br/>

              <label>Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"
                  />
              </label>
              <br/>

              <label>Password:
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"
                  />
              </label>
              <br/>

              <input type="submit" value="Submit" />
            </div>
            <br/>

            {this.navLink()}

          </form>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);

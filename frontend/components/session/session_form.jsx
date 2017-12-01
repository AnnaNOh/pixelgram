
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.state = {username: "", password: "", email: ""};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }

    if (nextProps.location !== this.props.location) {
      this.props.removeAllSessionErrors();
      this.state = {username: "", password: "", email: ""};
    }
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleDemo(e){
    e.preventDefault();
    const user = {username: "user", password: "password"};
    this.props.login(user);
  }

  navLink(){
    if (this.props.formType === "login"){
      return (
        <div className="login-form-redirect">
          Don't have an account?
          <Link to={"/signup"}>Sign up</Link>
        </div>
      );
    }
    else {
      return (
        <div className="login-form-redirect">
          Have an account?
          <Link to={"/login"}>Log in</Link>
        </div>
      );
    }
  }

  renderErrors(){
    return(
      <ul className="login-signup-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    let email = null;
    if (this.props.formType === "login"){
      return(
        <div className="login-form-all">
          <img
            className="login-image"
            src="http://res.cloudinary.com/annaoh/image/upload/v1511564902/login1_rnnxgs.png"
          />

        <div className="login-form-container-login">
          <img
            className="login-instagram-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            />

          {this.renderErrors()}

          <button className="submit-button" onClick={this.handleDemo}>
            Demo log in
          </button>

          <div className="login-form-demo-or">
            <span>
              OR
            </span>
          </div>

            <form onSubmit={this.handleSubmit} className="login-form-box">



              <div className="login-form-entries">
                <label>
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    className="login-input"
                    placeholder="Username"
                    />
                </label>
                <br/>

                <label>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                    placeholder="Password"
                    />
                </label>
                <br/>

                <input className="submit-button" type="submit" value="Log in" />
              </div>
              <br/>

              {this.navLink()}

            </form>

          </div>

        </div>

      );
    }
    else {
      return(
        <div className="login-form-all">
          <img
            className="login-image"
            src="http://res.cloudinary.com/annaoh/image/upload/v1511564902/login1_rnnxgs.png"
          />

        <div className="login-form-container-signup">
            <form onSubmit={this.handleSubmit} className="login-form-box">


              <img
                className="login-instagram-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              />

              <h2>Sign up to see photos and videos from your friends.</h2>
              {this.renderErrors()}

              <button className="submit-button" onClick={this.handleDemo}>
                Demo log in
              </button>

              <div className="login-form-demo-or">
                <span>
                  OR
                </span>
              </div>


              <div className="login-form-entries">
                <label>
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    className="login-input"
                    placeholder="Username"
                    />
                </label>
                <br/>


                <label>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input"
                    placeholder="Email"

                    />
                </label>
                <br/>

                <label>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                    placeholder="Password"
                    />
                </label>
                <br/>

                <input className="submit-button" type="submit" value="Sign up" />
              </div>
              <br/>

              <h4 className="terms-agreements"> By signing up, you agree to our Terms & Privacy Policy </h4>

              {this.navLink()}

            </form>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);

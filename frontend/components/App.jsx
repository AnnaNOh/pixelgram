

import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import PhotoIndexContainer from './photos/photos_index_container';


const App = () => (
  <div className="main-body">

    <div className="nav-container">
      <div className="nav-left">
        <Link to="/">
          <img
            className="nav-bar-instagram-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            />
        </Link>
      </div>
      <div className="nav-right">
        <Route path="/" component={GreetingContainer} />
      </div>
    </div>


    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/" component={SessionFormContainer} />
    </Switch>

    <ProtectedRoute path="/" component={PhotoIndexContainer} />


  </div>
);


export default App;

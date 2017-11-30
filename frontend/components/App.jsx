

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
import PhotoUpload from './photos/upload/photo_upload_container';
import ProfileContainer from './photos/profile/profile_container';
import ExploreContainer from './photos/explore/explore_container';

const App = () => (
  <div className="main-body">


    <div className="nav-container">
      <div className="nav-left">
        <Link to="/">
          <img className="nav-bar-instagram-cam-logo" src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" />
          <img
            className="nav-bar-instagram-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          />
        </Link>
      </div>
      <ProtectedRoute path="/" component={PhotoUpload} />
      <Route path="/" component={GreetingContainer} />
    </div>


    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/" component={SessionFormContainer} />
    </Switch>

    <Switch>
      <ProtectedRoute path="/explore" component={ExploreContainer} />
      <ProtectedRoute path="/user" component={ProfileContainer} />
      <ProtectedRoute path="/" component={PhotoIndexContainer} />
    </Switch>


  </div>
);


export default App;

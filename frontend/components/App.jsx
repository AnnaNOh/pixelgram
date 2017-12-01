

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
          <img
            className="nav-bar-instagram-logo"
            src="http://res.cloudinary.com/annaoh/image/upload/v1512167100/Logomakr_2dtne0_fhueti.png"
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

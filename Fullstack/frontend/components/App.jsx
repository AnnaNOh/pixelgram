

import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';

import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <div className="nav-container">
      <Link to={"/"} className="header-link">
        <h1>Instagram</h1>
      </Link>
      <GreetingContainer />
    </div>

    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </Switch>

  </div>
);


export default App;

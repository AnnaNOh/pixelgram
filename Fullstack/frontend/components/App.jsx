

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
  <div className="main-body">
    <div className="nav-container">
      <div className="nav-left">
        <Link to={"/"} className="header-link">
          <h1>Instagram</h1>
        </Link>
      </div>
      <div className="nav-right">
        <GreetingContainer />
      </div>
    </div>

    <Switch>
      <AuthRoute path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>

  </div>
);


export default App;

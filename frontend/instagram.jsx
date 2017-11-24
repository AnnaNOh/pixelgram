import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import { login, signup, logout } from "./actions/session_actions";
import { fetchPhotos } from "./actions/photos";

document.addEventListener("DOMContentLoaded", ()=> {

  let preloadedState = undefined;
  if (window.currentUser){
    preloadedState = {
      session: {currentUser: window.currentUser}
    };
  }

  const store = configureStore(preloadedState);
  const root = document.getElementById("root");

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchPhotos = () => dispatch(fetchPhotos());


  ReactDOM.render(<Root store={store}/>, root);
});

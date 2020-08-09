import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { login, signup, logout } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //TEST
  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  //TEST

  ReactDOM.render(<Root store={store} />, root);
});
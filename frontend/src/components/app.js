import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import MainPage from './main/main_page';
// import DashboardContainer from './dashboard/dashboard_container';

export default () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      {/* <ProtectedRoute path="/dashboard" component={DashboardContainer} /> */}
      <AuthRoute path="/" component={MainPage} />
    </Switch>
  </div>
);
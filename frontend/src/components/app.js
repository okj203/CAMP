import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import MainPage from './main/main_page.jsx';
import LessonContainer from './lessons/lesson_show_container';
import UserContainer from '../components/user/user_container';
// import DashboardContainer from './dashboard/dashboard_container';

export default () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/lessons/:lesson_id" component={LessonContainer} />
      {/* <ProtectedRoute path="/dashboard" component={DashboardContainer} /> */}
      {/* <AuthRoute path="/reviews" component={ReviewsContainer} /> */}
      <AuthRoute path="/users/:teacher_id" component={UserContainer} />
    </Switch>
  </div>
);
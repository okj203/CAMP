import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import MainPage from './main/main_page.jsx';
import LessonContainer from './lessons/lesson_show_container';
import UserContainer from '../components/user/user_container';
import userIndexContainer from '../components/user/user_index_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import './reset.scss';

export default () => (
  <div>
    
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/lessons/:lesson_id" component={LessonContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute path="/teachers" component={userIndexContainer} />
      {/* <ProtectedRoute path="/reviews" component={ReviewsContainer} /> */}
      <ProtectedRoute path="/users/:teacher_id" component={UserContainer} />
    </Switch>
  </div>
);
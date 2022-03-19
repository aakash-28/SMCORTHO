import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../pages/sessions/404';
import InternalError from '../pages/sessions/500';
import LoginPage from '../pages/sessions/LoginPage';
import SignupPage from '../pages/sessions/SignupPage';

const SESSION_ROUTES = [
  {
    path: 'page-404',
    component: NotFound
  },
  {
    path: 'page-500',
    component: InternalError
  },
  {
    path: 'sign-in',
    component: LoginPage
  },
  {
    path: 'sign-up',
    component: SignupPage
  }
];

export const SessionRoutes = () => (
  <Switch>
    {SESSION_ROUTES.map((route, index) => (
      <Route
        key={index}
        exact={false}
        path={`/session/${route.path}`}
        component={() => <route.component />}
      />
    ))}
  </Switch>
);

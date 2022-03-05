import React from 'react';
import { IRoute } from '../interfaces/routing';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../pages/sessions/404';
import InternalError from '../pages/sessions/500';
import SignIn from '../pages/sessions/Sign-in';
import SignUp from '../pages/sessions/Sign-up';

const SESSION_ROUTES: IRoute[] = [
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
    component: SignIn
  },
  {
    path: 'sign-up',
    component: SignUp
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

import React from 'react';
import { IRoute } from '../interfaces/routing';
import { Switch, Route, Redirect } from 'react-router-dom';
import PatientDashboard from "../pages/public/PatientDashboard/PatientDashboard";

const PUBLIC_ROUTES: IRoute[] = [
    {
        path: 'dashboard',
        component: PatientDashboard
    }
]

export const PublicRoutes = () => (
    <Switch>
      {PUBLIC_ROUTES.map((route, index) => (
        <Route
          key={index}
          exact={false}
          path={`/public/${route.path}`}
          component={() => <route.component />}
        />
      ))}
  
      <Route path='*'>
        <Redirect to='/session/page-404' />
      </Route>
    </Switch>
  )
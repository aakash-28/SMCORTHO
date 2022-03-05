import React from 'react';
import { IRoute } from '../interfaces/routing';
import { Switch, Route, Redirect } from 'react-router-dom';
import PatientDashboard from "../pages/dashboard/PatientDashboard";
import AppointmentHistory from '../pages/history/AppointmentHistory';
import PatientProfilePage from '../pages/profile/PatientProfilePage';
import UpdateCredentials from '../pages/credentials/UpdateCredentials';

const PUBLIC_ROUTES: IRoute[] = [
    {
        path: 'dashboard',
        component: PatientDashboard
    },
    {
        path: 'profile',
        component: PatientProfilePage
    },
    {
        path: 'history',
        component: AppointmentHistory
    },
    {
        path: 'credentials',
        component: UpdateCredentials
    },
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
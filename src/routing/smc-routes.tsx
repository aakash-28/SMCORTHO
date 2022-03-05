import React from 'react';
import { IRoute } from '../interfaces/routing';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppointmentPage from "../pages/appointment/AppointmentPage";
import EventsCalendarPage from "../pages/calendar/EventsCalendarPage";
import FeedbackPage from "../pages/feedback/FeedbackPage";
import HomePage from "../pages/home/Home";
import ActivityLog from "../pages/logging/ActivityLog";
import PatientProfilePage from "../pages/patients/PatientProfilePage";
import PatientsPage from "../pages/patients/Patients";
import InvoicePage from "../pages/payment/InvoicePage";
import SmcSettings from "../pages/settings/SmcSettings";
import SmcStaffProfilePage from "../pages/settings/SmcStaffProfilePage";
import StatisticsPage from "../pages/statistics/StatisticsPage";

const SMC_ROUTES: IRoute[] = [
    {
      path: 'default',
      component: HomePage
    },
    {
      path: 'patients',
      component: PatientsPage
    },
    {
      path: 'payment',
      component: InvoicePage
    },
    {
      path: 'appointment',
      component: AppointmentPage
    },
    {
      path: 'calendar',
      component: EventsCalendarPage
    },
    {
      path: 'feedback',
      component: FeedbackPage
    },
    {
      path: 'logs',
      component: ActivityLog
    },
    {
      path: 'patient-profile',
      component: PatientProfilePage
    },
    {
      path: 'statistics',
      component: StatisticsPage
    },
    {
      path: 'settings',
      component: SmcSettings
    },
    {
      path: 'staff-profile',
      component: SmcStaffProfilePage
    }
];

export const SMCRoutes = () => (
  <Switch>
    {SMC_ROUTES.map((route, index) => (
      <Route
        key={index}
        exact={false}
        path={`/smc/${route.path}`}
        component={() => <route.component />}
      />
    ))}

    <Route path='*'>
      <Redirect to='/session/page-404' />
    </Route>
  </Switch>
);
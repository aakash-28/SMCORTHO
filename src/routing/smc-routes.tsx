import { IRoute } from "../interfaces/routing";
import AppointmentPage from "../pages/appointment/AppointmentPage";
import EventsCalendarPage from "../pages/calendar/EventsCalendarPage";
import FeedbackPage from "../pages/feedback/FeedbackPage";
import HomePage from "../pages/home/Home";
import ActivityLog from "../pages/logging/ActivityLog";
import PatientProfilePage from "../pages/patients/PatientProfilePage";
import PatientsPage from "../pages/patients/Patients";
import InvoicePage from "../pages/payment/InvoicePage";

export const smcRoutes: IRoute[] = [
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
    }
];
import { IRoute } from "../interfaces/routing";
import PatientsPage from "../pages/dashboards/patients/Patients";
import EventsCalendarPage from "../pages/medic/EventsCalendarPage";
import FeedbackPage from "../pages/medic/FeedbackPage";
import ActivityLog from "../pages/medic/ActivityLog";
import PatientDash from "../pages/medic/PatientDash";
import AppointmentHistory from "../pages/medic/AppointmentHistory";

export const smcRoutes: IRoute[] = [
    {
      path: 'patients',
      component: PatientsPage
    },
    {
      path: 'calendarview',
      component: EventsCalendarPage
    },
    {
      path: 'feedback',
      component: FeedbackPage
    },
    {
      path: 'activitylog',
      component: ActivityLog
    },
    {
      path: 'patient',
      component: PatientDash
    },
    {
      path: 'appointmenthistory',
      component: AppointmentHistory
    },
];
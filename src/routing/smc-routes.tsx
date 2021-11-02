import { IRoute } from "../interfaces/routing";
import PatientsPage from "../pages/dashboards/patients/Patients";
import EventsCalendarPage from "../pages/medic/EventsCalendarPage";
import FeedbackPage from "../pages/medic/FeedbackPage";

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
];
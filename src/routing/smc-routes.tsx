import { IRoute } from "../interfaces/routing";
import EventsCalendarPage from "../pages/calendar/EventsCalendarPage";
import FeedbackPage from "../pages/feedback/FeedbackPage";
import HomePage from "../pages/home/Home";
import PatientsPage from "../pages/patients/Patients";

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
      path: 'calendar',
      component: EventsCalendarPage
    },
    {
      path: 'feedback',
      component: FeedbackPage
    },
];
import { IRoute } from "../interfaces/routing";
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
];
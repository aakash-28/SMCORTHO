import { IRoute } from "../interfaces/routing";
import PatientsPage from "../pages/patients/Patients";

export const smcRoutes: IRoute[] = [
    {
      path: 'patients',
      component: PatientsPage
    },
];
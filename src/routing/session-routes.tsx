import { IRoute } from '../interfaces/routing';

import NotFound from '../pages/sessions/404';
import InternalError from '../pages/sessions/500';
import LoginPage from '../pages/sessions/LoginPage';
import SignupPage from '../pages/sessions/SignupPage';

export const sessionRoutes: IRoute[] = [
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
    component: LoginPage
  },
  {
    path: 'sign-up',
    component: SignupPage
  }
];

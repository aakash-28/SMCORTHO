import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from './pages/sessions/404';
import { sessionRoutes } from './routing/session-routes';

import './App.scss';
import { useHideLoader } from './hooks/useHideLoader';
import SMCLayout from './layout/components/smcLayout/SMCLayout';
import { smcRoutes } from './routing/smc-routes';

const Routes = ({ routes, layout = '' }) => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        exact={route.exact}
        path={layout.length > 0 ? `/${layout}/${route.path}` : `/${route.path}\``}
        component={() => <route.component />}
      />
    ))}

    <Route path='*'>
      <Redirect to='/public/page-404' />
    </Route>
  </Switch>
);

const SMCRoutes = () => (
  <Switch>
    {smcRoutes.map((route, index) => (
      <Route
        key={index}
        exact={false}
        path={`/smc/${route.path}`}
        component={() => <route.component />}
      />
    ))}

    <Route path='*'>
      <Redirect to='/public/page-404' />
    </Route>
  </Switch>
);

const SessionRoutes = () => <Routes routes={sessionRoutes} layout='public' />;

const App = () => {
  useHideLoader();

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/smc/default' />
      </Route>

      <Route path='/public'>
        <SessionRoutes />
      </Route>

      <Route path='/smc'>
        <SMCLayout>
          <SMCRoutes />
        </SMCLayout>
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;

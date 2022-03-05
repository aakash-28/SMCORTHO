import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { sessionRoutes } from './routing/session-routes';
import { useHideLoader } from './hooks/useHideLoader';
import { smcRoutes } from './routing/smc-routes';
import SMCLayout from './layout/components/smcLayout/SMCLayout';
import NotFound from './pages/sessions/404';
import './App.scss';

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

const ErrorRoutes = () => (
  <Switch>
    {sessionRoutes.map((route, index) => (
      <Route
        key={index}
        exact={false}
        path={`/public/${route.path}`}
        component={() => <route.component />}
      />
    ))}
  </Switch>
);

const App = () => {
  useHideLoader();

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/smc/default' />
      </Route>

      {/* All website pages */}
      <Route path='/smc'>
        <SMCLayout>
          <SMCRoutes />
        </SMCLayout>
      </Route>

      {/* All error pages */}
      <Route path='/public'>
        <ErrorRoutes />
      </Route>

      {/* Catch-all Default */}
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;

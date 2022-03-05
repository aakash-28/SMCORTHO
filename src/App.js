import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PublicRoutes } from './routing/public-routes';
import { SMCRoutes } from './routing/smc-routes';
import { SessionRoutes } from './routing/session-routes';
import { useHideLoader } from './hooks/useHideLoader';
import SMCLayout from './layout/components/smcLayout/SMCLayout';
import PatientLayout from './layout/PatientLayout/PatientLayout';
import NotFound from './pages/sessions/404';
import './App.scss';

const App = () => {
  useHideLoader();

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/smc/default' />
      </Route>

      {/* Patient side pages */}
      <Route path='/public'>
        <PatientLayout>
          <PublicRoutes />
        </PatientLayout>
      </Route>
      
      {/* Doctor dashboard pages */}
      <Route path='/smc'>
        <SMCLayout>
          <SMCRoutes />
        </SMCLayout>
      </Route>

      {/* All error pages */}
      <Route path='/session'>
        <SessionRoutes />
      </Route>

      {/* Catch-all Default */}
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;

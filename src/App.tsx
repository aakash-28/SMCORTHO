import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import VerticalLayout from './layout/vertical/Vertical';
import HorizontalLayout from './layout/horizontal/Horizontal';

import NotFound from './pages/sessions/404';
import { defaultRoutes, sessionRoutes } from './routing';

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

const DefaultRoutes = ({ layout }) => <Routes routes={defaultRoutes} layout={layout} />;

const SessionRoutes = () => <Routes routes={sessionRoutes} layout='public' />;

const App = () => {
  useHideLoader();

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/vertical/default-dashboard' />
      </Route>

      <Route path='/public'>
        <SessionRoutes />
      </Route>

      <Route path='/horizontal'>
        <HorizontalLayout>
          <DefaultRoutes layout='horizontal' />
        </HorizontalLayout>
      </Route>

      <Route path='/vertical'>
        <VerticalLayout>
          <DefaultRoutes layout='vertical' />
        </VerticalLayout>
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

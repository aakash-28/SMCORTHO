import React,{useEffect,useContext,useState} from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import VerticalLayout from './layout/vertical/Vertical';
import HorizontalLayout from './layout/horizontal/Horizontal';

import NotFound from './pages/sessions/404';
import { defaultRoutes, sessionRoutes } from './routing';

import './App.scss';
import { useHideLoader } from './hooks/useHideLoader';
import SMCLayout from './layout/components/smcLayout/SMCLayout';
import PatientLayout from './layout/PatientLayout/PatientLayout';
import { smcRoutes } from './routing/smc-routes';
import { Account,AccountContext } from './Account';
import { navigateLogin } from './utils/navigate-login';

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
const PatientRoutes = () => (
  <Switch>
    {smcRoutes.map((route, index) => (
      <Route
        key={index}
        exact={false}
        path={`/patient/${route.path}`}
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
  const {getSession} = useContext(AccountContext);
  const [loggedin,setLoggedIn]=useState(false);  

    useEffect(() =>{
    getSession().then(()=>{
     setLoggedIn(true);
    
    })
  },[])

  useHideLoader();
  
    return (
    <>
      {loggedin ? (
      <Switch>
        <Route exact path='/'>
          <Redirect to='/patient/patientdashboard' />
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
  
        <Route path='/patient'>
          <PatientLayout>
            <PatientRoutes />
          </PatientLayout>
        </Route>
  
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>)
      :
      (
        <Switch>
      <Route path='/public'>
      <SessionRoutes />
      </Route>

      <Route path='*'>
      <NotFound />
      </Route>
       </Switch>
      )
      }
      </>
      
    );
 
};

export default App;

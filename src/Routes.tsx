import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;

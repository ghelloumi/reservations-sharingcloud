import React from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';

import NotFound from '../components/pages/NotFound';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import {isLoggedIn} from "../utils/helpers";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route
        exact
        path="/login"
        render={(props: RouteComponentProps<{ name?: string }>) =>
          isLoggedIn() ? <Home from={props.location} /> : <Login />
        }
      />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;

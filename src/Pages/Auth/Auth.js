import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Dialog } from '@material-ui/core';

import AuthRedirect from '../../HOC/AuthRedirect';
import { authRoutes } from '../../routes';

const FormDialog = () => {
  const renderRoutes = () => {
    return authRoutes.map(route => (
      <Route
        path={route.path}
        key={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  };

  return (
    <Dialog open aria-labelledby="form-dialog-title">
      <Switch>
        {renderRoutes()}
        <Redirect to="/auth/login" />
      </Switch>
    </Dialog>
  );
};

export default AuthRedirect(FormDialog);

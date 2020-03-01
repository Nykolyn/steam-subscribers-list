import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ProtectedComponent from '../HOC/ProtectedComponent';
import { refreshUser } from '../redux/operations/authOperations';
import { dashboardRoutes } from '../routes';

import Navigation from './Navigation/Navigation';

const AuthComponent = React.lazy(() => import('../Pages/Auth/Auth'));

const App = () => {
  const renderDashboardRoutes = () => {
    return dashboardRoutes.map(route => (
      <ProtectedComponent
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));
  };

  return (
    <Content>
      <Navigation />
      <Suspense fallback={<div className="rainbow-marker-loader" />}>
        <Switch>
          <Route path="/auth" component={AuthComponent} />
          {renderDashboardRoutes()}
          <Redirect to="/auth" />
        </Switch>
      </Suspense>
    </Content>
  );
};

const Content = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 3;
`;

const mDTP = {
  refreshUser,
};

export default connect(
  null,
  mDTP,
)(App);

import React, { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ProtectedComponent from '../HOC/ProtectedComponent';
import { refreshUser } from '../redux/operations/authOperations';
import { dashboardRoutes } from '../routes';
import { getFromLS } from '../helpers/localStorage';
import Navigation from './Navigation/Navigation';

const AuthComponent = React.lazy(() => import('../Pages/Auth/Auth'));

const App = ({ refreshUser }) => {
  const [loading, setLoading] = useState(false);

  const handleRefreshUser = async () => {
    const token = getFromLS('token');
    if (!token) return;

    setLoading(true);
    await refreshUser();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(
    () => {
      handleRefreshUser();
    },
    /* eslint-disable-next-line */
    [],
  );
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
          {renderDashboardRoutes()}

          {loading ? (
            <>
              <div className="rainbow-marker-loader" />
            </>
          ) : (
            <Route path="/auth" component={AuthComponent} />
          )}

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

App.propTypes = {
  refreshUser: PropTypes.func.isRequired,
};

const mDTP = {
  refreshUser,
};

export default connect(
  null,
  mDTP,
)(App);

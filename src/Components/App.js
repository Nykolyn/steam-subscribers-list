import React, { useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import MouseTrail from './MouseTrail';
import { refreshUser } from '../redux/operations/authOperations';
import {
  authSelector,
  authLoadingSelector,
} from '../redux/selectors/authSelectors';
import { dashboardRoutes } from '../routes';

const AuthComponent = React.lazy(() => import('../Pages/Auth/Auth'));

const App = ({ isAuth, refreshUser, loading }) => {
  useEffect(() => {
    refreshUser();
    /* eslint-disable-next-line */
  }, []);

  const renderDashboardRoutes = () => {
    return dashboardRoutes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));
  };

  return (
    <div className="stars-back">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <MouseTrail />
      <Suspense
        fallback={
          <CircularProgress
            className="material-subs-loader"
            color="secondary"
          />
        }
      >
        <Switch>
          {renderDashboardRoutes()}
          {loading ? (
            <CircularProgress
              className="material-subs-loader"
              color="secondary"
            />
          ) : (
            !isAuth && <Route path="/auth" component={AuthComponent} />
          )}
          <Redirect to="/auth" />
        </Switch>
      </Suspense>
    </div>
  );
};

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  refreshUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  isAuth: authSelector(state),
  loading: authLoadingSelector(state),
});

const mDTP = {
  refreshUser,
};

export default connect(
  mSTP,
  mDTP,
)(App);

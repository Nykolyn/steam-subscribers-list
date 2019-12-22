import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import MouseTrail from './MouseTrail';
import FormDialog from './FormDialog/FormDialog';
import Subscribers from '../Pages/Subscribers';
import { login, refreshAdmin } from '../redux/operations/authOperations';
import {
  authSelector,
  authLoadingSelector,
} from '../redux/selectors/authSelectors';

const App = ({ isAuth, login, refreshAdmin, loading }) => {
  useEffect(() => {
    refreshAdmin();
  }, []);

  const handleAuth = value => {
    if (value !== process.env.REACT_APP_PASSWORD) return;
    login({ password: value });
  };
  return (
    <div className="stars-back">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <MouseTrail />
      <Subscribers />
      {loading ? (
        <CircularProgress className="material-subs-loader" color="secondary" />
      ) : (
        !isAuth && <FormDialog submitPassword={handleAuth} />
      )}
    </div>
  );
};

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  refreshAdmin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  isAuth: authSelector(state),
  loading: authLoadingSelector(state),
});

const mDTP = {
  login,
  refreshAdmin,
};

export default connect(
  mSTP,
  mDTP,
)(App);

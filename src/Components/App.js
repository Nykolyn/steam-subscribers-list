import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MouseTrail from './MouseTrail';

import FormDialog from './FormDialog/FormDialog';
import Subscribers from '../Pages/Subscribers';
import { loginSuccess } from '../redux/actions/authActions';
import authSelector from '../redux/selectors/authSelectors';

const App = ({ isAuth, login }) => {
  const handleAuth = value => {
    if (value !== process.env.REACT_APP_PASSWORD) return;

    login();
  };
  return (
    <>
      <MouseTrail />
      <Subscribers />
      {!isAuth && <FormDialog submitPassword={handleAuth} />}
    </>
  );
};

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mSTP = state => ({
  isAuth: authSelector(state),
});

const mDTP = {
  login: loginSuccess,
};

export default connect(
  mSTP,
  mDTP,
)(App);

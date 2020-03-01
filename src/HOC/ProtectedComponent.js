import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelector } from '../redux/selectors/authSelectors';
/* eslint-disable-next-line */
const ProtectedComponent = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

ProtectedComponent.propTypes = {
  isAuth: PropTypes.bool,
};

ProtectedComponent.defaultProps = {
  isAuth: null,
};

const mSTP = state => ({
  isAuth: authSelector(state),
});

export default connect(mSTP)(ProtectedComponent);

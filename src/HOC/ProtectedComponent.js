import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelector } from '../redux/selectors/authSelectors';

const ProtectedComponent = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

ProtectedComponent.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.symbol,
  ]).isRequired,
  isAuth: PropTypes.bool,
};

ProtectedComponent.defaultProps = {
  isAuth: null,
};

const mSTP = state => ({
  isAuth: authSelector(state),
});

export default connect(mSTP)(ProtectedComponent);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signIn } from '../../redux/operations/authOperations';
import AuthForm from '../../Components/AuthForm/AuthForm';

function Login({ signIn }) {
  return (
    <AuthForm
      submitFunc={signIn}
      redirectToText="Don't have an account? Sign up"
      redirectToPath="/auth/register"
      typeOfAuth="Sign In"
    />
  );
}

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mDTP = {
  signIn,
};

export default connect(
  null,
  mDTP,
)(Login);

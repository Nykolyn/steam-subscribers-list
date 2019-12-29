import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signUp } from '../../redux/operations/authOperations';
import AuthForm from '../../Components/AuthForm/AuthForm';

function Register({ signUp }) {
  return (
    <AuthForm
      submitFunc={signUp}
      redirectToText="Already have an account? Sign in"
      redirectToPath="/auth/login"
      typeOfAuth="Sign Up"
    />
  );
}

Register.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mDTP = {
  signUp,
};

export default connect(
  null,
  mDTP,
)(Register);

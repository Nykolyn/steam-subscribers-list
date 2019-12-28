import jwtDecode from 'jwt-decode';

import {
  loginRequest,
  loginDenied,
  loginSuccess,
  refreshUserStart,
  refreshUserSuccess,
  refreshUserError,
  signUpRequest,
  signUpSuccess,
  signUpError,
} from '../actions/authActions';
import { signInApi, refreshUserApi, signUpApi } from '../../services/authApi';
import setAuthToken from '../../helpers/setAuthToken';
import { setToLS, getFromLS } from '../../helpers/localStorage';

export const signIn = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await signInApi(user);
    if (user.rememberMe) setToLS('token', response.token);
    dispatch(loginSuccess(response));
  } catch (err) {
    dispatch(loginDenied(err.response.data));
  }
};

export const signUp = user => async dispatch => {
  dispatch(signUpRequest());

  try {
    const response = await signUpApi(user);
    if (user.rememberMe) setToLS('token', response.token);
    dispatch(signUpSuccess(response));
  } catch (err) {
    dispatch(signUpError(err.response.data));
  }
};

export const refreshUser = () => async dispatch => {
  const token = getFromLS('token');
  if (!token) return;
  setAuthToken(token);
  dispatch(refreshUserStart());
  try {
    const decoded = jwtDecode(token);
    const response = await refreshUserApi(decoded.id);
    dispatch(refreshUserSuccess(response));
  } catch (err) {
    dispatch(refreshUserError(err));
  }
};

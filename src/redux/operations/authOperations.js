import {
  loginRequest,
  loginDenied,
  loginSuccess,
  refreshAdminStart,
} from '../actions/authActions';
import { signInApi } from '../../services/subsApi';
import { tokenSelector } from '../selectors/authSelectors';

export const signIn = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await signInApi(user);
    dispatch(loginSuccess(response));
  } catch (err) {
    dispatch(loginDenied(err));
  }
};

export const signUp = user => async dispatch => {};

export const refreshUser = () => async (dispatch, getState) => {
  const token = tokenSelector(getState());
  if (!token) return;
  dispatch(refreshAdminStart());
  try {
    const response = await signInApi({
      password: process.env.REACT_APP_PASSWORD,
    });
    dispatch(loginSuccess(response.token));
  } catch (err) {
    dispatch(loginDenied(err));
  }
};

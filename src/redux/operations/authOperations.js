import {
  loginRequest,
  loginDenied,
  loginSuccess,
  refreshAdminStart,
} from '../actions/authActions';
import { signInApi } from '../../services/subsApi';
import { tokenSelector } from '../selectors/authSelectors';

export const login = password => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await signInApi(password);
    dispatch(loginSuccess(response.token));
  } catch (err) {
    dispatch(loginDenied(err));
  }
};

export default login;

export const refreshAdmin = () => async (dispatch, getState) => {
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

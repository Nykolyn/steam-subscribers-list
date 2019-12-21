import { AUTH_ACTIONS } from '../actions/authActions';

const authReducer = (state = false, { type }) => {
  switch (type) {
    case AUTH_ACTIONS.ACCESS_GRANTED:
      return true;

    default:
      return state;
  }
};

export default authReducer;

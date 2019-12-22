import { combineReducers } from 'redux';

import { AUTH_ACTIONS } from '../actions/authActions';

const isAuth = (state = false, { type }) => {
  switch (type) {
    case AUTH_ACTIONS.ACCESS_GRANTED:
      return true;

    default:
      return state;
  }
};

const token = (state = '', { type, payload }) => {
  switch (type) {
    case AUTH_ACTIONS.ACCESS_GRANTED:
      return payload.token;

    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case AUTH_ACTIONS.ACCESS_REQUEST:
      return true;

    case AUTH_ACTIONS.ACCESS_GRANTED:
    case AUTH_ACTIONS.ACCESS_DENIED:
      return false;

    default:
      return state;
  }
};

export default combineReducers({ isAuth, token, loading });

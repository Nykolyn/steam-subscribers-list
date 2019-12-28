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

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case AUTH_ACTIONS.ACCESS_GRANTED:
      return payload.user.user;

    default:
      return state;
  }
};

const token = (state = '', { type, payload }) => {
  switch (type) {
    case AUTH_ACTIONS.ACCESS_GRANTED:
      return payload.user.token;

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

const error = (state = null, { type, payload }) => {
  switch (type) {
    case AUTH_ACTIONS.ACCESS_DENIED:
      return payload.err.message;
    case AUTH_ACTIONS.ACCESS_GRANTED:
    case AUTH_ACTIONS.CLEAR_ERROR_MSG:
      return null;
    default:
      return state;
  }
};

export default combineReducers({ isAuth, user, token, loading, error });

export const AUTH_ACTIONS = {
  ACCESS_GRANTED: 'ACCESS_GRANTED',
  ACCESS_REQUEST: 'ACCESS_REQUEST',
  ACCESS_DENIED: 'ACCESS_DENIED',
  REFRESH_ADMIN_START: 'REFRESH_ADMIN_START',
  REFRESH_ADMIN_SUCCESS: 'REFRESH_ADMIN_SUCCESS',
  REFRESH_ADMIN_ERROR: 'REFRESH_ADMIN_ERROR',
};

//
export const loginRequest = () => ({
  type: AUTH_ACTIONS.ACCESS_REQUEST,
});

export const loginSuccess = token => ({
  type: 'ACCESS_GRANTED',
  payload: { token },
});

export const loginDenied = err => ({
  type: AUTH_ACTIONS.ACCESS_DENIED,
  payload: { err },
});
//

//
export const refreshAdminStart = () => ({
  type: AUTH_ACTIONS.ACCESS_REQUEST,
});

export const refreshAdminSuccess = token => ({
  type: 'ACCESS_GRANTED',
  payload: { token },
});

export const refreshAdminError = err => ({
  type: AUTH_ACTIONS.ACCESS_DENIED,
  payload: { err },
});
//

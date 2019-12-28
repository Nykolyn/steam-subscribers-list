export const AUTH_ACTIONS = {
  ACCESS_REQUEST: 'ACCESS_REQUEST',
  ACCESS_GRANTED: 'ACCESS_GRANTED',
  ACCESS_DENIED: 'ACCESS_DENIED',
  CLEAR_ERROR_MSG: 'CREAR_ERROR_MSG',
};

//
export const loginRequest = () => ({
  type: AUTH_ACTIONS.ACCESS_REQUEST,
});

export const loginSuccess = user => ({
  type: AUTH_ACTIONS.ACCESS_GRANTED,
  payload: { user },
});

export const loginDenied = err => ({
  type: AUTH_ACTIONS.ACCESS_DENIED,
  payload: { err },
});
//

//
export const refreshUserStart = () => ({
  type: AUTH_ACTIONS.ACCESS_REQUEST,
});

export const refreshUserSuccess = user => ({
  type: AUTH_ACTIONS.ACCESS_GRANTED,
  payload: { user },
});

export const refreshUserError = err => ({
  type: AUTH_ACTIONS.ACCESS_DENIED,
  payload: { err },
});
//

//
export const signUpRequest = () => ({
  type: AUTH_ACTIONS.ACCESS_REQUEST,
});

export const signUpSuccess = user => ({
  type: AUTH_ACTIONS.ACCESS_GRANTED,
  payload: { user },
});

export const signUpError = err => ({
  type: AUTH_ACTIONS.ACCESS_DENIED,
  payload: { err },
});
//

//
export const clearAuthErrorMsg = () => ({
  type: AUTH_ACTIONS.CLEAR_ERROR_MSG,
});
//

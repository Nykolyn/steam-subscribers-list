export const SUBS_ACTIONS = {
  SUBS_REQUEST_START: 'SUBS_REQUEST_START',
  SUBS_REQUEST_SUCCESS: 'SUBS_REQUEST_SUCCESS',
  SUBS_REQUEST_ERROR: 'SUBS_REQUEST_ERROR',
  ADD_SUB_REQUEST: 'ADD_SUB_REQUEST',
  ADD_SUB_SUCCESS: 'ADD_SUB_SUCCESS',
  ADD_SUB_ERROR: 'ADD_SUB_ERROR',
  UPDATE_FAV_SUB_REQUEST: 'UPDATE_FAV_SUB_REQUEST',
  UPDATE_FAV_SUB_SUCCESS: 'UPDATE_FAV_SUB_SUCCESS',
  UPDATE_FAV_SUB_ERROR: 'UPDATE_FAV_SUB_ERROR',
};

//
export const subsRequestStart = () => ({
  type: SUBS_ACTIONS.SUBS_REQUEST_START,
});

export const subsRequestSuccess = subs => ({
  type: SUBS_ACTIONS.SUBS_REQUEST_SUCCESS,
  payload: { subs },
});

export const subsRequestError = error => ({
  type: SUBS_ACTIONS.SUBS_REQUEST_ERROR,
  payload: { error },
});
//

//
export const addSubRequest = () => ({
  type: SUBS_ACTIONS.ADD_SUB_REQUEST,
});

export const addSubSuccess = sub => ({
  type: SUBS_ACTIONS.ADD_SUB_SUCCESS,
  payload: { sub },
});

export const addSubError = error => ({
  type: SUBS_ACTIONS.ADD_SUB_ERROR,
  payload: { error },
});
//

//
export const updateFavSubStart = () => ({
  type: SUBS_ACTIONS.UPDATE_FAV_SUB_REQUEST,
});

export const updateFavSubSuccess = updatedSub => ({
  type: SUBS_ACTIONS.UPDATE_FAV_SUB_SUCCESS,
  payload: { updatedSub },
});

export const updateFavSubError = error => ({
  type: SUBS_ACTIONS.UPDATE_FAV_SUB_ERROR,
  payload: { error },
});
//

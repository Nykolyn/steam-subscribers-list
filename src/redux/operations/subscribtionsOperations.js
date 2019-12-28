import setAuthToken from '../../helpers/setAuthToken';
import {
  subsRequestStart,
  subsRequestSuccess,
  subsRequestError,
  addSubRequest,
  addSubSuccess,
  addSubError,
  updateFavSubStart,
  updateFavSubSuccess,
  updateFavSubError,
} from '../actions/subscribtionActions';
import { getSubsApi, postSubApi, updateFavApi } from '../../services/subsApi';
import { tokenSelector } from '../selectors/authSelectors';

/* eslint-disable */
export const getSubs = id => async (dispatch, getState) => {
  const token = tokenSelector(getState());
  if (!token) return;
  setAuthToken(token);
  dispatch(subsRequestStart());
  try {
    const subs = await getSubsApi(id);
    dispatch(subsRequestSuccess(subs));
  } catch (err) {
    console.error(`error while getting subs: ${err}`);
    dispatch(subsRequestError(err));
  }
};

export const addSub = sub => async (dispatch, getState) => {
  const token = tokenSelector(getState());
  if (!token) return;
  setAuthToken(token);
  dispatch(addSubRequest());
  try {
    const newSub = await postSubApi(sub);
    return dispatch(addSubSuccess(newSub));
  } catch (err) {
    console.error(`error while adding sub: ${err}`);
    dispatch(addSubError(err));
  }
};

export const updateFavSub = (id, favorite) => async (dispatch, getState) => {
  const token = tokenSelector(getState());
  if (!token) return;
  setAuthToken(token);
  dispatch(updateFavSubStart());
  try {
    const sub = await updateFavApi(id, favorite);
    return dispatch(updateFavSubSuccess(sub));
  } catch (err) {
    dispatch(updateFavSubError(err));
    console.error(`error while updating favorite sub: ${err}`);
  }
};

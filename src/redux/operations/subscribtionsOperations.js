import setAuthToken from '../../helpers/setAuthToken';
import * as subsActions from '../actions/subscribtionActions';
import { getSubsApi, postSubApi, updateSubApi } from '../../services/subsApi';
import { tokenSelector } from '../selectors/authSelectors';

/* eslint-disable */
export const getSubs = id => async (dispatch, getState) => {
  const token = tokenSelector(getState());
  if (!token) return;
  setAuthToken(token);
  dispatch(subsActions.subsRequestStart());
  try {
    const subs = await getSubsApi(id);
    dispatch(subsActions.subsRequestSuccess(subs));
  } catch (err) {
    console.error(`error while getting subs: ${err}`);
    dispatch(subsActions.subsRequestError(err));
  }
};

export const addSub = sub => async (dispatch, getState) => {
  const token = tokenSelector(getState());
  if (!token) return;
  setAuthToken(token);
  dispatch(subsActions.addSubRequest());

  try {
    const newSub = await postSubApi(sub);
    return dispatch(subsActions.addSubSuccess(newSub));
  } catch (err) {
    console.error(`error while adding sub: ${err}`);
    dispatch(subsActions.addSubError(err));
  }
};

export const updateSub = sub => async (dispatch, getState) => {
  const token = tokenSelector(getState());
  if (!token) return;
  setAuthToken(token);
  dispatch(subsActions.updateSubStart());
  try {
    const updatedSub = await updateSubApi(sub);
    return await dispatch(subsActions.updateSubSuccess(updatedSub));
  } catch (err) {
    dispatch(subsActions.updateSubError(err));
    console.error(`error while updating sub: ${err}`);
  }
};

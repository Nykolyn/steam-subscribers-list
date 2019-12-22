import { combineReducers } from 'redux';

import { SUBS_ACTIONS } from '../actions/subscribtionActions';

const loadingState = {
  getSubs: false,
  addSub: false,
  updateFavSub: false,
};

const subs = (state = [], { type, payload }) => {
  switch (type) {
    case SUBS_ACTIONS.SUBS_REQUEST_SUCCESS:
      return payload.subs;

    case SUBS_ACTIONS.ADD_SUB_SUCCESS:
      return [...state, payload.sub];

    case SUBS_ACTIONS.UPDATE_FAV_SUB_SUCCESS: {
      const { updatedSub } = payload;

      const newState = state.map(sub =>
        sub.userID === updatedSub.userID ? updatedSub : sub,
      );

      return newState;
    }

    default:
      return state;
  }
};

const loading = (state = loadingState, { type }) => {
  switch (type) {
    case SUBS_ACTIONS.SUBS_REQUEST_START:
      return { ...state, getSubs: true };
    case SUBS_ACTIONS.SUBS_REQUEST_SUCCESS:
    case SUBS_ACTIONS.SUBS_REQUEST_ERROR:
      return { ...state, getSubs: false };

    case SUBS_ACTIONS.ADD_SUB_REQUEST:
      return { ...state, addSub: true };
    case SUBS_ACTIONS.ADD_SUB_SUCCESS:
    case SUBS_ACTIONS.ADD_SUB_ERROR:
      return { ...state, addSub: false };

    case SUBS_ACTIONS.UPDATE_FAV_SUB_REQUEST:
      return { ...state, updateFavSub: true };
    case SUBS_ACTIONS.UPDATE_FAV_SUB_SUCCESS:
    case SUBS_ACTIONS.UPDATE_FAV_SUB_ERROR:
      return { ...state, updateFavSub: false };

    default:
      return state;
  }
};

export default combineReducers({ subs, loading });

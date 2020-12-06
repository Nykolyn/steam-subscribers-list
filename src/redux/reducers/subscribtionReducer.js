import { combineReducers } from 'redux';

import { SUBS_ACTIONS } from '../actions/subscribtionActions';
import { AUTH_ACTIONS } from '../actions/authActions';
import { isSameDay, isSameMonth, isSameWeek } from '../../helpers/dateDiff';

const loadingState = {
  getSubs: false,
  addSub: false,
  updateSub: false,
};

const dateState = {
  sameDayAdded: 0,
  sameWeekAdded: 0,
  sameMonthAdded: 0,
};

const subs = (state = [], { type, payload }) => {
  switch (type) {
    case SUBS_ACTIONS.SUBS_REQUEST_SUCCESS:
      return payload.subs;

    case AUTH_ACTIONS.LOG_OUT:
      return [];

    case SUBS_ACTIONS.ADD_SUB_SUCCESS:
      return [...state, payload.sub];

    case SUBS_ACTIONS.UPDATE_SUB_SUCCESS: {
      const { updatedSub } = payload;

      const newState = state.map(sub =>
        sub._id === updatedSub._id ? updatedSub : sub,
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

    case SUBS_ACTIONS.UPDATE_SUB_REQUEST:
      return { ...state, updateSub: true };
    case SUBS_ACTIONS.UPDATE_SUB_SUCCESS:
    case SUBS_ACTIONS.UPDATE_SUB_ERROR:
      return { ...state, updateSub: false };

    default:
      return state;
  }
};

const date = (state = dateState, { type, payload }) => {
  switch (type) {
    case SUBS_ACTIONS.SUBS_REQUEST_SUCCESS: {
      const date = new Date().toLocaleDateString();
      let sameDay = 0;
      let sameMonth = 0;
      let sameWeek = 0;

      payload.subs.forEach(sub => {
        const subDate = sub.date.split(' ')[0];

        if (isSameDay(date, subDate)) {
          sameDay += 1;
        }
        if (isSameMonth(date, subDate)) {
          sameMonth += 1;
        }
        if (isSameWeek(date, subDate)) {
          sameWeek += 1;
        }
      });

      return {
        sameDayAdded: sameDay,
        sameWeekAdded: sameWeek,
        sameMonthAdded: sameMonth,
      };
    }
    case SUBS_ACTIONS.ADD_SUB_SUCCESS:
      return {
        sameDayAdded: state.sameDayAdded + 1,
        sameWeekAdded: state.sameWeekAdded + 1,
        sameMonthAdded: state.sameMonthAdded + 1,
      };

    case AUTH_ACTIONS.LOG_OUT:
      return dateState;

    default:
      return state;
  }
};

export default combineReducers({ loading, subs, date });

import { combineReducers } from '@reduxjs/toolkit';

import * as reducers from './reducers';

const rootReducer = combineReducers({
  auth: reducers.auth.reducer,
});

export default rootReducer;

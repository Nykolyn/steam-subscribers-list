import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import getPreventedStore from './getPreventedState';

import authReducer from '../redux/reducers/authReducer';
import subscribtionReducer from '../redux/reducers/subscribtionReducer';
import { refreshUser } from '../redux/operations/authOperations';

const middleware = [ReduxThunk];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

const rootReducer = combineReducers({
  auth: authReducer,
  subscribtions: subscribtionReducer,
});

const configureStore = () => {
  const initialState = getPreventedStore();

  const store = createStore(rootReducer, initialState, enhancer);

  const currentState = store.getState();

  if (currentState.auth.isAuth) {
    store.dispatch(refreshUser());
  }

  return store;
};

export default configureStore;

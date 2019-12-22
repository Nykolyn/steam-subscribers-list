import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({ isAuth: authReducer });

const middleware = [];
/* eslint-disable-next-line */
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

const store = createStore(rootReducer);

export default store;

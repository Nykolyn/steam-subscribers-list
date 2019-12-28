import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import subscribtionReducer from './reducers/subscribtionReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  subscribtions: subscribtionReducer,
});

const middleware = [ReduxThunk];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

export default store;

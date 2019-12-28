import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import { store, persistor } from '../../redux/store';

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router basename="/">
        <Route component={App} />
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;

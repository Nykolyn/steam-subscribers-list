import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import store from '../../redux/store';

const Root = () => (
  <Provider store={store}>
    <Router basename="/">
      <Route component={App} />
    </Router>
  </Provider>
);

export default Root;

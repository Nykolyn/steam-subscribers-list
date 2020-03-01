import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import MouseTrail from '../MouseTrail';
import configureStore from '../../helpers/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router basename="/">
      <div className="stars-back">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <MouseTrail />
        <Route component={App} />
      </div>
    </Router>
  </Provider>
);

export default Root;

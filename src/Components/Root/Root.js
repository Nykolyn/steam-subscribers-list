import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import MouseTrail from '../MouseTrail';
import configureStore from '../../helpers/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router basename="/">
      <div
        style={{
          background:
            'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        }}
      >
        <MouseTrail />
        <Route component={App} />
      </div>
    </Router>
  </Provider>
);

export default Root;

import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Root from './Components/Root/Root';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Root />, document.getElementById('root'));

console.log(process.env.NODE_ENV);
serviceWorker.register();

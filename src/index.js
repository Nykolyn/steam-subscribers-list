import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Components/Root/Root';
import './scss/main.scss';

ReactDOM.render(<Root />, document.getElementById('root'));

console.log(process.env.NODE_ENV);

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import { initStyles } from './styles/initStyles';
import App from './launcher/App';
// import registerServiceWorker from './registerServiceWorker';

initStyles();

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

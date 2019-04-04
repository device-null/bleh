import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import User from './models/User.js';
import AppProvider from './providers/AppProvider.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppProvider>
  <App />
  </AppProvider>, document.getElementById('root'));
registerServiceWorker();

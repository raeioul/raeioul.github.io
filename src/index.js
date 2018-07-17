import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './store';

import App from './App';
import 'normalize.css';
import globalStyles from './index.styles';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`${globalStyles}`;

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

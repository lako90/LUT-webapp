import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import store from './store';
import theme from './theme';

import App from './modules/App';

/**
 * TODO: Activate Servirce Worker in production
 */
// import * as serviceWorker from './serviceWorker';

/* eslint-disable react/jsx-filename-extension, no-undef */
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension, no-undef */

// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();

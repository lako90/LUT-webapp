import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import rootReducers from './reducers';

import App from './modules/App';
import * as serviceWorker from './serviceWorker';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
/* eslint-enable no-underscore-dangle */

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  rootReducers,
  enhancer,
);

const brownColor = {
  light: '#F1DBBF',
  medium: '#5E4F3A',
  dark: '#382205',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: brownColor.dark,
      text: 'red',
      contrastText: brownColor.light,
    },
    secondary: {
      main: brownColor.medium,
      contrastText: brownColor.light,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Mali',
      'cursive',
    ].join(','),
  },
});

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

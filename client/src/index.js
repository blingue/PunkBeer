import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import createReduxStore from './store/configureStore';
import { App } from './components/App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle

// Create Redux store with initial state
const store = createReduxStore(preloadedState);
hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



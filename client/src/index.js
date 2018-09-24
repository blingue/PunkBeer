import React from 'react';
import ReactDOM from "react-dom";
//import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import ReactDOM from "react-dom";
//import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './components/App';

/*const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);*/

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

/*render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);*/

ReactDOM.render(<App />, document.getElementById('root'));



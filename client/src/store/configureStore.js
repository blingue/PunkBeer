// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import rootReducer from '../reducers';

// const loggerMiddleware = createLogger();

// export default createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );


import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/index';

const loggerMiddleware = createLogger();
export default function createReduxStore(preloadedState) {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;
    let enhancer= composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware));
    return createStore(reducer, preloadedState, enhancer);
}
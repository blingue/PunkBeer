import React from 'react';
import ReactDOM from "react-dom";
//import { Provider } from 'react-redux';

//import { store } from './_helpers';
import App from './_components/App';

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

/*render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);*/

ReactDOM.render(<App />,  document.getElementById('root'));



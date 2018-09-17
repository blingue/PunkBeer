import React, { Component } from "react";
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { createBrowserHistory } from 'history';

import history from './History';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import '../styles/App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

class App extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-sm-8 col-sm-offset-2">
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                    </div>
                </Router>
            </div>
        );
    }
}


export default App;

import React, { Component } from "react";
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import history from './History';
import Home from './Home';
import Login from './Login';
import '../styles/App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

class App extends Component {

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

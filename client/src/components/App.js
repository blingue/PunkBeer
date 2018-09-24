import React, { Component } from "react";
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SecureRoute from './SecureRoute';
import History from './History';
import Home from './Home';
import Login from './Login';
import '../styles/App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Router history={History}>
                    <div>
                        <SecureRoute exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

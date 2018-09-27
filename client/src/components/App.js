import React, { Component } from "react";
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SecureRoute from './SecureRoute';
import { Home } from './Home';
import { Login } from './Login';
import history from '../utils/history';
import { alertActions } from '../actions/alerts';
import '../styles/App.css';

class App extends Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className="col-md-4 col-md-offset-3 alert alert-danger">
                        {alert.message}
                    </div>
                }
                <Router history={history}>
                    <div>
                        <SecureRoute exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 

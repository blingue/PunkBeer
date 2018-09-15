import React, { Component } from "react";
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import '../styles/App.css';




class App extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const history = createBrowserHistory();
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={history}>
                            <div>
                                <Route path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
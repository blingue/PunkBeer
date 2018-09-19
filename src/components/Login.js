import React, { Component } from 'react';
import history from './History';

class Login extends Component {

    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());
        // create a reducer for this
        //localStorage.removeItem("user");

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleForgotPassWord = this.handleForgotPassWord.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        //const { dispatch } = this.props;
        if (username && password) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //dispatch(userActions.login(username, password));
            localStorage.setItem('user', JSON.stringify({ username, password }));
            history.push('/');
        }
    }

    handleForgotPassWord(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-sm-8 col-sm-offset-2">
                <div className="row jumbotron">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="active" id="login-form-link">Login</a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form id="login-form" role="form" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" name="username" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                                {this.state.submitted && !this.state.username &&
                                                    <div className="help-block">Username is required</div>
                                                }
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                                {this.state.submitted && !this.state.password &&
                                                    <div className="help-block">Password is required</div>
                                                }
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login" value="Log In" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="text-center">
                                                            <a href="" className="forgot-password" onClick={this.handleForgotPassWord}>Forgot Password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

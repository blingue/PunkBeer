import React, { Component } from 'react';

class HomePage extends Component {

    render(){
        return (
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign In</h5>
                        <form className="form-signin">
                        <div className="form-label-group">
                            <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <label for="inputEmail">Username</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <label for="inputPassword">Password</label>
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" for="customCheck1">Remember password</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        <hr class="my-4" />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomePage;
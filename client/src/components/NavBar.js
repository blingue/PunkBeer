import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    render() {
        const { user } = this.props;
        return (
            <div className="row jumbotron">
                <div className="col-sm-4">
                    <h2>Welcome {user.firstName} {user.lastName}!</h2>(Role : {user.role}) 
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <p className="logoutstyle pull-right">
                        <Link onClick={this.handleLogout} to="/login">
                            <span className="glyphicon glyphicon-log-out"></span> Logout
                        </Link>
                    </p>
                </div>
            </div>
        );
    }

    handleLogout() {
		// reset login status
		localStorage.removeItem("user");
	}
}


function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user,
    };
}
const connectedNavBar = connect(mapStateToProps)(NavBar);
export { connectedNavBar as NavBar };


				
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
            <div className="row container">
                <div className="col-sm-4">
                    <h1>Welcome {user.firstName} {user.lastName}!</h1>({user.role}) 
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <p><Link onClick={this.handleLogout} to="/login">Logout</Link></p>
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


				
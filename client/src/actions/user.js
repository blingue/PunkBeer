import { constants } from '../constants';
import { userService } from '../utils/api/userService';
//import { alertActions } from './';
import history from '../utils/history';

export const userActions = {
    login,
    logout
};

function logout() {
    userService.logout();
    return { type: constants.LOGOUT };
}

function login(username, password) {
    return dispatch => {
        //dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => { 
                    //dispatch(success(user));
                    localStorage.setItem('user', JSON.stringify({ username, password }));
                    history.push('/');
                },
                error => {
                    //dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                    console.log("Error loggin");
                }
            );
    };

    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    // function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
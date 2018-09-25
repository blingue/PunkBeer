import { envConstants } from '../constants/index';
import { userService } from '../utils/api/userService';
import { alertActions } from './alerts';
import history from '../utils/history';

export const userActions = {
    login,
    logout
};

function logout() {
    userService.logout();
    return { type: envConstants.LOGOUT };
}

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: envConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: envConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: envConstants.LOGIN_FAILURE, error } }
}
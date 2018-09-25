import { apiConstants } from '../../constants/index';

export const userService = { login, logout };

function login(username, password) {
    return fetch(`${apiConstants.GET_USER_URL}?username=${username}&password=${password}`)
        .then(processResponse).then(user => {
            if (user) { // login successful 
                localStorage.setItem('user', JSON.stringify(user)); // store user in local storage for tracking
            }
            return user;
        });
}

function processResponse(response) {
    return response.text().then(text => {
        if(response.status === 200) return text && JSON.parse(text);
        else{
            if (response.ok === false) {
                if (response.status === 401) {
                    //location.reload(true);
                }
                // auto logout if 401 response returned from api
                logout();
                const error = text;
                return Promise.reject(error);
            }
        }
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
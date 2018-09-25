import { envConstants } from '../constants/index';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  
  switch (action.type) {
    case envConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case envConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case envConstants.LOGIN_FAILURE:
      return {};
    case envConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
import { envConstants } from '../constants/index';

export function alert(state = {}, action) {
  switch (action.type) {
    case envConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case envConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case envConstants.CLEAR:
      return {};
    default:
      return state
  }
}
import { envConstants } from '../constants/index';

export function beers(state = {}, action) {
  switch (action.type) {
    case envConstants.FETCH_BEERS:
      return {
        ...state,
        requestState: envConstants.PENDING,
        beers : [],
        error: null
      };
    case envConstants.FETCH_BEERS_SUCCESS:
      return {
        ...state,
        requestState: envConstants.FULFILLED,
        beers : action.beers,
        error : null
      };
    case envConstants.FETCH_BEERS_ERROR:
      return {
        ...state,
        requestState: envConstants.REJECTED,
        beers : [],
        error : action.error
      };
    default:
      return state
  }
}
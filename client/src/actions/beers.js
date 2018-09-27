import { envConstants } from '../constants/index';
import { beerService } from '../utils/api/beerService';
//import history from '../utils/history';

export const beerActions = {
    fetchBeers,
    fetchBeersSuccess,
    fetchBeersError,
    fetchBeersRequest
};

function fetchBeers(options) {
    return dispatch => {
        dispatch(request({ options }));
        beerService.getBeers(options.abv_lt)
            .then(
                beers => { 
                    dispatch(success(beers));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
    
    function request(beers) { return { type: envConstants.FETCH_BEERS, beers } }
    function success(beers) { return { type: envConstants.FETCH_BEERS_SUCCESS, beers } }
    function failure(error) { return { type: envConstants.FETCH_BEERS_ERROR, error } }
}

function fetchBeersRequest() {
    return { type: envConstants.FETCH_BEERS };
}

function fetchBeersSuccess(beers) {
    return { type: envConstants.FETCH_BEERS_SUCCESS, beers };
}

function fetchBeersError(beers) {
    return { type: envConstants.FETCH_BEERS_ERROR, beers };
}

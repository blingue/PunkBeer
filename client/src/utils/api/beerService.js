import { apiConstants } from '../../constants/index';

export const beerService = { getBeers };

function getBeers(abv) {
    const options = abv ? `?abv_lt=${abv}`:'';
    return fetch(`https://api.punkapi.com/v2/beers${options}`)
        .then(processResponse).then(beers => {
            return beers;
        });
}

function processResponse(response) {
    return response.text().then(text => {
        if(response.status === 200) return text;
        else return Promise.reject("BeerPage.error_api");
    });
}
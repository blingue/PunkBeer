import React from 'react';
import BeerListItem from './BeerListItem';

const BeerList = props => {
    const beerItems = props.beers.map(beer => {
        return (
            <BeerListItem key={beer.id}
                beer={beer} />
        );
    });

    return (
        <div className="container">
            {/*<div class="row">
                <div className="col-md-5"></div>
                <div className="loader"></div>
                <div className="col-md-5"></div>
            </div>
            */}

            <div className="row">
                <div className="col-md-12">
                    {beerItems}
                </div>
            </div>
        </div>
    );
};

export default BeerList;
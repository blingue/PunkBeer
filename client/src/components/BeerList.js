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

            <p> Total record(s) : {beerItems.length} </p>
            <div className="row">
                <div className="col-md-12">
                    {beerItems}
                </div>
            </div>
        </div>
    );
};

export default BeerList;
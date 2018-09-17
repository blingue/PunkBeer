import React from 'react';

const BeerListItem = ({ beer }) => {
    const imageUrl = beer.image_url;
    const title = beer.name;

    return (
        <li className="list-group-item">
          <div className="beer-list media">
            <div className="media-left">
              <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
              <div className="media-heading">{title}</div>
            </div>
          </div>
        </li>
    );
};

export default BeerListItem;
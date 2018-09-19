import React from 'react';

const BeerListItem = ({ beer }) => {
  const imageUrl = beer.image_url;
  const title = beer.name;

  return (
    <div style={divStyle}>
      <div className="card bg-light mb-3" style={cardStyle}>
        <div className="card-header" style={cardHeader}>{title.substr(0, 34)}</div>
        <div className="card-body">
          <div className="row">
            <div className="column" style={columnImgStyle}><img src={imageUrl} style={style} /></div>
            <div className="column" style={columnDesStyle}>{beer.description.substr(0, 120)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  width: '50px',
  height: '100px',
  margin: '10px 5px 0px 5px'
};

const divStyle = {
  margin: '0 0 10px',
  width: '32%',
  float: 'left',
}

const cardStyle = {
  maxWidth: '30rem'
}

const columnImgStyle = {
  float: 'left',
  width: '30%',
  paddingLeft: '10px'
}

const columnDesStyle = {
  float: 'left',
  width: '70%',
  paddingRight: '10px',
}

const cardHeader = {
  fontSize: '15px',
  fontWeight: 'bold'

}

export default BeerListItem;
import React from 'react';

const PropertyCard = props => {
  return (
    <div>
      <hr></hr>
      <div className="card text-center">
        <div className="overflow-auto">
          <img src={props.imgsrc} alt="image-1" className="card-img-top" />
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
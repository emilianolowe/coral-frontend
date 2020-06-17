import React from 'react';

const NoButtonCard = props => {
  return (
    <div mt-5>
      <div className="card text-center border-0 m-0 p-0">
        <div className="overflow-auto">
          <img src={props.imgsrc} alt="property pic" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-secondary">{props.bodyText}</p>
        </div>
      </div>
    </div>
  );
};
export default NoButtonCard;
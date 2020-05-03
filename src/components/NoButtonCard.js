import React from 'react';

const NoButtonCard = props => {
  return (
    <div mt-5>
      <div className="card text-center border-0 m-0 p-0">
        <div className="overflow-auto">
          <img src={props.imgsrc} alt="image-1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.bodyText}</p>
        </div>
      </div>
    </div>
  );
};
export default NoButtonCard;
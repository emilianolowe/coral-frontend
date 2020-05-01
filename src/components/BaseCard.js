import React from 'react';

const Card = props => {
  return (
    <div>
      <div className="card text-center border-0 mt-4 p-4">
        <div className="overflow-auto">
          <img src={props.imgsrc} alt="image-1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.bodyText}</p>
          <a href="#" className="btn btn-outline-dark">{props.btnText}</a>
        </div>
      </div>
    </div>
  );
};
export default Card;
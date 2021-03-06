import React from 'react';

const ButtonCard = props => {
  return (
      <div className="card text-center border-0 m-3 p-3">
        <div className="overflow-auto">
          <img src={props.imgsrc} alt="property pic" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.bodyText}</p>
          <a href={props.linkurl} className="btn btn-info">{props.btnText}</a>
        </div>
      </div>
  );
};
export default ButtonCard;
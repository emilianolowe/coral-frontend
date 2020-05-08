import React, { Component } from "react";
//import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const PropertyCard = props => {
  let img = "https://media.istockphoto.com/photos/modern-house-interior-design-project-sketch-3d-rendering-picture-id973410708";
  if (props.property.imageURLs && props.property.imageURLs.length > 0 && props.property.imageURLs[0]) {
    img = props.property.imageURLs[0];
  }
  return (
    <div className="pint-card">
      <img className="pint-card-img" src={img} />
      <div className="pint-overlay pint-street">{props.property.address ? props.property.address.streetName : ""}</div>
      <div className="pint-overlay pint-price">€ {props.property.rent}</div>
      <div className="pint-overlay pint-favorite">Fav</div>
      <div className="pint-overlay pint-contact">Mail</div>
    </div>
  );
};
export default PropertyCard;
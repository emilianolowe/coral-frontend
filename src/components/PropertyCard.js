import React from "react";
import Carousel from "./ImagesCarousel";

const PropertyCard = props => {
  const favoriteOverlay = props.favorite?(<div className="pint-overlay pint-favorite"><i className="fa fa-heart"></i></div>):""
  const contactOverlay = props.contact?(<div className="pint-overlay pint-contact"><i className="fa fa-envelope"></i></div>):""
  return (
    <div className="pint-card">
      <a href={props.link}>
        <Carousel id={props.property._id} size="card"></Carousel>
      </a>
      <div className="pint-overlay pint-street">{props.property.address ? props.property.address.street : ""}</div>
      <div className="pint-overlay pint-price">€ {props.property.rent}</div>
      {favoriteOverlay}
      {contactOverlay}
    </div>
  );
};
export default PropertyCard;
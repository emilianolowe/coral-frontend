import React from "react";
import Carousel from "./ImagesCarousel";

const PropertyCard = props => {
  let img = "https://media.istockphoto.com/photos/modern-house-interior-design-project-sketch-3d-rendering-picture-id973410708";
  if (props.property.imageURLs && props.property.imageURLs.length > 0 && props.property.imageURLs[0]) {
    img = props.property.imageURLs[0];
  }
  const propertyLink = `/myproperty?id=${props.property._id}`
  return (
    <div className="pint-card">
      <a href={propertyLink}>
        <Carousel id={props.property._id} size="card"></Carousel>
      </a>
      <div className="pint-overlay pint-street">{props.property.address ? props.property.address.street : ""}</div>
      <div className="pint-overlay pint-price">€ {props.property.rent}</div>
    </div>
  );
};
export default PropertyCard;
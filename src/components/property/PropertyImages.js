import React, { useState } from "react";
import MapContainer from "../MapContainer";

const PropertyImages = props => {

  const [mapVisible, setMapVisible] = useState(false);

  function toggleMap() {
    console.log("showing map")
    setMapVisible(!mapVisible)
  }

  if (!props.property || !props.property.imageURLs) {
    return (<div></div>);
  }


  const images = props.property.imageURLs.map((img, idx) => (
    <div key={idx} className={idx === 0 ? "carousel-item active" : "carousel-item"}>
      <img className="d-block w-100 pint-detail-img" src={img} alt="property slide" />
    </div>
  ));

  if (mapVisible) {
    return (
      <div className="pint-detail">
        <div id="map" className="pint-map">
          <MapContainer lat={props.property.address.latitude} lng={props.property.address.longitude} />
        </div>
        <div className="pint-map-buttons">
          <button className="btn btn-info" onClick={toggleMap}>
            <i className='fa fa-image'></i>
          </button>
        </div>
      </div>
    )  
  } else {
    return (
      <div className="pint-detail">
        <div id={`imgCarousel-${props.property._id}`} className="carousel slide" data-interval="false">
          <div className="carousel-inner">
            {images}
          </div>
          <a className="carousel-control-prev" href={`#imgCarousel-${props.property._id}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href={`#imgCarousel-${props.property._id}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="pint-map-buttons">
          <button className="btn btn-info" onClick={toggleMap}>
            <i className='fa fa-map'></i>
          </button>
        </div>
      </div>
    )  
  }

}
export default PropertyImages;
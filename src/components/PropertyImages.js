import React from "react";

function showMap() {
  console.log("showing map")
}

const PropertyImages = props => {

  if (!props.property || !props.property.imageURLs) {
    return (<div></div>);
  }

  const indicators = props.property.imageURLs.map((img, idx) => (
    <li key={idx} data-target={`#imgCarousel-${props.property._id}`}
      data-slide-to={idx}
      className={idx === 0 ? "active" : ""}>
    </li>
  ));

  const images = props.property.imageURLs.map((img, idx) => (
    <div key={idx} className={idx === 0 ? "carousel-item active" : "carousel-item"}>
      <img className="d-block w-100 pint-detail-img" src={img} alt="property slide" />
    </div>
  ));

  return (
    <div className="pint-detail">
        <div id={`imgCarousel-${props.property._id}`} className="carousel slide" data-interval="false">
          <ol className="carousel-indicators">
            {indicators}
          </ol>
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
      <div id="map" className="d-none"></div>
      <div className="pint-overlay pint-map" onClick={showMap}>Map</div>
    </div>
  );
};
export default PropertyImages;
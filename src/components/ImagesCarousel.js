import React, { Component } from "react";
import { getProperty } from "../DAO/PropertiesDAO";

class ImagesCarousel extends Component {

    constructor(props) {
        super(props)
        // let img = "https://media.istockphoto.com/photos/modern-house-interior-design-project-sketch-3d-rendering-picture-id973410708";
        // if (props.property.imageURLs && props.property.imageURLs.length > 0 && props.property.imageURLs[0]) {
        //   img = props.property.imageURLs[0];
        // }
      
        this.state = {
            property: {
                id: this.props.id,
                imageURLs: []
            }
        }

        this.fetchData = this.fetchData.bind(this);

        this.fetchData();

    }

    // refactor to try/catch async from promise/callback?
    fetchData() {
        getProperty(this.props.id, response => {
            console.log("fetching response", response)
            this.setState({
                property: response
            })
        })
    }

    render() {
        const imgSize = this.props.size === "card" ? "d-block w-100 pint-detail-img-small" : "d-block w-100 pint-detail-img";

        const indicators = this.state.property.imageURLs.map((img, idx) => (
            <li key={idx} data-target={`#imgCarousel-${this.props.id}`}
                data-slide-to={idx}
                className={idx === 0 ? "active" : ""}>
            </li>
        ));
        const images = this.state.property.imageURLs.map((img, idx) => (
            <div key={idx} className={idx === 0 ? "carousel-item active" : "carousel-item"}>
                <img className={imgSize} src={img} alt="property slide" />
            </div>
        ));
        return (
            <div className="container  mt-4">
                <div id={`imgCarousel-${this.props.id}`} className="carousel slide" data-interval="false">
                    <ol className="carousel-indicators">
                        {indicators}
                    </ol>
                    <div className="carousel-inner">
                        {images}
                    </div>
                    <a className="carousel-control-prev" href={`#imgCarousel-${this.props.id}`} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#imgCarousel-${this.props.id}`} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default ImagesCarousel;
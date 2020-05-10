import React, { Component } from "react";

class ImagesCarousel extends Component {

    constructor(props) {
        super(props)
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
        fetch("http://localhost:3000/v1/properties/" + this.props.id)
            .then(response => response.json())
            .then(response => {
                console.log("fetching response", response)
                this.setState({
                    property: response
                })
            })
    }

    render() {
        const imgSize = this.props.size === "card" ? "d-block w-100 pint-detail-img-small" : "d-block w-100 pint-detail-img";

        const indicators = this.state.property.imageURLs.map((img, idx) => (
            <li key={idx} data-target="#imgCarousel"
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
            <div className="container">
                <div id="imgCarousel" className="carousel slide" data-interval="false">
                    <ol className="carousel-indicators">
                        {indicators}
                    </ol>
                    <div className="carousel-inner">
                        {images}
                    </div>
                    <a className="carousel-control-prev" href="#imgCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#imgCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default ImagesCarousel;
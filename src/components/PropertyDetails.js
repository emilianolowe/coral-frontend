import React, { Component } from "react";
import ImagesCarousel from './ImagesCarousel';
import PropertyGallery from './PropertyGallery';
import { getProperty } from './PropertiesDAO';
class PropertyDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property: {
                id: this.props.id
            },
            error: null
        }

        this.loadProperty = this.loadProperty.bind(this);
        try {
            getProperty(this.props.id, this.loadProperty)
        } catch (error) {
            this.setState({ error: error.message })
        }

    }

    loadProperty(property) {
        this.setState({ property: property });
    }

    render() {

        let street = "";
        if (this.state.property.address) {
            street = this.state.property.address.street + ', '
                + this.state.property.address.city
        }
        return (
            <div className="container">
                <div className="container ">
                    <ImagesCarousel id={this.props.id} />
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-7">
                                <h2>{this.state.property.title}</h2>
                            </div>
                            <div className="col-5">
                                <div className="btn btn-info">Book a Visit</div>
                                <div className="btn btn-info">Chat with the owner</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    {street}
                                </p>
                                <div className="btn btn-info">Map</div>
                                <div className="btn btn-info">Street</div>
                                <div className="btn btn-info">360 Video</div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <p>
                                    € <strong>{this.state.property.rent}</strong> monthly rent
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h3>Characteristics</h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <p>{this.state.property.size} {this.state.property.sizeUnit}</p>
                                <p>{this.state.property.bedrooms} bedrooms</p>
                                <p>{this.state.property.bathrooms} bathrooms</p>
                                <p>Lift: {this.state.property.lift ? 'yes' : 'no'}</p>
                            </div>
                            <div className="col">
                                <p>Pets allowed: {this.state.property.petfriendly ? 'yes' : 'no'}</p>
                                <p>Furnitured: {this.state.property.furnitured ? 'yes' : 'no'}</p>
                                <p>Near metro station: {this.state.property.nearMetroStation ? 'yes' : 'no'}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h3>Owner's description</h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <p>{this.state.property.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-seperator"><b>more like this</b></div>
                <PropertyGallery hideFilter={true} />
            </div>
        );
    }
}

export default PropertyDetails;
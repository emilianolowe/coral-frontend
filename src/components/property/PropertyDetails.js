import React, { Component } from "react";
import PropertyImages from './PropertyImages';
import PropertyGallery from './PropertyGallery';
import { getProperty } from '../../DAO/PropertiesDAO';
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

        //<div className="pint-overlay pint-contact"><i className="fa fa-comment"></i></div>

        let street = "";
        if (this.state.property.address) {
            street = this.state.property.address.street + ', '
                + this.state.property.address.city
        }
        return (
            <div className="container">
                <PropertyImages property={this.state.property} />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8 d-flex justify-content-lg-start justify-content-center">
                            <h2>{this.state.property.title}</h2>
                        </div>
                        <div className="col-lg d-flex justify-content-lg-end justify-content-center">
                            <a className="btn btn-info" href="/">Book a Visit</a>
                            <a className="btn btn-info" href="/chat">Chat with the owner</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-lg-start justify-content-center">
                            <p>{street}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-lg-start justify-content-center">
                            <p>€ <strong>{this.state.property.rent}</strong> monthly rent</p>
                        </div>
                    </div>
                </div>
                
                <div className="container mt-4">
                    <h3 className="text-sm-left text-center">Characteristics</h3>
                    <div className="row mt-3">
                        <div className="col">
                            <p className="text-sm-left text-center">{this.state.property.size} {this.state.property.sizeUnit}</p>
                            <p className="text-sm-left text-center">{this.state.property.bedrooms} bedrooms</p>
                            <p className="text-sm-left text-center">{this.state.property.bathrooms} bathrooms</p>
                            <p className="text-sm-left text-center">Lift: {this.state.property.lift ? 'yes' : 'no'}</p>
                        </div>
                        <div className="col">
                            <p className="text-sm-left text-center">Pets allowed: {this.state.property.petfriendly ? 'yes' : 'no'}</p>
                            <p className="text-sm-left text-center">Furnitured: {this.state.property.furnitured ? 'yes' : 'no'}</p>
                            <p className="text-sm-left text-center">Near metro station: {this.state.property.nearMetroStation ? 'yes' : 'no'}</p>
                        </div>
                    </div>

                    <h3 className="text-sm-left text-center">Owner's description</h3>
                    <p className="text-sm-left text-center">{this.state.property.description}</p>

                </div>
                <div className="more-seperator"><b>more like this</b></div>
                <PropertyGallery hideFilter={true} />
            </div>
        );
    }
}

export default PropertyDetails;
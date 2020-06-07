import React, { Component } from 'react';
import { getProperty } from './PropertiesDAO';
import ImagesCarousel from './ImagesCarousel';

class MyProperty extends Component {

    constructor(props) {
        super(props);

        this.state = {
            proertyId: (new URLSearchParams(window.location.search)).get('id') || ''
        };

        this.loadProperty = this.loadProperty.bind(this);
        try {
            getProperty(this.state.proertyId, this.loadProperty)
        } catch (error) {
            this.setState({ error: error.message })
        }

    }

    loadProperty(property) {
        this.setState({ property: property });
    }

    render() {

        if(!this.state.property) {
            return (
                <div>loading...</div>
            )
        }

        let street = "";
        if (this.state.property.address) {
            street = this.state.property.address.street + ', '
            + this.state.property.address.city    
        }
        return (
            <div className="container">
                <div className="container ">
                    <ImagesCarousel id={this.state.property._id} />
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-8">
                                <h2>{this.state.property.title}</h2>
                            </div>
                            <div className="col">
                                <div className="btn btn-info">this property is published</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    {street}
                                </p>
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
                        <div className="row">
                            <div className="col">
                                <p>{this.state.property.description}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h3>Visits Schedule</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>visits schedule here</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h3>Chat with potential renters</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>chats here</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h3>Analytics - page views</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="https://www.bleathem.ca/patternfly-org/pattern-library/data-visualization/line-chart/img/single-line-chart.png" alt="visits"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyProperty;
import React, { Component } from "react";
import ImagesCarousel from './ImagesCarousel';
import PropertyGallery from './PropertyGallery';

class PropertyDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property: {
                id: this.props.id
            },
            error: null
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
            .catch(error => {
                console.log('There has been a problem fetching: ' + error.message)
                this.setState({ error: error.message })
            });
    }

    handleClick() { }

    render() {
        let propDetails = (<div>trying to fetch data...</div>);
        if (this.state.error) {
            propDetails = (<div>Error: {this.state.error}</div>);
        } else if (this.state.property && this.state.property.address) {
            propDetails = (
                <div className="container ">
                    <ImagesCarousel id={this.props.id} />
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-8">
                                <h2>{this.state.property.title}</h2>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <button className="btn btn-info">BOOK A VISIT</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    {this.state.property.address.typeOfStreet + ' '
                                        + this.state.property.address.streetName + ', '
                                        + this.state.property.address.city}
                                </p>
                                <span class="badge badge-info mr-3">see map</span>
                                <span class="badge badge-info mr-3">see street</span>
                                <span class="badge badge-info">360 video</span>
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
            );
        }

        return (
            <div className="container">
                <br /><br />
                {propDetails}
                <div className="more-seperator"><b>more like this</b></div>
                <PropertyGallery hideFilter={true} />
            </div>
        );
    }
}

export default PropertyDetails;
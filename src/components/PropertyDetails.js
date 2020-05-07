import React, { Component } from "react";
import ImagesCarousel from './ImagesCarousel';

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
                this.setState({error: error.message})
            });
    }

    handleClick() { }

    render() {
        let propDetails = (<div>trying to fetch data...</div>);
        if (this.state.error) {
        propDetails = (<div>Error: {this.state.error}</div>);
        } else if (this.state.property && this.state.property.address) {
            propDetails = (
                <div className="row">
                    <div className="col">
                        <ImagesCarousel id={this.props.id} />
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <i className="fa fa-heart"></i>
                                    <i className="fa fa-share-alt"></i>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary">BOOK A VISIT</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2>{this.state.property.title}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>
                                        {this.state.property.address.typeOfStreet + ' ' 
                                    + this.state.property.address.streetName + ', '
                                    + this.state.property.address.city }
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>
                                        € {this.state.property.rent} monthly rent
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <br/><br/>
                                    <button className="btn btn-secondary">Characteristics</button>
                                    <button className="btn btn-link">Description</button>
                                    <button className="btn btn-link">Amenities</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <br/>
                                    <p>{this.state.property.size} {this.state.property.sizeUnit}</p>
                                    <p>{this.state.property.bedrooms} bedrooms</p>
                                    <p>{this.state.property.bathrooms} bathrooms</p>
                                    <p>Lift: {this.state.property.lift?'yes':'no'}</p>
                                    <p>Pets allowed: {this.state.property.petfriendly?'yes':'no'}</p>
                                    <p>Furnitured: {this.state.property.furnitured?'yes':'no'}</p>
                                    <p>Near metro station: {this.state.property.nearMetroStation?'yes':'no'}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <br/><br/>
                                    <button className="btn btn-primary">360 VIDEO</button>
                                    <button className="btn btn-link">MAP</button>
                                    <button className="btn btn-link">STREET VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="container">
                <br/><br/>
                {propDetails}
            </div>
        );
  }
}

export default PropertyDetails;
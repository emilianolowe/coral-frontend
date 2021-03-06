import React, { Component } from 'react';
import { getProperty } from '../../DAO/PropertiesDAO';
import PropertyImages from './PropertyImages';
import ChatList from '../chat/ChatList';

class MyProperty extends Component {

    constructor(props) {
        super(props);

        this.state = {
            propertyId: (new URLSearchParams(window.location.search)).get('id') || '',
        };

        this.loadProperty = this.loadProperty.bind(this);

        try {
            getProperty(this.state.propertyId, this.loadProperty)
        } catch (error) {
            this.setState({ error: error.message })
        }

    }

    loadProperty(property) {
        this.setState({ property: property });
    }

    render() {

        if (!this.state.property) {
            return (
                <div>loading...</div>
            )
        }

        let street = "";
        if (this.state.property.address) {
            street = this.state.property.address.street + ', '
                + this.state.property.address.city
        }
        let msgTitle = "Property in draft mode"
        let msgText = "Please finish editing your property data so we can help you renting it right away..."
        if (this.state.property.status === "pending validation") {
            msgTitle = "Property under validation"
            msgText = `We are in contact with you to list your property with 
            great pictures. It will be listed to have great relevance. We will help you 
            finding a vetted renter to take care of your property. Estimated time: 48 hours`
        } else if (this.state.property.status === "published") {
            msgTitle = "This property is published"
            msgText = `We are helping you finding a trusted renter. 
                Please check below how many people have visited you page. 
                Check also messages, visits and offers.`
        }
        let message = (
            <div className="jumbotron p-3 p-md-5 text-white rounded-lg bg-info">
                <div className="col-md-6 px-0">
                    <h1 className="display-5 font-italic">{msgTitle}</h1>
                    <p className="lead my-3">{msgText}</p>
                    <p className="lead mb-0">
                        <a href="/chat" className="btn btn-info">
                            Contact us
              </a>
                        <a href="/myProperties" className="btn btn-info">
                            My Properties
              </a>
                    </p>
                </div>
            </div>
        )
        let visits = ""
        if (this.state.property.status === "published") {
            visits = (
                <div className="container mt-5">
                    <h3 className="text-sm-left text-center mt-3">Visits Schedule</h3>

                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan="2">Prospect</th>
                                        <th>Visit date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="avatar">
                                                <img src="img/kanya.png" alt="prospect" />
                                            </div>
                                        </td>
                                        <td>
                                            Kanya Lyons
                                            </td>
                                        <td>Jun 5, 2020</td>
                                        <td>
                                            <button className="btn btn-info">Change date</button>
                                            <button className="btn btn-info">View Profile</button>
                                            <button className="btn btn-danger">Cancel</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="avatar">
                                                <img src="img/nano.png" alt="prospect" />
                                            </div>
                                        </td>
                                        <td>Emiliano Lowe</td>
                                        <td>Jun 15, 2020</td>
                                        <td>
                                            <button className="btn btn-info">Change date</button>
                                            <button className="btn btn-info">View Profile</button>
                                            <button className="btn btn-danger">Cancel</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h3 className="text-sm-left text-center mt-3">Incoming chat messages</h3>
                    <div className="row">
                        <div className="col">
                            <ChatList propertyId={this.state.property._id} />
                        </div>
                    </div>

                    <h3 className="text-sm-left text-center mt-3">Analytics - page views</h3>
                    <div className="row">
                        <div className="col">
                            <img src="https://www.bleathem.ca/patternfly-org/pattern-library/data-visualization/line-chart/img/single-line-chart.png"
                                alt="visits"
                                width="100%" />
                        </div>
                    </div>
                </div>

            )
        }

        return (
            <div className="container">
                {message}
                <PropertyImages property={this.state.property} />
                <h2 className="mt-4 d-flex justify-content-lg-start justify-content-center">{this.state.property.title}</h2>
                <div className="d-flex justify-content-lg-start justify-content-center">
                    <p>{street}</p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center">
                    <p>€ <strong>{this.state.property.rent}</strong> monthly rent</p>
                </div>
                <h4 className="text-sm-left text-center">Characteristics</h4>
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

                <h4 className="text-sm-left text-center">Owner's description</h4>
                <p className="text-sm-left text-center">{this.state.property.description}</p>

                {visits}

            </div >
        );
    }
}

export default MyProperty;
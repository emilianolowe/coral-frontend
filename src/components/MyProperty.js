import React, { Component } from 'react';
import { getProperty } from './PropertiesDAO';
import PropertyImages from './PropertyImages';
import ChatList from './ChatList';

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
        return (
            <div className="container">
                <PropertyImages property={this.state.property} />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8 d-flex justify-content-lg-start justify-content-center">
                            <h2>{this.state.property.title}</h2>
                        </div>
                        <div className="col-lg d-flex justify-content-lg-end justify-content-center">
                            <div className="btn btn-info">this property is published</div>
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

                <div className="container mt-4">
                    <h3 className="text-sm-left text-center">Visits Schedule</h3>

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

                    <h3 className="text-sm-left text-center">Incoming messages from Prospects</h3>
                    <div className="row">
                        <div className="col">
                            <ChatList />
                        </div>
                    </div>

                    <h3 className="text-sm-left text-center">Analytics - page views</h3>
                    <div className="row">
                        <div className="col">
                            <img src="https://www.bleathem.ca/patternfly-org/pattern-library/data-visualization/line-chart/img/single-line-chart.png"
                                alt="visits"
                                width="100%" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default MyProperty;
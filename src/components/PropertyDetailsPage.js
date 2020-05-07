import React, { Component } from 'react';
import PropertyDetails from './PropertyDetails'

class PropertyDetailsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            proertyId: (new URLSearchParams(window.location.search)).get('id') || ''
        };

    }

    render () {
        return (
            <div className="container">
                <PropertyDetails id={this.state.proertyId} />
            </div>
        );
    }
}

export default PropertyDetailsPage;
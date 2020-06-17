import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    height: '60vh',
    minHeight: '400px',
    width: '100%'
};

export class MapContainer extends Component {
    render() {
        const center = {
            lat: this.props.lat,
            lng: this.props.lng
        }
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={center}>

                <Marker
                    title={'Live here'}
                    name={'Here'}
                    position={center} />

            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCJO0TRUqQGb8A5r0z5-Y2bplU8nDg0Y7A'
})(MapContainer);
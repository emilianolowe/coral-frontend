import React, { Component } from 'react';
import Card from './ButtonCard';

class ServiceProvidersCard extends Component {
  render() {
    return (
      <div className="row-fluid justify-content-center">
        <div className="col-md-8 offset-md-2">
          <Card imgsrc="img/service-providers.jpeg"
            title="Service Providers"
            bodyText="Contract vetted service providers like handymen, plumbers, and housekeepers."
            btnText="Find Help" />
        </div>
      </div>
    );
  }
}

export default ServiceProvidersCard;
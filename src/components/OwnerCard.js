import React, { Component } from 'react';
import Card from './BaseCard';

class OwnerCard extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row-fluid justify-content-center">
          <div className="col-md-8 offset-md-2">
            <Card imgsrc="img/owner-card-property.jpg"
              title="Peace of mind."
              bodyText="We make renting your home safe and easy."
              btnText="List A Property" />
          </div>
          <div className="col-md-8 offset-md-2">
            <Card imgsrc="img/virtually-sign.jpg"
              title="Virtually Sign"
              bodyText="No bureaucracy! Sign all paperwork digitally with our safe and easy tools."
              btnText="Get Started" />
          </div>
          <div className="col-md-8 offset-md-2">
            <Card imgsrc="img/service-providers.jpeg"
              title="Service Providers"
              bodyText="Contract vetted service providers like handymen, plumbers, and housekeepers."
              btnText="Find Help" />
          </div>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
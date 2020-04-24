import React, { Component } from 'react';
import Card from './BaseCard';

class WhyCoralCard extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc="img/rental-app.jpg"
              title="Search, See and Sign"
              bodyText="100% online, no bureaucracy. Find a place to love with security, without extra deposits, no realtor fees and no hassle."
              btnText="Search Now" />
          </div>
          <div className="col-md-4">
            <Card imgsrc="img/DocuSign740.png"
              title="Virtually Sign"
              bodyText="No more bureaucracy! Sign all paperwork digitally with our safe and easy tools."
              btnText="Sign up Now" />
          </div>
          <div className="col-md-4">
            <Card imgsrc="img/plumber-edited.jpg"
              title="Network Providers"
              bodyText="Hire trusted professional from our network of vetted service providers for repairs, maintenance, and other services."
              btnText="See our List" />
          </div>
        </div>
      </div>
    );
  }
}

export default WhyCoralCard;
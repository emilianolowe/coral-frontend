import React, { Component } from 'react';
import Card from './ButtonCard';

class VirtuallySignCard extends Component {
  render() {
    return (
      <div className="row-fluid justify-content-center">
        <div className="col-md-8 offset-md-2">
          <Card imgsrc="img/virtually-sign.jpg"
            title="Virtually Sign"
            bodyText="Easily sign documents online."
            btnText="Learn More"
            linkurl="/aboutus" />
        </div>
      </div>
    );
  }
}

export default VirtuallySignCard;
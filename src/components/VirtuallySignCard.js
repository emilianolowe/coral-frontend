import React, { Component } from 'react';
import Card from './ButtonCard';

class VirtuallySignCard extends Component {
  render() {
    return (
      <div className="row-fluid justify-content-center">
        <div className="col-md-8 offset-md-2">
          <Card imgsrc="img/virtually-sign.jpg"
            title="Virtually Sign"
            bodyText="No bureaucracy! Sign all paperwork digitally with our safe and easy tools."
            btnText="Get Started" />
        </div>
      </div>
    );
  }
}

export default VirtuallySignCard;
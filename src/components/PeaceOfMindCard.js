import React, { Component } from 'react';
import Card from './ButtonCard';

class PeaceOfMindCard extends Component {
  render() {
    return (
      <div className="row-fluid justify-content-center">
        <div className="col-md-8 offset-md-2">
          <Card imgsrc="img/peace-of-mind.jpg"
            title="Peace Of Mind"
            bodyText="We make renting your home safe and easy."
            btnText="Get Started" 
            linkurl="/myproperties" />
        </div>
      </div>
    );
  }
}

export default PeaceOfMindCard;
import React, { Component } from "react";
import Hero from "./Hero";
import OwnerCard from "./OwnerCard";

class OwnersLanding extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Rent Guarantee"
          subHeader="We insure that you collect rent every month. Long term rentals only."
          imgSrc="img/rent-gaurantee.jpeg"
          imgAlt="Barcelona street view" />
        <div class="row mt-5"></div>
        <OwnerCard />
      </div>
    );
  }
}

export default OwnersLanding;

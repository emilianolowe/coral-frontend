import React, { Component } from "react";
import Hero from "./Hero";
import PeaceOfMindCard from "./PeaceOfMindCard";
import VirtuallySignCard from "./VirtuallySignCard";
import ServiceProvidersCard from "./ServiceProvidersCard";

class OwnersLanding extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Rent Guarantee"
          subHeader="We insure that you collect rent every month. Long term rentals only."
          imgSrc="img/rent-gaurantee.jpeg"
          imgAlt="Barcelona street view" />
        <div class="row mt-5"></div>
        <PeaceOfMindCard />
        <ServiceProvidersCard />
        <VirtuallySignCard />
      </div>
    );
  }
}

export default OwnersLanding;

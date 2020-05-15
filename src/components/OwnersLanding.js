import React, { Component } from "react";
import Hero from "./OwnersHero";
import PeaceOfMindCard from "./PeaceOfMindCard";
import ServiceProvidersCard from "./ServiceProvidersCard";

class OwnersLanding extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Vetted Renters"
          subHeader="Rent your property securely. Long term rentals only."
          imgSrc="img/rent-gaurantee.jpeg"
          imgAlt="Barcelona street view" />
        <div class="row mt-5"></div>
        <PeaceOfMindCard />
        <ServiceProvidersCard />
      </div>
    );
  }
}

export default OwnersLanding;

import React, { Component } from "react";
import Hero from "./Hero";
import FindAPlaceToLoveCard from "./FindAPlaceToLoveCard";
import VirtuallySignCard from "./VirtuallySignCard";
import ServiceProvidersCard from "./ServiceProvidersCard";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Rent your dream home!"
          subHeader="No realtor fees. No extra deposits. No hassle."
          imgSrc="/img/hero-home.jpg"
          imgAlt="Barcelona building facade"
          mb-5 pb-5 />
        <div class="row mt-5"></div>
        <FindAPlaceToLoveCard />
        <VirtuallySignCard />
        <ServiceProvidersCard />
      </div>
    );
  }
}

export default HomePage;

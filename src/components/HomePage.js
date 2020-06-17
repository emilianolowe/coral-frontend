import React, { Component } from "react";
import Hero from "./Hero";
import FindAPlaceToLoveCard from "./FindAPlaceToLoveCard";
import VirtuallySignCard from "./VirtuallySignCard";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Rent your dream home!"
          subHeader="No realtor fees. No extra deposits. No hassle."
          imgSrc="/img/hero-home.jpg"
          imgAlt="Barcelona building facade"
          mb-5 pb-5 />
        <div className="row mt-5"></div>
        <FindAPlaceToLoveCard />
        <VirtuallySignCard />
      </div>
    );
  }
}

export default HomePage;

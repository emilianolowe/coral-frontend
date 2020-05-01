import React, { Component } from "react";
import Hero from "./Hero";
import WhyCoralCard from "./WhyCoralCard";

class HomePage extends Component {
  render() {
    return (
      <div>

        <Hero heroHeader="Rent your dream home!"
          subHeader="No realtor fees. No extra deposits. No hassle."
          imgSrc="/img/hero-home.jpg"
          imgAlt="Barcelona building facade" />

        <WhyCoralCard />
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from "react";
import Hero from "./Hero";
import WhyCoralCard from "./WhyCoralCard";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Rent your dream home!"
          subHeader="No realtor fees. Legal deposit only, nothing more."
          imgSrc="img/IMG_7193.jpeg"
          imgAlt="Barcelona building facade" />
        <WhyCoralCard />
      </div>
    );
  }
}

export default HomePage;

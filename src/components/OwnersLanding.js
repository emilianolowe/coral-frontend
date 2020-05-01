import React, { Component } from "react";
import Hero from "./Hero";
import WhyCoralCard from "./WhyCoralCard";

class OwnersLanding extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Hello Landlord!"
          subHeader="Rent with us."
          imgSrc="img/IMG_0412.jpeg"
          imgAlt="Barcelona building facade" />

        <WhyCoralCard />
      </div>
    );
  }
}

export default OwnersLanding;

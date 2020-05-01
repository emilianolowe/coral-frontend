import React, { Component } from "react";
import Hero from "./Hero";
import WhyCoralCard from "./WhyCoralCard";

class OwnersLanding extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Peace of mind."
          subHeader="Guaranteed rent for property owners. People, relationships, and trust come first."
          imgSrc="img/IMG_0412.jpeg"
          imgAlt="Barcelona street view" />
        <WhyCoralCard />
      </div>
    );
  }
}

export default OwnersLanding;

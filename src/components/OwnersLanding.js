import React, { Component } from "react";
import Hero from "./Hero";
import OwnerCard from "./OwnerCard";

class OwnersLanding extends Component {
  render() {
    return (
      <div>
        <Hero heroHeader="Peace of mind."
          subHeader="Guaranteed rent for property owners. People, relationships, and trust first."
          imgSrc="img/IMG_0412.jpeg"
          imgAlt="Barcelona street view" />
        <OwnerCard />
      </div>
    );
  }
}

export default OwnersLanding;

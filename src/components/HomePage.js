import React, { Component } from "react";
import Hero from "./Hero";

class HomePage extends Component {
  render() {
    return (
      <div className = "container">
        <Hero heroHeader = "Rent your dream home!"
        subHeader = "No realtor fees. Legal deposit only, nothing more."
        imgSrc = "img/IMG_7193.jpeg"
        imgAlt = "Barcelona building facade"/>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from "react";
import Hero from "./Hero";
import WhyCoralCard from "./WhyCoralCard";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Hero />
        <WhyCoralCard />
      </div>
    );
  }
}

export default HomePage;

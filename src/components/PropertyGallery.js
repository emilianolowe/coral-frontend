import React, { Component } from "react";
import Card from "./PropertyCard";

class Gallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }

    this.fetchData = this.fetchData.bind(this);

    this.fetchData();

  }

  // refactor to try/catch async from promise/callback?
  fetchData() {
    fetch("http://localhost:3000/v1/properties")
      .then(response => response.json())
      .then(response => {
        console.log("fetching response", response)
        this.setState({
          properties: response
        })
      }) // amazing
  }

  handleClick() { }

  render() {
    // Nano: this constant will receive the resulting JSX to show whatever you want
    // Combine JSXResult object with Card object 
    const theJSXResult = this.state.properties.map(property => (
      <div>
        <Card property={property} />
      </div>
      // <div>
      //   <div>Hey!! I'm a property!!!</div>
      //   <div>This is the Description: {property.description}</div>
      //   <div>This is my image: <img src={property.imageURLs[0]} alt="property" /></div>
      //   <br /><br />
      // </div>
    ))
    return (
      <div className="container">
        <div className="card-deck">
          {theJSXResult}
        </div>
      </div>
    );
  }
}

export default Gallery;
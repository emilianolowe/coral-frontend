import React, { Component } from "react";

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
      })
  }

  handleClick() { }

  render() {
    // Nano: this constant will receive the resulting JSX to show whatever you want
    const theJSXResult = this.state.properties.map( property => (
      <div>
        <div>Hey!! I'm a property!!!</div>
        <div>This is the Description: {property.description}</div>
        <div>This is my image: <img src={property.imageURLs[0]} alt="property"/></div>
        <br/><br/>
      </div>
    ))
    return (
      <div>
        {theJSXResult}
      </div>
    );
  }
}

export default Gallery;
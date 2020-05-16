import React, { Component } from "react";
import Card from "./PropertyCard";

class MyProperties extends Component {

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
    const theJSXResult = this.state.properties.map(property => (
      <div>
        <Card property={property} />
      </div>
    ))
    return (
      <div className="container mt-5">
        <h1>My Properties</h1>
        <div className="card-deck">
          {theJSXResult}
        </div>
        <div className="btn btn-info">
          <a href="/addproperty" className="float-button">
            <i class="fa fa-plus inside-float-button"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default MyProperties;
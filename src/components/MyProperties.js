import React, { Component } from "react";
import Card from "./PropertyOwnerCard";

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
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2>My Properties</h2>
          </div>
          <div className="col">
            <a href="/addproperty" class="btn btn-info">
              Publish new Property
            </a>
          </div>
        </div>
        <div className="card-deck">
          {theJSXResult}
        </div>
      </div>
    );
  }
}

export default MyProperties;
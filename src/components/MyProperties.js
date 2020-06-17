import React, { Component } from "react";
import Card from "./PropertyCard";
import { getAllProperties } from "./PropertiesDAO";

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
    getAllProperties(response => {
      console.log("fetching response", response)
      this.setState({
        properties: response
      })
    })
  }

  handleClick() { }

  render() {
    const theJSXResult = this.state.properties.map(property => (
      <div>
        <Card property={property} link={`/myproperty?id=${property._id}`} />
      </div>
    ))
    return (
      <div className="container">
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-5 font-italic">My Properties Dashboard</h1>
            <p className="lead my-3">Peace of mind is one of our core values. Don't hesitate to contact us if you have any questions
          on how to use our services.</p>
            <p className="lead mb-0">
              <a href="/addproperty" className="btn btn-info">
                Publish new Property
            </a>
            </p>
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
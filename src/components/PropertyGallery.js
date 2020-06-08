import React, { Component } from "react";
import Card from "./PropertyCard";
import PropertyFilter from "./PropertyFilter";

class Gallery extends Component {

  // filter function

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
    // This constant will receive the resulting JSX to show whatever you want
    const theJSXResult = this.state.properties.map(property => (
      <div>
        <Card property={property} favorite={true} contact={true} link={`/property?id=${property._id}`} />
      </div>
    ))
    let filter = "";
    if (!this.props.hideFilter) {
      filter = (<PropertyFilter />);
    }
    return (
      // <div className="container">
      // {filter}
      <div className="card-deck">
        {theJSXResult}
      </div>
      // </div>
    );
  }
}

export default Gallery;
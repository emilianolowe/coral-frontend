import React, { Component } from "react";
import Card from "./PropertyCard";
// import PropertyFilter from "./PropertyFilter";
import { getAllProperties } from "../../DAO/PropertiesDAO";

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
    getAllProperties("published", response => {
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
        <Card property={property} favorite={true} link={`/property?id=${property._id}`} />
      </div>
    ))
    let loading = ""
    if (this.state.properties.length === 0) {
      loading = (<div className="text-center mt-4">
        <img src="https://cdn.dribbble.com/users/2035064/screenshots/4599692/____.gif" alt="loading" />
      </div>)
    }
    // let filter = "";
    // if (!this.props.hideFilter) {
    //   filter = (<PropertyFilter />);
    // }
    return (
      // <div className="container">
      // {filter}
      <div className="card-deck">
        {loading}
        {theJSXResult}
      </div>
      // </div>
    );
  }
}

export default Gallery;
import React, { Component } from "react";

class EditProperty extends Component {

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
    return (
      <div className="container">
        <h1>Edit Property Data</h1>
      </div>
    );
  }
}

export default EditProperty;
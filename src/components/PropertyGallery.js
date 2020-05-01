import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Card from "./PropertyCard";

class PropertyGallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }
  }

  componentWillMount() {
    fetch("http://localhost:3000/v1/properties")
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          properties: response
        })
      })
  }

  render() {
    return (
      <StackGrid columnWidth={350}>
        <div key="key1" itemComponent="span">
          <Card imgsrc="img/DocuSign740.png" />
        </div>
        <div key="key2">
          <Card imgsrc="img/DocuSign740.png" />
        </div>
        <div key="key3">
          <Card imgsrc="img/DocuSign740.png" />
        </div>
        <div key="key4" itemComponent="span">
          <Card imgsrc="img/DocuSign740.png" />
        </div>
        <div key="key5">
          <Card imgsrc="img/DocuSign740.png" />
        </div>
        <div key="key6">
          <Card imgsrc="img/DocuSign740.png" />
        </div>
      </StackGrid>
    );
  }
}

export default PropertyGallery;

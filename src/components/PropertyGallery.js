import React, { Component } from "react";
import Masonry from 'react-masonry-component';
import Card from './PropertyCard';

const masonryOptions = {
  transitionDuration: 0
};

const style = {
  backgroundColor: 'tomato'
};

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
        console.log(response)
        this.setState({
          properties: response
        })
      })
  }

  handleClick() { }

  render() {
    console.log(this.state.properties);
    console.log(this.state.properties[0]);
    console.log(this.state.properties[0].imageURLs[0]);
    return (
      <div>
        <Card imgsrc={this.state.properties.length}></Card>
      </div>
    );
  }
}

export default Gallery;
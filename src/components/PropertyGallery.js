fsimport React, { Component } from "react";
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
    return (
      <div>
        {this.state.properties.length}
      </div>
    );
  }
}

export default Gallery;
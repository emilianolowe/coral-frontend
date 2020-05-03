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

  handleClick() { }

  render() {
    return (
      <Masonry
        className={'my-gallery-class'}
        style={style}
        onClick={this.handleClick}
      >
        console.log(this.state)
        {this.props.state}
        {<Card imgsrc='/img/find-a-place-to-love.jpeg' />}
      </Masonry>
    );
  }
}

export default Gallery;
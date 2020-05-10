import React, { Component } from 'react';
import Card from './ButtonCard';

class FindAPlaceToLoveCard extends Component {
  render() {
    return (
        <div className="row-fluid justify-content-center">
          <div className="col-md-8 offset-md-2">
          <Card imgsrc="img/find-a-place-to-love.jpeg"
              title="Find A Place To Love"
              bodyText="A reimagined way to discover, rent, and furnish your next home."
              btnText="Search Now"/>
          </div>
        </div>
    );
  }
}

export default FindAPlaceToLoveCard;
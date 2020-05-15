import React, { Component } from 'react';

class PropertyFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "price") {
      document.getElementById("cityoptions").className = "collapse hide";
      document.getElementById("bedroomoptions").className = "collapse hide";
    } else if (event.target.id === "city") {
      document.getElementById("priceoptions").className = "collapse hide";
      document.getElementById("bedroomoptions").className = "collapse hide";
    } else if (event.target.id === "beds") {
      document.getElementById("cityoptions").className = "collapse hide";
      document.getElementById("priceoptions").className = "collapse hide";
    }
  }

  render() {
    return (
      <div className="container pt-3">
        <div className="mt-5">
          <a id="price" className="btn btn-info badge-pill text-light m-3" data-toggle="collapse" href="#priceoptions" onClick={this.handleClick}>Price</a>
          <a id="city" className="btn btn-info badge-pill text-light m-3" data-toggle="collapse" href="#cityoptions" onClick={this.handleClick}>City</a>
          <a id="beds" className="btn btn-info badge-pill text-light m-3" data-toggle="collapse" href="#bedroomoptions" onClick={this.handleClick}>Bedrooms</a>
        </div>
        <div id="priceoptions" className="collapse">
          <a className="btn btn-info badge-pill text-light m-3">500 or less</a>
          <a className="btn btn-info badge-pill text-light m-3">500 to 1000</a>
          <a className="btn btn-info badge-pill text-light m-3">1000 up</a>
        </div>
        <div id="cityoptions" className="collapse">
          <a className="btn btn-info badge-pill text-light m-3">Barcelona</a>
          <a className="btn btn-info badge-pill text-light m-3">Sabadell</a>
          <a className="btn btn-info badge-pill text-light m-3">Badalona</a>
          <a className="btn btn-info badge-pill text-light m-3">Sitges</a>
        </div>
        <div id="bedroomoptions" className="collapse">
          <a className="btn btn-info badge-pill text-light m-3">Studio</a>
          <a className="btn btn-info badge-pill text-light m-3">2 Bedrooms</a>
          <a className="btn btn-info badge-pill text-light m-3">3 Bedrooms</a>
          <a className="btn btn-info badge-pill text-light m-3">3+ Bedrooms</a>
        </div>
      </div>
    );
  }
}

export default PropertyFilter;
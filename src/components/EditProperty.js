import React, { Component } from "react";
import { getProperty, saveProperty } from './PropertiesDAO';
import {Redirect} from 'react-router-dom';

class EditProperty extends Component {

  constructor(props) {
    super(props)

    this.state = {
      property: {
        title: "",
      },
      saved: false
    }

    getProperty(this.useQuery().get("id"), property => {
      this.setState({ 
        property: {
          _id: property._id,
          title: property.title,
          rent: property.rent,
          size: property.size,
          sizeUnit: property.sizeUnit,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          lift: property.lift,
          petfriendly: property.petfriendly,
          furnitured: property.furnitured,
          nearMetroStation: property.nearMetroStation,
          description: property.description,
        }
      });
    });

    this.handleSave = this.handleSave.bind(this);
    this.useQuery = this.useQuery.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  useQuery() {
    return new URLSearchParams(window.location.search);
  }

  handleSave(event) {
    event.preventDefault();

    saveProperty(this.state.property, data => {
      console.log(data)
      if (data.status === "OK") {
        this.setState({
          saved: true
        })
      }
    })

  }

  handleInputChange(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    if (event.target.type === "checkbox") {
      fieldValue = event.target.checked;
    }

    this.setState({
      property: {
        ...this.state.property,
        [fieldName]: fieldValue
      }
    });
  }

  render() {
    if(this.state.saved) {
      const url = "/editPropertyPics?id=" + this.state.property._id
      return  (<Redirect  to={url} />)
    }

    return (
      <div className="container">
        <h2>Please let us know more about your property</h2>
        <form onSubmit={this.handleSave}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" id="title" name="title"
              value={this.state.property.title}
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Rent in Euros</label>
            <input type="number" id="rent" name="rent"
              value={this.state.property.rent}
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Size</label>
            <input type="number" id="size" name="size"
              value={this.state.property.size}
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Size unit</label>
            <input type="text" id="sizeUnit" name="sizeUnit"
              value={this.state.property.sizeUnit}
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Bedrooms</label>
            <input type="number" id="bedrooms" name="bedrooms"
              value={this.state.property.bedrooms}
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Bathrooms</label>
            <input type="number" id="bathrooms" name="bathrooms"
              value={this.state.property.bathrooms}
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <hr />
          <h2>Facilities</h2>
          <div className="form-group">
            <input type="checkbox" id="lift" name="lift" checked={this.state.property.lift}
              className="form-check-input" onChange={this.handleInputChange} />
            <label>There is a lift in the building</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="petfriendly" name="petfriendly" checked={this.state.property.petfriendly}
              className="form-check-input" onChange={this.handleInputChange} />
            <label>My property is pet friendly</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="furnitured" name="furnitured" checked={this.state.property.furnitured}
              className="form-check-input" onChange={this.handleInputChange} />
            <label>My property is furnished</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="nearMetroStation" name="nearMetroStation" checked={this.state.property.nearMetroStation}
              className="form-check-input" onChange={this.handleInputChange} />
            <label>My property has a metro station near by</label>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
          <br /><br />
        </form>
      </div>
    );

  }
}

export default EditProperty;
import React, { Component } from "react";
import Cookies from 'universal-cookie';
import { getProperty, getUserId } from './PropertiesDAO';

class EditProperty extends Component {

  constructor(props) {
    super(props)

    this.state = {
      property: {
        ownerId: null
      }
    }

    const cookies = new Cookies();
    const that = this;
    getUserId(cookies.get("coraluser"), theUser => {
      that.setState({
        property: {
          ...that.state.property,
          ownerId: theUser._id
        }});
    });

    this.handleSave = this.handleSave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    // if (this.props.id) {
    //   getProperty(this.props.id, property => that.setState({property: property}))
    // }

  }

  handleSave(event) {

    event.preventDefault();
    
    const cookies = new Cookies();

    let url = "http://localhost:3000/v1/properties/";
    let method = "POST";
    let message = "create";

    if (this.state.property._id) {
      // property already exists.
      // CALL PUT instead of POST
      url += this.state.property._id;
      method = "PUT";
      message = "update";
    }

    console.log(`about to ${method} endpoint: `, url);
    console.log("token", cookies.get("coraltoken"));
    const body = JSON.stringify(this.state.property);
    console.log("sending: ", body);

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookies.get("coraltoken")
      },
      method: method,
      body: body
    })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          alert('Unauthorized. Please login.');
        }
        console.log("response received (not ok): ", res);
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((property) => {
      console.log("worked well!!");
      // this.setState({
      //   property: {
      //     ...this.state.property,
      //     _id: property._id
      //   }
      // });
      alert("Property " + message + "d successfully!");
    })
    .catch((err) => {
      console.log(err.message);
      alert("Could not " + message + " Property. Error: " + err.message)
    });
  }

  handleInputChange(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    if (event.target.type === "checkbox") {
      fieldValue = event.target.checked;
    }

    if(event.target.name === "image1" ||
      event.target.name === "image2" ||
      event.target.name === "image3") {

        let imgArr = this.state.property && this.state.property.imageURLs ? this.state.property.imageURLs : [];
        if(event.target.name === "image1") {
          imgArr[0] = fieldValue;
        }
        if(event.target.name === "image2") {
          imgArr[1] = fieldValue;
        }
        if(event.target.name === "image3") {
          imgArr[2] = fieldValue;
        }
        this.setState({
          property: {
            ...this.state.property,
            imageURLs: imgArr
          }
        });
    
    } else if (["typeOfStreet", "streetName", 
        "buildingNumber", "floorNumber", "doorNumber",
        "postalCode", "city", "province", 
        "region", "country"].includes(event.target.name)) {
              
      this.setState({
        property: {
          ...this.state.property,
          address: {
            ...this.state.property.address,
            [fieldName]: fieldValue
          }
        }
      });
    

    } else {
      this.setState({
        property: {
          ...this.state.property,
          [fieldName]: fieldValue
        }
      });  
    }

  }

  render() {
    return (
      <div className="container">
        <h1>Edit Property Data</h1>
        <form onSubmit={this.handleSave}>
          <h2>Details</h2>
          <div className="form-group">
            <label>Title</label>
            <input type="text" id="title" name="title"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Rent in Euros</label>
            <input type="number" id="rent" name="rent"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Size</label>
            <input type="number" id="size" name="size"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Size unit</label>
            <input type="text" id="sizeUnit" name="sizeUnit"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Bedrooms</label>
            <input type="number" id="bedrooms" name="bedrooms"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Bathrooms</label>
            <input type="number" id="bathrooms" name="bathrooms"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <hr />
          <h2>Address</h2>
          <div className="form-group">
            <label>Type of Street</label>
            <input type="text" id="typeOfStreet" name="typeOfStreet"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Street name</label>
            <input type="text" id="streetName" name="streetName"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Building number</label>
            <input type="text" id="buildingNumber" name="buildingNumber"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Floor number</label>
            <input type="text" id="floorNumber" name="floorNumber"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Door number</label>
            <input type="text" id="doorNumber" name="doorNumber"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Postal code</label>
            <input type="text" id="postalCode" name="postalCode"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" id="city" name="city"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Province</label>
            <input type="text" id="province" name="province"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Region</label>
            <input type="text" id="region" name="region"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" id="country" name="country"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <hr />
          <h2>Facilities</h2>
          <div className="form-group">
            <input type="checkbox" id="lift" name="lift"
              className="form-check-input" onChange={this.handleInputChange} />
            <label>There a lift in the building</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="petfriendly" name="petfriendly"
              className="form-check-input" onChange={this.handleInputChange} />
            <label>My property is pet friendly</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="furnitured" name="furnitured"
              className="form-check-input" onChange={this.handleInputChange} />
            <label>My property is furnished</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="nearMetroStation" name="nearMetroStation"
              className="form-check-input" onChange={this.handleInputChange} />
            <label>My property has a metro station near by</label>
          </div>
          <hr />
          <h2>Images</h2>
          <div className="form-group">
            <label>Image 1 (paste URL)</label>
            <input type="text" id="image1" name="image1"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Image 2 (paste URL)</label>
            <input type="text" id="image2" name="image2"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Image 3 (paste URL)</label>
            <input type="text" id="image3" name="image3"
              className="form-control" onChange={this.handleInputChange} />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">PUBLISH PROPERTY</button>
          <br /><br />
        </form>
      </div>
    );
  }
}

export default EditProperty;
import React, { Component } from "react";
import Cookies from 'universal-cookie';
import { getUserId } from './PropertiesDAO';

class EditProperty extends Component {

  constructor(props) {
    super(props)

    this.state = {
      property: {
        ownerId: null,
        address: {
          city: this.useQuery().get("city")
        }
      },
      page: 1
    }

    const cookies = new Cookies();
    const that = this;
    getUserId(cookies.get("coraluser"), theUser => {
      that.setState({
        property: {
          ...that.state.property,
          ownerId: theUser._id
        }
      });
    });

    this.handleSave = this.handleSave.bind(this);
    this.useQuery = this.useQuery.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    // if (this.props.id) {
    //   getProperty(this.props.id, property => that.setState({property: property}))
    // }


  }

  useQuery() {
    return new URLSearchParams(window.location.search);
  }

  handleSave(event) {

    event.preventDefault();

    if (this.state.page === 1) {
      this.setState({page: 2});
      return;
    }

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

    if (event.target.name === "image1" ||
      event.target.name === "image2" ||
      event.target.name === "image3") {

      let imgArr = this.state.property && this.state.property.imageURLs ? this.state.property.imageURLs : [];
      if (event.target.name === "image1") {
        imgArr[0] = fieldValue;
      }
      if (event.target.name === "image2") {
        imgArr[1] = fieldValue;
      }
      if (event.target.name === "image3") {
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
    if (this.state.page === 1) {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <form onSubmit={this.handleSave}>
                <h2 className="mt-5">Rental Property Address</h2>
                <div className="form-group">
                  <label>Street Type</label>
                  <input type="text" id="typeOfStreet" name="typeOfStreet"
                    value={this.state.property.address ? this.state.property.address.typeOfStreet : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Street Name</label>
                  <input type="text" id="streetName" name="streetName"
                    value={this.state.property.address ? this.state.property.address.streetName : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" id="buildingNumber" name="buildingNumber"
                    value={this.state.property.address ? this.state.property.address.buildingNumber : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Floor Number</label>
                  <input type="text" id="floorNumber" name="floorNumber"
                    value={this.state.property.address ? this.state.property.address.floorNumber : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Door Number</label>
                  <input type="text" id="doorNumber" name="doorNumber"
                    value={this.state.property.address ? this.state.property.address.doorNumber : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Zip Code</label>
                  <input type="text" id="postalCode" name="postalCode"
                    value={this.state.property.address ? this.state.property.address.postalCode : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" id="city" name="city"
                    value={this.state.property.address ? this.state.property.address.city : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Province/County</label>
                  <input type="text" id="province" name="province"
                    value={this.state.property.address ? this.state.property.address.province : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Region/State</label>
                  <input type="text" id="region" name="region"
                    value={this.state.property.address ? this.state.property.address.region : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" id="country" name="country"
                    value={this.state.property.address ? this.state.property.address.country : ""}
                    className="form-control" onChange={this.handleInputChange} />
                </div>
                <br />
                <button type="submit" className="btn btn-info">Continue</button>
                <br /><br />
              </form>
            </div>
            <div className="col-4">
              <img src="https://cdn.dribbble.com/users/1025386/screenshots/4074400/grey_couch.png"
                width="90%"
                alt="nice pic"
                vspace="20" />
            </div>
          </div>
        </div>

      );
    } else if (this.state.page === 2) {
      return (
        <div className="container mt-5">
          <h1>Property Details</h1>
          <form onSubmit={this.handleSave}>
            <h2>Details</h2>
            <div className="form-group">
              <label>Title</label>
              <input type="text" id="title" name="title"
                value={this.state.property.title}
                className="form-control" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label>Monthly Rent (Euros)</label>
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
            <h2>Facilities</h2>
            <div className="form-group mt-4 ml-4">
              <input type="checkbox" id="lift" name="lift"
                className="form-check-input" onChange={this.handleInputChange} />
              <label>Working Lift/Elevator</label>
            </div>
            <div className="form-group ml-4">
              <input type="checkbox" id="petfriendly" name="petfriendly"
                className="form-check-input" onChange={this.handleInputChange} />
              <label>Pet Friendly</label>
            </div>
            <div className="form-group ml-4">
              <input type="checkbox" id="furnitured" name="furnitured"
                className="form-check-input" onChange={this.handleInputChange} />
              <label>Furnished</label>
            </div>
            <div className="form-group ml-4">
              <input type="checkbox" id="nearMetroStation" name="nearMetroStation"
                className="form-check-input" onChange={this.handleInputChange} />
              <label>Near Metro Station</label>
            </div>
            <h2>Images</h2>
            <div className="form-group  mt-4">
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
            <button type="submit" className="btn btn-info">Publish Property</button>
            <br /><br />
          </form>
        </div>
      );
    }
    return (
      <div>otherwise</div>
    );

  }
}

export default EditProperty;
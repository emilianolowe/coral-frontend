import React, { Component } from "react";
import { getProperty, saveProperty } from './PropertiesDAO';
import { Redirect } from 'react-router-dom';

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
    this.roomsClick = this.roomsClick.bind(this)
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

  roomsClick = (type, num) => {
    return (e) => {
      e.preventDefault()

      document.getElementById(type + "1").className = "btn btn-info"
      document.getElementById(type + "2").className = "btn btn-info"
      document.getElementById(type + "3").className = "btn btn-info"
      document.getElementById(type + "4").className = "btn btn-info"

      document.getElementById(type + num).className = "btn btn-primary"
      this.setState({
        property: {
          ...this.state.property,
          [type]: num
        }
      })

    }
  }

  render() {
    if (this.state.saved) {
      const url = "/editPropertyPics?id=" + this.state.property._id
      return (<Redirect to={url} />)
    }

    return (
      <div className="container">
        <h2>Please let us know more about your property</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleSave}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" id="title" name="title"
                  value={this.state.property.title}
                  className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Rent in Euros</label>
                    <input type="number" id="rent" name="rent"
                      value={this.state.property.rent}
                      className="form-control" onChange={this.handleInputChange} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Size</label>
                    <input type="number" id="size" name="size"
                      value={this.state.property.size}
                      className="form-control" onChange={this.handleInputChange} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Size unit</label>
                    <input type="text" id="sizeUnit" name="sizeUnit"
                      value={this.state.property.sizeUnit || "m2"}
                      className="form-control" onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Bedrooms</label>
                  </div>
                  <div className="col">
                    <label>Bathrooms</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-info"
                      id="bedrooms1" onClick={this.roomsClick("bedrooms", 1)}>1</button>
                    <button className="btn btn-info"
                      id="bedrooms2" onClick={this.roomsClick("bedrooms", 2)}>2</button>
                    <button className="btn btn-info"
                      id="bedrooms3" onClick={this.roomsClick("bedrooms", 3)}>3</button>
                    <button className="btn btn-info"
                      id="bedrooms4" onClick={this.roomsClick("bedrooms", 4)}>more</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-info"
                      id="bathrooms1" onClick={this.roomsClick("bathrooms", 1)}>1</button>
                    <button className="btn btn-info"
                      id="bathrooms2" onClick={this.roomsClick("bathrooms", 2)}>2</button>
                    <button className="btn btn-info"
                      id="bathrooms3" onClick={this.roomsClick("bathrooms", 3)}>3</button>
                    <button className="btn btn-info"
                      id="bathrooms4" onClick={this.roomsClick("bathrooms", 4)}>more</button>

                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Facilities</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="form-check">
                      <input type="checkbox" id="lift" name="lift" checked={this.state.property.lift}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>There is a lift in the building</label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input type="checkbox" id="petfriendly" name="petfriendly" checked={this.state.property.petfriendly}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>My property is pet friendly</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="form-check">
                      <input type="checkbox" id="furnitured" name="furnitured" checked={this.state.property.furnitured}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>My property is furnished</label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input type="checkbox" id="nearMetroStation" name="nearMetroStation" checked={this.state.property.nearMetroStation}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>My property has a metro station near by</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Save</button>
              <br /><br />
            </form>

          </div>
          <div className="col-4">
            <img src="https://www.vippng.com/png/detail/330-3300910_office-plant-png-transparent-background-hanging-plants-clipart.png"
              width="90%"
              alt="nice pic" />
          </div>

        </div>
      </div>
    );

  }
}

export default EditProperty;
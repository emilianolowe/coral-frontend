import React, { Component } from "react";
import { getProperty, saveProperty } from '../../DAO/PropertiesDAO';
import { Redirect } from 'react-router-dom';

class EditProperty extends Component {

  constructor(props) {
    super(props)

    this.state = {
      property: {
        title: "",
        rent: '',
        size: '',
        sizeUnit: 'm2',
        bedrooms: '',
        bathrooms: '',
        lift: false,
        petfriendly: false,
        furnitured: false,
        nearMetroStation: false,
        description: '',
        imageURLs: [],
        status: "pending validation",
      },
      saved: false
    }

    getProperty(this.useQuery().get("id"), property => {
      this.setState({
        property: {
          _id: property._id,
          title: property.title || '',
          rent: property.rent || '',
          size: property.size || '',
          sizeUnit: property.sizeUnit || 'm2',
          bedrooms: property.bedrooms || '',
          bathrooms: property.bathrooms || '',
          lift: property.lift || false,
          petfriendly: property.petfriendly || false,
          furnitured: property.furnitured || false,
          nearMetroStation: property.nearMetroStation || false,
          description: property.description || '',
          imageURLs: property.imageURLs || [],
          status: "pending validation",
        }
      });
    });

    this.handleSave = this.handleSave.bind(this);
    this.useQuery = this.useQuery.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.roomsClick = this.roomsClick.bind(this)
    this.upload = this.upload.bind(this)
    this.removeImage = this.removeImage.bind(this)
  }

  useQuery() {
    return new URLSearchParams(window.location.search);
  }

  upload() {
    const cloudinary = window.cloudinary;
    const cloudinaryWidget = cloudinary.createUploadWidget({
      cloudName: 'ltreven',
      uploadPreset: 'rentcoral'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        this.setState({
          property: {
            ...this.state.property,
            imageURLs: [
              ...this.state.property.imageURLs,
              result.info.secure_url
            ]
          }
        })
      }
    }
    )
    cloudinaryWidget.open()
  }

  removeImage(e) {
    e.preventDefault()
    const idx = parseInt(e.target.id.split("-")[1])
    const imgArr = [...this.state.property.imageURLs]
    imgArr.splice(idx, 1)
    this.setState({
      property: {
        ...this.state.property,
        imageURLs: imgArr
      }
    })
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
      return (<Redirect to={"/myproperty?id=" + this.state.property._id} />)
    }

    const thumbs = this.state.property.imageURLs.map((pic, idx) => (
      <div className="d-flex flex-column flex-wrap">
        <img src={pic} className="thumb m-3" alt="uploaded img" />
        <button id={"btnRemove-" + idx} className="btn btn-danger btn-sm" onClick={this.removeImage}>remove</button>
      </div>
    ))

    return (
      <div className="container">
        <h2>Please let us know more about your property</h2>
        <div className="row">
          <div className="col-md">
            <form onSubmit={this.handleSave}>
              <div className="form-group">
                <label>Tagline (a short title)</label>
                <input type="text" id="title" name="title"
                  value={this.state.property.title || ''}
                  className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label>Description (a nice one)</label>
                <input type="textarea" d="description" name="description"
                  value={this.state.property.description || ''}
                  className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Rent in Euros</label>
                    <input type="number" id="rent" name="rent"
                      value={this.state.property.rent || ''}
                      className="form-control" onChange={this.handleInputChange} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Size</label>
                    <input type="number" id="size" name="size"
                      value={this.state.property.size || ''}
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
                      id="bedrooms4" onClick={this.roomsClick("bedrooms", 4)}>4</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-info"
                      id="bathrooms1" onClick={this.roomsClick("bathrooms", 1)}>1</button>
                    <button className="btn btn-info"
                      id="bathrooms2" onClick={this.roomsClick("bathrooms", 2)}>2</button>
                    <button className="btn btn-info"
                      id="bathrooms3" onClick={this.roomsClick("bathrooms", 3)}>3</button>
                    <button className="btn btn-info"
                      id="bathrooms4" onClick={this.roomsClick("bathrooms", 4)}>4</button>

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
                    <div className="form-check">
                      <input type="checkbox" id="lift" name="lift" checked={this.state.property.lift}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>There is a lift in the building</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input type="checkbox" id="petfriendly" name="petfriendly" checked={this.state.property.petfriendly}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>My property is pet friendly</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-check">
                      <input type="checkbox" id="furnitured" name="furnitured" checked={this.state.property.furnitured}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>My property is furnished</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input type="checkbox" id="nearMetroStation" name="nearMetroStation" checked={this.state.property.nearMetroStation}
                        className="form-check-input" onChange={this.handleInputChange} />
                      <label>My property has a metro station near by</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h3>Upload some nice images of your property</h3>
              <div className="row">
                <div className="col-md d-flex flex-wrap justify-content-around align-items-center">
                  {thumbs}
                </div>
                <div className="col-md d-flex justify-content-center">
                  <img src="https://webstockreview.net/images/photography-clipart-female-photographer-11.png"
                    width="60%" alt="phptograper clipart" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md">
                </div>
                <div className="col d-flex justify-content-right">
                  <button type="button" className="btn btn-info flex-fill" onClick={this.upload}>Upload</button>
                </div>
              </div>
              <div className="row mt-4 mb-5">
                <div className="col d-flex justify-content-right">
                  <button type="submit" className="btn btn-primary flex-fill">Submit property data</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    );

  }
}

export default EditProperty;
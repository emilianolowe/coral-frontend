import React, { Component } from "react";
import { getProperty, saveProperty } from '../../DAO/PropertiesDAO';
import {Redirect} from 'react-router-dom';

class EditPropertyPics extends Component {

  constructor(props) {
    super(props)

    this.state = {
      saved: false
    }

    getProperty(this.useQuery().get("id"), property => {
      this.setState({ 
        property: {
          _id: property._id,
          imageURLs: property.imageURLs,
        }
      });
    });

    this.handleSave = this.handleSave.bind(this);
    this.useQuery = this.useQuery.bind(this);
  }

  useQuery() {
    return new URLSearchParams(window.location.search);
  }

  handleSave(event) {
    event.preventDefault();

    const property = {
      ...this.state.property,
      imageURLs: [],
      status: "pending validation",
      description: document.getElementById("description").value
    }
    property.imageURLs.push(document.getElementById("pic1").value)
    if (document.getElementById("pic2").value) 
      property.imageURLs.push(document.getElementById("pic2").value)
    if (document.getElementById("pic3").value) 
    property.imageURLs.push(document.getElementById("pic3").value)

    saveProperty(property, data => {
      console.log(data)
      if (data.status === "OK") {
        this.setState({
          saved: true
        })
      }
    })

  }

  render() {
    if(this.state.saved) {
      //const url = "/editProperty?id=" + this.state.property._id
      return  (<Redirect  to={"/myproperty?id=" + this.state.property._id} />)
    }

    return (
      <div className="container">
        <h2>Now let's add some nice pictures!</h2>
        <form onSubmit={this.handleSave}>
          <div className="form-group">
            <label>Pic 1</label>
            <input type="text" id="pic1" name="pic1"
              className="form-control" />
          </div>
          <div className="form-group">
            <label>Pic 2</label>
            <input type="text" id="pic2" name="pic2"
              className="form-control" />
          </div>
          <div className="form-group">
            <label>Pic 3</label>
            <input type="text" id="pic3" name="pic3"
              className="form-control" />
          </div>
          <br />
          <h2>And put a good description!</h2>
          <div className="form-group">
            <input type="textarea" id="description" name="description"
              className="form-control" />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
          <br /><br />
        </form>
      </div>
    );

  }
}

export default EditPropertyPics;
import React, { Component } from "react";
import { getAllProperties, saveProperty } from "../../DAO/PropertiesDAO";

class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }

    this.fetchData = this.fetchData.bind(this);
    this.publish = this.publish.bind(this)

    this.fetchData();

  }

  publish(property) {
    return (e) => {
      console.log("publishing id: ", property._id)
      property.status = "published"
      saveProperty(property, () => {
        console.log("property saved successfully")
        this.fetchData()
      })
    }
  }

  // refactor to try/catch async from promise/callback?
  fetchData() {
    getAllProperties(null, response => {
      console.log("fetching response", response)
      this.setState({
        properties: response
      })
    })
  }

  handleClick() { }

  render() {
    const propList = this.state.properties.map(property => {
      const img = property.imageURLs ? (<img src={property.imageURLs[0]} className="thumb" alt="property thumb" />) : ""
      const statusClass = property.status === "published" ? "text-success" : "text-danger"
      let buttons = ""
      if (property.status === "published") {
        buttons = (<a href={"/myproperty?id=" + property._id} className="btn btn-info">View</a>)
      } else {
        buttons = (
          <div>
            <a href={"/myproperty?id=" + property._id} className="btn btn-info">View</a>
            <a href={"/editProperty?id=" + property._id} className="btn btn-info">Edit</a>
            <button className="btn btn-danger" onClick={this.publish(property)}>Publish</button>
          </div>
        )
      }
      return (
        <div className="row p-3 text-md-left text-center" key={property._id}>
          <div className="col-md-auto">
            <div className="p-3">{img}</div>
          </div>
          <div className="col-md">
            <div className="d-flex flex-column p-3">
              <div>
                <strong>{property.title}</strong>
              </div>
              <div>
                {property.address.street}
              </div>
              <div>
                Status: <strong className={statusClass}>{property.status}</strong>
              </div>
              <div>
                {buttons}
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-5 font-italic">Properties Admin</h1>
          </div>
        </div>
        {propList}
      </div>
    );
  }
}

export default Admin;
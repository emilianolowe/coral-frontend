import React from 'react'
import { getUser, isLoggedIn } from '../../DAO/UsersDAO'
import Cookies from 'universal-cookie'
import PeaceOfMindCard from "../PeaceOfMindCard";
import ServiceProvidersCard from "../ServiceProvidersCard";
import EditViewProfile from './EditViewProfile';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();
const email = cookies.get("coraluser")

const Profile = () => {

  const [user, setUser] = React.useState({});
  
  if (!user || !user.username) {
    getUser(email).then(user => {
      console.log("received user:", user)
      setUser(user.data[0]);
    })
  }

  if(!isLoggedIn()) {
    return (
      <Redirect to="/" />
    )
  }

  if (!user || !user.username) {
    return (
      <div className="container">
        <h3>Loading user...</h3>
      </div>
    )
  }

  return (
    <div className="container">
        <div className="jumbotron mt-5 p-3 p-md-5 text-white rounded bg-dark row">
          <EditViewProfile user={user} />
          <div className="col-md-auto text-md-left text-center">
            <img src="https://www.pngkit.com/png/full/810-8105516_blue-person-icon-blue-person-icon-png.png" className="thumb" alt="profile thumb" />
          </div>
        </div>

        <div className="d-flex flex-md-row flex-column text-md-left text-center">
          <a href="/addproperty" className="btn btn-info">Publish new Property</a>
          <a className="btn btn-info" href="/myproperties">My Properties</a>
          <a className="btn btn-info" href="/">My Favorites</a>
        </div>

        <PeaceOfMindCard />
        <ServiceProvidersCard />


        {/* <form className="mt-4" onSubmit={handleSave}>
          <div className="container row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" id="firstName" name="firstName"
                value={user.firstName}
                className="form-control" onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" id="lastName" name="lastName"
                value={user.lastName}
                className="form-control" onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <p>{user.username}</p>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Save</button>
          <br /><br />
          <div>
          </div>
        </form> */}
      </div>
  );
}

export default Profile;
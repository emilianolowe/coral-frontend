import React from 'react'
import { getUser, isLoggedIn, setUser } from '../../DAO/UsersDAO'
import Cookies from 'universal-cookie'
import PeaceOfMindCard from "../PeaceOfMindCard";
import ServiceProvidersCard from "../ServiceProvidersCard";
import EditViewProfile from './EditViewProfile';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();
const email = cookies.get("coraluser")


const Profile = () => {

  const [user, setStateUser] = React.useState({});

  const changePhoto = () => {
    const cloudinary = window.cloudinary;
    const cloudinaryWidget = cloudinary.createUploadWidget({
      cloudName: 'ltreven',
      uploadPreset: 'rentcoral'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        const newUser = { ...user, picture: result.info.secure_url }
        setUser(newUser).then(() => setStateUser(newUser))
      }
    }
    )
    cloudinaryWidget.open()
  }
  const deletePhoto = () => {
    const newUser = { ...user, picture: "" }
    setUser(newUser).then(() => setStateUser(newUser))
  }

  if (!isLoggedIn()) {
    return (
      <Redirect to="/" />
    )
  }

  if (!user || !user.username) {
    getUser(email).then(user => {
      console.log("received user:", user)
      setStateUser(user.data[0]);
    })

    return (
      <div className="container">
        <h3>Loading user...</h3>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="jumbotron mt-5 p-3 p-md-5 text-white rounded bg-dark row">
        <EditViewProfile user={user} updateUser={setStateUser} />
        <div className="col-md-auto text-center mt-3">
          <img src={user.picture || "https://www.pngkit.com/png/full/810-8105516_blue-person-icon-blue-person-icon-png.png"} 
          className="thumb rounded-circle" 
          alt="profile thumb" />
          <div className="d-flex flex-row nowrap justify-content-center mt-3">
            <button className="btn btn-primary btn-sm" onClick={changePhoto}>Change</button>
            <button className="btn btn-danger btn-sm" onClick={deletePhoto}>Delete</button>
          </div>
        </div>
      </div>

      <div className="d-flex flex-md-row flex-column text-md-left text-center">
        <a href="/addproperty" className="btn btn-info">Publish new Property</a>
        <a className="btn btn-info" href="/myproperties">My Properties</a>
        <a className="btn btn-info" href="/">My Favorites</a>
      </div>

      <PeaceOfMindCard />
      <ServiceProvidersCard />

    </div>
  );
}

export default Profile;
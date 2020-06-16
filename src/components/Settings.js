import React from 'react'
import { getUser } from './UsersDAO'
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const email = cookies.get("coraluser")

const Settings = () => {

  const [user, setUser] = React.useState({});

  if (!user.username) {
    getUser(email).then(user => {
      console.log("received user:", user)
      setUser(user.data[0]);
    })
  }

  const onChange = event => {
    // setFirstName(event.target.value)
    console.log(event.target.value);
    console.log(event.target.name);
    const myUser = {
      ...user,
      [event.target.name]: event.target.value
    }
    console.log("User:", myUser);
    setUser(myUser);
  }

  // updates user info
  const handleSave = event => {
    event.preventDefault();
    console.log(user);
    setUser(user);
    console.log(user);
    
    // saveUser(this.state.property, data => {
    //   console.log(data)
    //   if (data.status === "OK") {
    //     this.setState({
    //       saved: true
    //     })
    //   }
    // })

  }

  return (
    <div className="container">
      <br /><br />
      <h2>Your Profile</h2>
      <div className="container">
        <form className="mt-4" onSubmit={handleSave}
        >
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
        </form>
      </div>
    </div>
  );
}

export default Settings;
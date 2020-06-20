import React from 'react'
import { isLoggedIn, setUser } from '../../DAO/UsersDAO'
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();
const email = cookies.get("coraluser")

const EditViewProfile = (props) => {

    const [loggedIn, setLoggedIn] = React.useState(isLoggedIn());
    const [editMode, toogleEditMode] = React.useState(false);
    const [userData, setUserData] = React.useState(props.user);

    const logout = event => {
        event.preventDefault()
        cookies.remove("coraluser")
        cookies.remove("coraltoken")
        setLoggedIn(false)
    }

    const edit = event => {
        event.preventDefault()
        toogleEditMode(true)
    }

    const cancel = event => {
        event.preventDefault()
        toogleEditMode(false)
    }

    const onChange = event => {
        const myUser = {
            ...userData,
            [event.target.name]: event.target.value
        }
        setUserData(myUser)
    }

    const handleSave = event => {
        event.preventDefault()
        setUser(userData)
        toogleEditMode(false)
        props.updateUser(userData)
    }

    if (!loggedIn) {
        return (
            <Redirect to="/" />
        )
    }

    if (editMode) {
        return (
            <div className="col-md text-md-left text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-auto text-md-left text-center">
                            <h3>Edit your profile</h3>
                            <form>
                                <div className="form-group">
                                    <label>Your full name</label>
                                    <input type="text" name="fullName"
                                        value={userData.fullName || ''}
                                        className="form-control" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Your Telephone Country Code</label>
                                    <input type="text" name="phoneCountryId" maxLength="3"
                                        value={userData.phoneCountryId || ''}
                                        className="form-control" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Your Telephone Number</label>
                                    <input type="text" name="phoneNumber" maxLength="20"
                                        value={userData.phoneNumber || ''}
                                        className="form-control" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    {email}
                                </div>
                                <div className="form-group">
                                    <label>About you</label>
                                    <textarea name="aboutYou" rows="3"
                                        value={userData.aboutYou || ''}
                                        className="form-control" onChange={onChange} />
                                </div>

                                <p className="lead my-3">
                                    <a href="/" className="btn btn-primary btn-sm" onClick={handleSave}>Save</a>
                                    <a href="/" className="btn btn-danger btn-sm" onClick={cancel}>Cancel</a>
                                </p>
                            </form>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-md text-md-left text-center">
                <h1 className="display-5 font-italic">{props.user.fullName}</h1>
                <p className="lead my-3">
                    {props.user.phoneCountryId + " " + props.user.phoneNumber}
                </p>
                <p className="lead my-3">
                    {email}
                </p>
                <p className="lead my-3">
                    {props.user.aboutYou}
                </p>
                <p className="lead my-3">
                    <a href="/" className="btn btn-primary btn-sm" onClick={edit}>Edit</a>
                    <button href="/" className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
                </p>

            </div>
        )
    }
}

export default EditViewProfile;
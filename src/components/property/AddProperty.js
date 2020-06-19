import React, { Component } from "react";
import { getPlaces, getPlace } from '../../DAO/LocationsDAO';
import { saveProperty, getUserId } from '../../DAO/PropertiesDAO';
import { isLoggedIn, signup } from '../../DAO/UsersDAO';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

class AddProperty extends Component {
    constructor(props) {
        super(props)
        const cookies = new Cookies()

        this.state = {
            candidates: [],
            searchStatus: "",
            searchTimeout: 0,
            placeId: null,
            addressComponents: [],
            property: {
                address: {
                    formatted: this.useQuery().get("address"),
                    additionalInfo: ""
                },
                status: "draft",
            },
            user: {
                email: "",
                fullName: "",
                phoneCountryId: "+34",
                phoneNumber: "",
                password: ""
            },
            saved: false,
            loggedIn: isLoggedIn()
        }

        this.searchAddress = this.searchAddress.bind(this);
        this.useQuery = this.useQuery.bind(this);
        this.changePlace = this.changePlace.bind(this);
        this.getPlaceDetails = this.getPlaceDetails.bind(this);
        this.changeAdditional = this.changeAdditional.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.save = this.save.bind(this)

        this.searchAddress();

        if (isLoggedIn()) {
            getUserId(
                cookies.get("coraluser"),
                id => this.setState({
                    property: {
                        ...this.state.property,
                        ownerId: id
                    },
                    loggedIn: true
                })
            )
        }
    }

    useQuery() {
        return new URLSearchParams(window.location.search);
    }

    searchAddress(e) {
        console.log("searching for address");

        clearTimeout(this.state.searchTimeout)

        if (e) {
            this.setState({
                property: {
                    ...this.state.property,
                    address: {
                        ...this.state.property.address,
                        formatted: e.target.value
                    }
                },
                placeId: null,
                searchStatus: ""
            })
            if (e.target.value === "") return;
        }

        const timeout = setTimeout(() => {
            getPlaces(this.state.property.address.formatted, data => {
                console.log(data)
                this.setState({ candidates: data.candidates, searchStatus: data.status })
                console.log("candidates length", data.candidates.length)
                if (data.candidates.length === 1) {
                    this.getPlaceDetails(data.candidates[0].place_id)()
                }
            })
        }, 500);

        this.setState({ searchTimeout: timeout })

    }

    getPlaceDetails(placeId) {
        return () => {
            console.log(placeId)
            getPlace(placeId, data => {
                console.log(data)

                let street = ""
                let streetNumber = ""
                let postalCode = ""
                let city = ""
                let country = ""
                let latitude = 0;
                let longitude = 0;

                data.result.address_components.forEach(comp => {
                    if (comp.types.indexOf("route") >= 0) {
                        street = comp.long_name
                    }
                    if (comp.types.indexOf("street_number") >= 0) {
                        streetNumber = comp.long_name
                    }
                    if (comp.types.indexOf("postal_code") >= 0) {
                        postalCode = comp.long_name
                    }
                    if (comp.types.indexOf("administrative_area_level_2") >= 0) {
                        city = comp.long_name
                    }
                    if (comp.types.indexOf("country") >= 0) {
                        country = comp.long_name
                    }
                })

                if (data.result.geometry && data.result.geometry.location) {
                    latitude = data.result.geometry.location.lat
                    longitude = data.result.geometry.location.lng
                }


                this.setState({
                    placeId: placeId,
                    addressComponents: data.result.address_components,
                    property: {
                        ...this.state.property,
                        address: {
                            ...this.state.property.address,
                            street: street,
                            streetNumber: streetNumber,
                            postalCode: postalCode,
                            city: city,
                            country: country,
                            latitude: latitude,
                            longitude: longitude
                        }
                    },
                })
            })
        }
    }

    changePlace(formattedAddress) {
        return () => {
            console.log(formattedAddress)
            this.setState({
                property: {
                    ...this.state.property,
                    address: {
                        ...this.state.property.address,
                        formatted: formattedAddress
                    }
                }
            })
            this.searchAddress()
        }
    }

    changeAdditional(e) {
        this.setState({
            property: {
                ...this.state.property,
                address: {
                    ...this.state.property.address,
                    additionalInfo: e.target.value
                }

            }
        })
    }

    changeUser(e) {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value

            }
        })
    }

    save(e) {
        if (!this.state.loggedIn) {
            // create account
            signup(this.state.user.email, this.state.user.password, () => {
                const cookies = new Cookies()
                getUserId(cookies.get("coraluser"), id => {
                    this.setState({
                        property: {
                            ...this.state.property,
                            ownerId: id
                        }
                    })
                    saveProperty(this.state.property, data => {
                        console.log(data)
                        if (data.status === "OK") {
                            this.setState({
                                property: {
                                    ...this.state.property,
                                    _id: data.id
                                },
                                saved: true
                            })
                        }
                    })

                })
            }, this.state.user.fullName, this.state.user.phoneCountryId, this.state.user.phoneNumber)
        } else {
            saveProperty(this.state.property, data => {
                console.log(data)
                if (data.status === "OK") {
                    this.setState({
                        property: {
                            ...this.state.property,
                            _id: data.id
                        },
                        saved: true
                    })
                }
            })
        }
    }

    render() {

        let candidates = ""
        let signupForm = ""
        let saveButton = ""
        let message = "Searching address..."
        if (this.state.saved) {
            console.log("Saved! Redirecting....")
            const url = "/editProperty?id=" + this.state.property._id
            return (<Redirect to={url} />)
        }

        if (this.state.searchStatus === "OK") {
            // check if 1 or many
            if (this.state.candidates.length > 1) {
                message = "We found some addresses. Please choose one or try again"
                candidates = this.state.candidates.map((place, idx) => (
                    <div key={idx}>
                        <div className="btn btn-info" onClick={this.changePlace(place.formatted_address)}>
                            {place.formatted_address}
                        </div>
                    </div>
                ))
            } else {
                // just one, check if ok
                let restrictions = []
                if (this.state.addressComponents) {
                    if (!this.state.addressComponents.some(comp => comp.types.indexOf("street_number") >= 0)) {
                        restrictions.push("Missing street number")
                    }
                    if (!this.state.addressComponents.some(comp => comp.types.indexOf("route") >= 0)) {
                        restrictions.push("Missing street")
                    }
                    if (!this.state.addressComponents.some(comp => comp.types.indexOf("administrative_area_level_2") >= 0)) {
                        restrictions.push("Missing city")
                    }
                }
                if (restrictions.length > 0) {
                    message = "We found this address, but it is incomplete. Could you please add some more information?"
                    const restr = restrictions.map(res => (
                        <div key={res}>
                            <small className="form-text text-danger">Problem found: {res}.</small>
                        </div>
                    ))
                    candidates = (
                        <div>
                            <div className="font-weight-bold mt-4">
                                <h5>Found: {this.state.candidates[0].formatted_address}</h5>
                            </div>
                            {restr}
                        </div>
                    )
                } else {
                    // ALL SET!
                    message = "We found this address. Is it right?"
                    candidates = (
                        <div>
                            <div className="font-weight-bold mt-4">
                                <h5>{this.state.candidates[0].formatted_address}</h5>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="additional">Additional Information</label>
                                    <input id="additional" type="text"
                                        className="form-control"
                                        value={this.state.property.additionalInfo}
                                        name="additional" placeholder="(apartment number, floor, etc)"
                                        onChange={this.changeAdditional} />
                                </div>
                            </div>
                        </div>
                    )
                    // if not logged in, present signup form...
                    if (!this.state.loggedIn) {
                        signupForm = (
                            <div>
                                <h4>Let's create an account for you</h4>
                                <div className="form-group">
                                    <label htmlFor="fullName">Your full name</label>
                                    <input id="fullName" type="text"
                                        className="form-control"
                                        value={this.state.user.fullName}
                                        name="fullName"
                                        onChange={this.changeUser} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your email</label>
                                    <input id="email" type="email"
                                        className="form-control"
                                        value={this.state.user.email}
                                        name="email"
                                        onChange={this.changeUser} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneCountryId">Phone country code</label>
                                    <input id="phoneCountryId" type="text"
                                        className="form-control"
                                        value={this.state.user.phoneCountryId}
                                        name="phoneCountryId"
                                        onChange={this.changeUser} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input id="phoneNumber" type="text"
                                        className="form-control"
                                        value={this.state.user.phoneNumber}
                                        name="phoneNumber"
                                        onChange={this.changeUser} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Choose a password</label>
                                    <input id="password" type="password"
                                        className="form-control"
                                        value={this.state.user.password}
                                        name="password"
                                        onChange={this.changeUser} />
                                </div>
                            </div>
                        )
                    }
                    saveButton = (
                        <input type="button" className="btn btn-info" value="Save property" onClick={this.save} />
                    )
                }
            }
        } else if (this.state.searchStatus === "ZERO_RESULTS") {
            message = "No places found... Could you please try again?"
        }

        return (
            <div className="container mt-5">
                <h2>List your property</h2>
                <div className="row">
                    <div className="col-md-8">
                        <form>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input id="address" type="text"
                                    className="form-control"
                                    value={this.state.property.address.formatted || ""}
                                    name="address" placeholder="Please, type your address"
                                    onChange={this.searchAddress} />
                                <small id="addressHelp" className="form-text text-muted">Your data will be safe with us.</small>
                            </div>
                            <hr />
                            <div id="results">
                                <h4>{message}</h4>
                                {candidates}
                                {signupForm}
                                {saveButton}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <img src="https://www.vippng.com/png/detail/330-3300910_office-plant-png-transparent-background-hanging-plants-clipart.png"
                            width="90%"
                            alt="nice pic" />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default AddProperty;
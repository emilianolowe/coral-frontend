import React, { Component } from "react";
import Card from "./PropertyCard";
import { getProperty, getUserId } from './PropertiesDAO'
import Cookies from 'universal-cookie'

class Chat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property: {

            },
            me: null,
            recipient: null,
        }
        
        const cookies = new Cookies()
        const myMail = cookies.get("coraluser")

        getProperty(this.props.propertyId, property => this.setState({property}))
        getUserId(myMail, id => this.setState({me: id}) )

    }

    render() {
        const property = {}
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <p>date</p>
                        <p>Chat message</p>
                        <p>Chat message</p>
                        <p>Chat message</p>
                    </div>
                    <div className="col-5">
                        <Card property={property} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat




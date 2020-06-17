import React, { Component } from "react";
import { getProperty, getUserId } from './PropertiesDAO'
import Cookies from 'universal-cookie'
import ChatMessage from './ChatMessage'

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

        getProperty(this.props.propertyId, property => this.setState({ property }))
        getUserId(myMail, id => this.setState({ me: id }))

    }

    render() {
        const property = {}
        return (
            <div className="container">
                <div className="more-seperator"><b>Wed, 16 June</b></div>

                <ChatMessage orientation="left" img="img/kanya.png" time="12:00 PM" from="Kanya Lyons" message="Hey Nano, let's talk about this property" />
                <ChatMessage orientation="right" img="img/nano.png" time="05:00 PM" from="Emiliano Lowe" message="How are you, K?" />
                <ChatMessage orientation="left" img="img/kanya.png" time="12:00 PM" from="Kanya Lyons" message="I'm fine. Just want to rent your home" />
                <ChatMessage orientation="right" img="img/nano.png" time="05:00 PM" from="Emiliano Lowe" message="Ok. Let's negotiate" />

                <div className="more-seperator"><b>Wed, 17 June</b></div>

                <ChatMessage orientation="left" img="img/kanya.png" time="12:00 PM" from="Kanya Lyons" message="Hey Nano, You know what? Maybe not" />
                <ChatMessage orientation="right" img="img/nano.png" time="05:00 PM" from="Emiliano Lowe" message="But why ?" />
                <ChatMessage orientation="left" img="img/kanya.png" time="12:00 PM" from="Kanya Lyons" message="I don't want to live there anymore" />
                <ChatMessage orientation="right" img="img/nano.png" time="05:00 PM" from="Emiliano Lowe" message="Ok. I understand..." />

                <br/><br/>
                <div className="container">
                    <form className="form-inline d-flex">
                        <input type="text" className="form-control w-75" placeholder="Type your message here" />
                        <input type="submit" className="btn btn-info" value="Send" />
                    </form>
                </div>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default Chat




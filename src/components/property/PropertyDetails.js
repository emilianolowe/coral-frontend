import React, { Component } from "react";
import PropertyImages from './PropertyImages';
import PropertyGallery from './PropertyGallery';
import { getProperty } from '../../DAO/PropertiesDAO';
import { isLoggedIn, getloggedInUserId } from '../../DAO/UsersDAO';
import { postMessageToOwner, getMessages } from '../../DAO/ChatDAO';
import { Launcher } from 'react-chat-window';

class PropertyDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property: {
                _id: this.props.id
            },
            messageList: [],
            error: null
        }

        this.loadProperty = this.loadProperty.bind(this);
        this._onMessageWasSent = this._onMessageWasSent.bind(this);
        this._sendMessage = this._sendMessage.bind(this);

        try {
            getProperty(this.props.id, this.loadProperty)
        } catch (error) {
            this.setState({ error: error.message })
        }

    }
    _onMessageWasSent(message) {
        postMessageToOwner(this.state.property._id, message.data.text, data => {
            if (data !== null) {
                this.setState({
                    messageList: [...this.state.messageList, message]
                })          
            } else {
                this.setState({
                    messageList: [...this.state.messageList, "error sending message"]
                })          
            }
        } )
      }
     
      _sendMessage(text) {
        if (text.length > 0) {
          this.setState({
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text }
            }]
          })
        }
      }

    loadProperty(property) {
        const me = getloggedInUserId()
        getMessages(property._id).then(msgs => {
            this.setState({ 
                property: property,
                messageList: msgs.data.map(msg => {
                    const msgObj = {
                        author: "them",
                        type: "text",
                        data: {
                            text: msg.message
                        }
                    }
                    if (msg.from === me) {
                        msgObj.author = "me"
                    }
                    return msgObj
                })
            });
        })
    }

    render() {

        //<div className="pint-overlay pint-contact"><i className="fa fa-comment"></i></div>

        let street = "";
        if (this.state.property.address) {
            street = this.state.property.address.street + ', '
                + this.state.property.address.city
        }
        let chat = "";
        let chatButton = (<a className="btn btn-info" href="/login?from=/property?id=5ed834de8fcb422f90dbff2f">Chat with the owner</a>)
        if (isLoggedIn()) {
            chatButton = ""
            chat = (<Launcher
                agentProfile={{
                    teamName: 'Chat with the Owner',
                    imageUrl: '/img/minilogo.jpg'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />)
        }
        return (
            <div className="container">
                <PropertyImages property={this.state.property} />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8 d-flex justify-content-lg-start justify-content-center">
                            <h2>{this.state.property.title}</h2>
                        </div>
                        <div className="col-lg d-flex justify-content-lg-end justify-content-center">
                            <a className="btn btn-info" rel="noopener noreferrer" target="_blank" href="https://calendly.com/ltreven/15min?month=2020-06">Book a Visit</a>
                            {chatButton}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-lg-start justify-content-center">
                            <p>{street}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-lg-start justify-content-center">
                            <p>€ <strong>{this.state.property.rent}</strong> monthly rent</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <h3 className="text-sm-left text-center">Characteristics</h3>
                    <div className="row mt-3">
                        <div className="col">
                            <p className="text-sm-left text-center">{this.state.property.size} {this.state.property.sizeUnit}</p>
                            <p className="text-sm-left text-center">{this.state.property.bedrooms} bedrooms</p>
                            <p className="text-sm-left text-center">{this.state.property.bathrooms} bathrooms</p>
                            <p className="text-sm-left text-center">Lift: {this.state.property.lift ? 'yes' : 'no'}</p>
                        </div>
                        <div className="col">
                            <p className="text-sm-left text-center">Pets allowed: {this.state.property.petfriendly ? 'yes' : 'no'}</p>
                            <p className="text-sm-left text-center">Furnitured: {this.state.property.furnitured ? 'yes' : 'no'}</p>
                            <p className="text-sm-left text-center">Near metro station: {this.state.property.nearMetroStation ? 'yes' : 'no'}</p>
                        </div>
                    </div>

                    <h3 className="text-sm-left text-center">Owner's description</h3>
                    <p className="text-sm-left text-center">{this.state.property.description}</p>

                </div>
                <div className="more-seperator"><b>more like this</b></div>
                <PropertyGallery hideFilter={true} />
                {chat}
            </div>
        );
    }
}

export default PropertyDetails;
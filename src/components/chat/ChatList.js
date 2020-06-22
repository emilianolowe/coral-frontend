import React, { Component } from "react";
import { getMessageList, postChatMessage, getMessages } from '../../DAO/ChatDAO';
import ChatMessage from "./ChatMessage";
import { Launcher } from 'react-chat-window';
import { getloggedInUserId } from '../../DAO/UsersDAO';

class ChatList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property: {
                _id: props.propertyId
            },
            messages: [],
            chatWith: null,
            messageList: [],
        }

        this._onMessageWasSent = this._onMessageWasSent.bind(this);
        this._sendMessage = this._sendMessage.bind(this);
        this.openChat = this.openChat.bind(this);

        getMessageList(props.propertyId)
            .then(msgs => {
                this.setState({ messages: msgs.data })
            })

    }

    openChat(to) {
        return event => {
            console.log("opening chat with ", to)
            // carregar histórico
            const me = getloggedInUserId()
            getMessages(this.state.property._id, to).then(msgs => {
                console.log(msgs)
                this.setState({
                    chatWith: to,
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
    }

    _onMessageWasSent(message) {
        postChatMessage(this.state.property._id, message.data.text, this.state.chatWith ,data => {
            if (data !== null) {
                this.setState({
                    messageList: [...this.state.messageList, message]
                })
            } else {
                this.setState({
                    messageList: [...this.state.messageList, "error sending message"]
                })
            }
        })
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

    render() {

        let chat = "";
        if (this.state.chatWith) {
            chat = (<Launcher
                agentProfile={{
                    teamName: 'Chat',
                    imageUrl: '/img/minilogo.jpg'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
                
            />)
        }

        let msgs = ""
        if(this.state.messages.length === 0) {
            msgs = (
                <div>
                    <h5 className="mt-3 text-info">No messages were received yet</h5>
                </div>
            )
        } else {
            msgs = this.state.messages.map(msg => (
                <div key={msg.from._id} className="container mt-3">
                    <div className="row border-bottom ">
                        <div className="col mr-auto">
                            <ChatMessage img={msg.from.picture}
                                time={msg.createdAt}
                                from={msg.from.fullName}
                                message={msg.message}
                                orientation="left" />
                        </div>
                        <div className="col d-flex align-items-center">
                            <button className="btn btn-info" onClick={this.openChat(msg.from._id)}>Reply</button>
                        </div>
                    </div>
                </div>
            ))
    
        }


        return (
            <div className="container">
                {msgs}
                {chat}
            </div>
        )
    }
}

export default ChatList




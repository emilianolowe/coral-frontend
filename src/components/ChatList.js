import React, { Component } from "react";

class ChatList extends Component {

    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th colSpan="2">Prospect</th>
                            <th>Last message</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="avatar">
                                    <img src="img/kanya.png" alt="prospect" />
                                </div>
                            </td>
                            <td>
                                Kanya Lyons
                                    </td>
                            <td>
                                <p>Hi there! I would like to send you an offer.</p>
                            </td>
                            <td>
                                Jun 3, 2020
                                    </td>
                            <td>
                                <a href="/chat" className="btn btn-info">Reply</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="avatar">
                                    <img src="img/nano.png" alt="prospect" />
                                </div>
                            </td>
                            <td>Emiliano Lowe</td>
                            <td>
                                <p>Hi! I have a labrador. Is your place really pet friendly?</p>
                            </td>
                            <td>
                                Jun 1, 2020
                                    </td>
                            <td>
                                <a href="/chat" className="btn btn-info">Reply</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ChatList




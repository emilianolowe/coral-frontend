import React, { Component } from "react";

class NavBar extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container m-5">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <a className="navbar-brand" href="/">Coral</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutus">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/owner">I'm an Owner</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/gallery">Search</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Sign In</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;
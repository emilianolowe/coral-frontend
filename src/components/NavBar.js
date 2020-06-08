import React, { Component } from "react";

class NavBar extends Component {

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="btn btn-default navbar-btn btn-lg btn-logo"><a href="/">
                        <img className="logo" src="/img/corl.svg" height="38" width="30" alt="Coral logo" ></img></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn btn-lg">
                                    <a className="nav-link" href="/owner">List My Property</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn btn-lg">
                                    <a className="nav-link" href="/myproperties">My Properties</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn btn-lg">
                                    <a className="nav-link" href="/aboutus">About Us</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn btn-lg">
                                    <a className="nav-link" href="/gallery">Search</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn btn-lg">
                                    <a className="nav-link" href="/login">Sign In</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn btn-lg">
                                    <a className="nav-link" href="/settings">Settings</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
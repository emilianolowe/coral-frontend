import React, { Component } from "react";

class NavBar extends Component {

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="btn navbar-btn"><a href="/">
                        <img src="/img/corl.svg" height="30" width="30" alt="Coral logo" ></img></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                            <form className="form-inline d-flex no-wrap flex-row" action="/gallery">
                                <input name="search" className="form-control nav-search ml-sm-4" 
                                    type="text" placeholder="Where is your dream home?" 
                                    aria-label="Search" />
                                <button className="btn btn-outline-info btn-sm ml-3 d-none d-md-block" type="submit">
                                    Search
                                </button>
                            </form>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn">
                                    <a className="nav-link" href="/owner">List My Property</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn">
                                    <a className="nav-link" href="/aboutus">About Us</a>
                                </div>
                            </li>


                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="btn btn-default navbar-btn">
                                    <a href="/profile">
                                        <img src="/img/account.svg" height="30" width="30" alt="account" ></img>
                                    </a>
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
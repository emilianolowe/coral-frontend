import React, { Component } from "react";

class Hero extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.heroHeader}</h1>
                <img src = "img/IMG_7193.jpeg" alt = "Barcelona building facade"/>
                <p>No realtor fees. Legal deposit only, nothing more.</p>
            </div>
        );
    }

}

export default Hero;
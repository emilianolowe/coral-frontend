import React, { Component } from "react";

class Hero extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.heroHeader}</h1>
                <img src = "img/apartmentblueaccent.jpeg" alt = "apartment with blue accent"/>
                <p>We are the leader in online home rentals.</p>
            </div>
        );
    }

}

export default Hero;
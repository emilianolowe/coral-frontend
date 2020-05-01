import React, { Component } from "react";

class Hero extends Component {

    render() {
        return (
            <div className="hero">
                <h1>{this.props.heroHeader}</h1>
                <h2>{this.props.subHeader}</h2>
            </div>
        );
    }

}

export default Hero;
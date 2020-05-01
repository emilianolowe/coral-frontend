import React, { Component } from "react";

class Hero extends Component {

    render() {

        const heroBackgroundStyle = {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('" + this.props.imgSrc + "')"
        }

        return (
            <div style={heroBackgroundStyle}
                className="hero">
                <div>
                    <h1>{this.props.heroHeader}</h1>
                    <h2>{this.props.subHeader}</h2>
                </div>
            </div>
        );
    }

}

export default Hero;
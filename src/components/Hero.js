import React, { Component } from "react";

class Hero extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.heroHeader}</h1>
                <h2>{this.props.subHeader}</h2>
                <img src={this.props.imgSrc} 
                alt={this.props.imgAlt} 
                className="img-fluid"/>
            </div>
        );
    }

}

export default Hero;
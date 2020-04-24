import React, { Component } from "react";

class Hero extends Component {

    render() {
        return (
            <div>
                <div class="hero-strip">
                    <div class="hero-header">{this.props.heroHeader}</div>
                    <div class="hero-subheader">{this.props.subHeader}</div>
                    <img src={this.props.imgSrc} 
                    alt={this.props.imgAlt} 
                    className="img-fluid"/>
                </div>
            </div>
        );
    }

}

export default Hero;
import React, { Component } from "react";

class Hero extends Component {

    render() {

        const heroBackgroundStyle = {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('" + this.props.imgSrc + "')"
        }

        let search = ""
        if (this.props.showSearch) {
            search = (
                <form className="form-inline d-flex justify-content-center mt-4" action="/gallery">
                    <input name="search" 
                        className="form-control mr-3 w-75" 
                        type="text" placeholder="Where do you want to live?" 
                        aria-label="Search" />
                </form>
            )
        }

        return (
            <div style={heroBackgroundStyle}
                className="hero">
                <div>
                    <h1>{this.props.heroHeader}</h1>
                    <h2>{this.props.subHeader}</h2>
                    {search}
                </div>
            </div>
        );
    }

}

export default Hero;
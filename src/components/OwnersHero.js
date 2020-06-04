import React, { Component } from "react";

class Hero extends Component {

    render() {

        const heroBackgroundStyle = {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('" + this.props.imgSrc + "')"
        }

        return (
            <div style={heroBackgroundStyle}
                className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="text-left">{this.props.heroHeader}</h1>
                            <h3 className="text-left">{this.props.subHeader}</h3>
                        </div>
                        <div className="col-4 bg-white">
                            <h4 className="text-left text-info mt-5 mb-4">Where is your property?</h4>
                            <form action="/addproperty">
                                <input type="text" 
                                    className="form-control" name="address"
                                    placeholder="address"></input>
                                <button type="submit" className="btn btn-info mt-5 mb-5 ml-auto">
                                        List your Property
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Hero;
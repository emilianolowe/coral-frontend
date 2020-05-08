import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container-fluid footer">
                    <div className="container ml-5 mr-5">
                        <div className="row">
                            <div className="col-md-4 text-center text-md-left">
                                <div className="py-0">
                                    <h3 className="my-4">Coral</h3>
                                </div>
                            </div>
                            <div className="col-md-4 text-center text-md-left ">
                                <div className="py-2 my-4">
                                    <div>
                                        <p> <i className="fa fa-map-marker mx-2 "></i>  c/ Almogávers, 119 08018 Barcelona
                                        <br></br>
                                            <i className="fa fa-phone  mx-2 "></i> +34 933 04 17 21
                                        <br></br>
                                            <i className="fa fa-envelope  mx-2"></i><a href="mailto:info@rentcoral.com"> info@rentcoral.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-4 text-center text-md-left">
                                <span className="font-weight-bold ">Renting Reinvented</span>
                                <p>Coral is a reimagined way to discover, tour, and rent a home. We specialize in long-term rentals.</p>
                                <div className="py-2">
                                    <a className="mr-3" href="#">
                                        <button type="button" className="btn btn-social-icon btn-facebook btn-rounded">
                                            <i className="fa fa-facebook"></i>
                                        </button>
                                    </a>
                                    <a  className="mr-3" href="#">
                                        <button type="button" className="btn btn-social-icon btn-twitter btn-rounded">
                                            <i className="fa fa-twitter"></i>
                                        </button>
                                    </a>
                                    <a href="#">
                                        <button type="button" className="btn btn-social-icon btn-instagram btn-rounded">
                                            <i className="fa fa-instagram"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </footer>
        );
    }
}

export default Footer;
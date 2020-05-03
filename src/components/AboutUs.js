import React, { Component } from 'react';
import TeamCard from './TeamCard';

class AboutUs extends Component {

    render() {

        return (
            <div class="container-fluid">
                <div className="row-fluid justify-content-center">
                    <div class="col-md-10 m-2 p-2">
                        <h2>About Us</h2>
                        <h5>Coral is a start to finish online real estate agency.</h5>
                    </div>
                </div>
                <div className="row-fluid justify-content-center">
                    <div class="col-md-10 m-2 p-2">
                        <h2>Our Mission and Values</h2>
                        <h5>Coral nurtures lasting, quality relationships between home renters and owners. We are transparent, inclusive, and 100% digital.</h5>
                    </div>
                    <div class="col-sm-4">
                    </div>
                </div>
                <div className="row-fluid justify-content-center">
                    <div class="col-md-10 m-2 p-2">
                        <h2>Our Team</h2>
                    </div>
                </div>
                <TeamCard/>
            </div>
        );

    }

}

export default AboutUs;
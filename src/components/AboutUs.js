import React, { Component } from 'react';
import TeamCard from './TeamCard';

class AboutUs extends Component {

    render() {

        return (
            <div class="col-md-10 offset-md-1">
                <div className="row-fluid justify-content-center">
                    <div class="col-md-8 m-2 p-2">
                        <h3>About Us</h3>
                        <p>Coral is a start to finish online real estate agency.</p>
                    </div>
                </div>
                <div class="col-md-4">

                </div>
                <div className="row-fluid justify-content-center">
                <div class="col-md-4">
                        
                </div>
                    <div class="col-md-8 m-2 p-2">
                        <h3>Our Mission and Values</h3>
                        <p>Coral nurtures lasting, quality relationships between home renters and owners. We are transparent, inclusive, and 100% digital.</p>
                    </div>
                </div>
                <div className="row-fluid justify-content-center">
                    <div class="col-md-10 m-2 p-2">
                        <h3>Our Team</h3>
                    </div>
                </div>
                <TeamCard/>
            </div>
        );

    }

}

export default AboutUs;
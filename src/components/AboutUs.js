import React, { Component } from 'react';
import TeamCard from './TeamCard';

class AboutUs extends Component {

    render() {

        return (
            <div class="container-fluid">
                <div className="row-fluid justify-content-center">
                    <div class="col-md-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </div>
                    <div class="col-md-8 m-2 p-2">
                        <h2>About Us</h2>
                        <p>Coral is a start to finish online real estate agency.</p>
                    </div>
                </div>
                <div className="row-fluid justify-content-center">
                    <div class="col-md-8 m-2 p-2">
                        <h2>Our Mission and Values</h2>
                        <p>Coral nurtures lasting, quality relationships between home renters and owners. We are transparent, inclusive, and 100% digital.</p>
                    </div>
                    <div class="col-sm-4">
                    </div>
                </div>
                <div className="row-fluid justify-content-center">
                    <div class="col-md-8 m-2 p-2">
                        <h2>Our Team</h2>
                    </div>
                </div>
                <TeamCard/>
            </div>
        );

    }

}

export default AboutUs;
import React, { Component } from 'react';

class AboutUs extends Component {

    render() {

        return (
            <div class="container-fluid">
                <div className="row-fluid justify-content-center">
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
                <div class="row">
                    <div class="col-md-2">Nadine Cumberbatch</div>
                    <div class="col-md-2">Lourenço Trevenzoli</div>
                    <div class="col-md-2">Emiliano Lowe</div>
                    <div class="col-md-2">Kanya Lyons</div>
                </div>
            </div>
        );

    }

}

export default AboutUs;
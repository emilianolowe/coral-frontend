import React, { Component } from 'react';
import TeamCard from './TeamCard';

class Terms extends Component {

    render() {
        return (
            <div className="container about-us">
                <div className="row">
                    <div className="col-md-1 offset-1 p-4">
                    <br></br>
                        <svg className="bi bi-house-door-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="#ff7262" xmlns="https://www.w3.org/2000/svg">
                            <path d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                            <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="col-md-10 p-4">
                        <br></br>
                        <h3>About Us</h3>
                        <p>Coral is a start to finish online real estate agency. We make long term home rentals hassle free. </p>
                        <ul>
                            <li>Renters save money on fees and deposits.</li>
                            <li>Property owners are guaranteed rent even if renters default.</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 offset-1 p-4">
                        <svg className="bi bi-star-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="#ff7262" xmlns="https://www.w3.org/2000/svg">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                    <div className="col-md-10 p-4">
                        <h3>Our Mission and Values</h3>
                        <p>We nurture lasting, quality relationships between home renters and property owners. Coral is transparent, inclusive, and 100% digital. We do the vetting so you can relax.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 offset-1 p-4">
                        <svg className="bi bi-people-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="#ff7262" xmlns="https://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="col-md-10 p-4">
                        <h3>Our Team</h3>
                        <p>We harness our diverse backgrounds, skills, and expertise to deliver the best value and service to everyone in the rental ecosystem. </p>
                        <div className="col justify-content-left">
                            <TeamCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Terms;
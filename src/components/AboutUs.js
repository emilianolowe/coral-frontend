import React, { Component } from 'react';
import '../AboutUs.css'

class AboutUs extends Component {

    render () {

        return (
            <div className = 'team'>
                <div className = 'title'>About Us</div>
                <div className = 'title'>Team</div>
                
                <div className = 'member'>
                    <div className = 'photo'>
                    <img src="/img/lourenco.jpg" alt="lourenco picture" className="img" />
                    </div>
                    <div className = 'tagline'>LouName</div>
                    <div className = 'position'>LouPos</div>
                    <div className = 'bio'>Loubio</div>
                </div>

                <div className = 'member'>
                    <div className = 'photo'>KanyaPhoto</div>
                    <div className = 'tagline'>KanyaName</div>
                    <div className = 'position'>KanyaPos</div>
                    <div className = 'bio'>Kanyabio</div>
                </div>

                <div className = 'member'>
                    <div className = 'photo'>
                        <img src="/img/nadinepic.jpg" alt="nadine picture" className="img" />
                    </div>
                    <div className = 'tagline'>NanoName</div>
                    <div className = 'position'>NanoPos</div>
                    <div className = 'bio'>Nanobio</div>
                </div>

                <div className = 'member'>
                    <div className = 'photo'>
                        <img src="/img/nadinepic.jpg" alt="nadine picture" className="img" />
                    </div>
                    <div className = 'tagline'>NadineName</div>
                    <div className = 'position'>NadinePos</div>
                    <div className = 'bio'>Nadinebio</div>
                </div>

            </div>
        );

    }

}

export default AboutUs;
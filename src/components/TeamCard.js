import React, { Component } from 'react';
import Card from './NoButtonCard';

class TeamCard extends Component {
  render() {
    return (
      <div className="container-fluid d-flex">
        <div className="row align">
          <div className="col-lg-3">
          <Card imgsrc="img/nadine.png"
              title="Nadine Cumberbatch"
              bodyText="Business Analyst and Product Manager"/>
          </div>
          <div className="col-lg-3">
            <Card imgsrc="img/lourenco.png"
              title="Lourenço Trevenzoli"
              bodyText="Engineering Director and Full Stack Developer"/>
          </div>
          <div className="col-lg-3">
            <Card imgsrc="img/nano.png"
              title="Emiliano Lowe"
              bodyText="Full Stack Developer and Professional Badass"/>
          </div>
          <div className="col-lg-3">
            <Card imgsrc="img/kanya.png"
              title="Kanya Lyons"
              bodyText="Front End Developer, Product Designer, and UX Writer"/>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamCard;
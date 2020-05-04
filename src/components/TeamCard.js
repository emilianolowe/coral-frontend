import React, { Component } from 'react';
import Card from './NoButtonCard';

class TeamCard extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-left">
        <div className="row">
          <div className="col-md-3">
          <Card imgsrc="img/nadine.png"
              title="Nadine Cumberbatch"
              bodyText="Product Manager"/>
          </div>
          <div className="col-md-3">
            <Card imgsrc="img/lourenco.png"
              title="Lourenço Trevenzoli"
              bodyText="Full Stack Developer"/>
          </div>
          <div className="col-md-3">
            <Card imgsrc="img/nano.png"
              title="Emiliano Lowe"
              bodyText="Full Stack Developer"/>
          </div>
          <div className="col-md-3">
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
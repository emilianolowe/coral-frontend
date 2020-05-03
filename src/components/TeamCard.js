import React, { Component } from 'react';
import Card from './NoButtonCard';

class TeamCard extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-left">
        <div className="row">
          <div className="col-md-3">
          <Card imgsrc="img/kanyasquare.jpg"
              title="Nadine Cumberbatch"
              bodyText="Bio"/>
          </div>
          <div className="col-md-3">
            <Card imgsrc="img/lourencosquare.jpg"
              title="Lourenço Trevenzoli"
              bodyText="Bio"/>
          </div>
          <div className="col-md-3">
            <Card imgsrc="img/emilianosquare.jpg"
              title="Emiliano Lowe"
              bodyText="Bio"/>
          </div>
          <div className="col-md-3">
            <Card imgsrc="img/kanyasquare.jpg"
              title="Kanya Lyons"
              bodyText="Bio"/>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamCard;
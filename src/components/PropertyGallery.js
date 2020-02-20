import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class PropertyGallery extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className='justify-content-md-center'>
            <Col className="col col-lg-2">Property One</Col>
            <Col>Property Two</Col>
            <Col>Property Three</Col>
          </Row>
          <Row>
            <Col>Property Four</Col>
            <Col>Property Five</Col>
            <Col>Property Six</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default PropertyGallery;

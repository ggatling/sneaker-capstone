import React from "react";
import {
  Row, Col, Container
} from 'react-bootstrap';

const Info = props => {
  return(
    <Container className="profile">
      <Row>
        <Col>{props.email}</Col>
        <Col>{props.city}</Col>
        <Col>{props.state}</Col>
        <Col>{props.zipcode}</Col>
      </Row>
 </Container>
  )
}

export default Info;

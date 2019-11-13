import React from "react";
import {
  Row, Col, Container
} from 'react-bootstrap';

const Sneaker = props => {
  return(
    <Container className="allSneaker">
      <Row>
        <Col>{props.brand}</Col>
        <Col>{props.name}</Col>
        <Col>{props.gender}</Col>
        <Col>{props.size}</Col>
        <Col>{props.condition}</Col>
        <Col>{props.releaseDate}</Col>
        <Col>{props.retailPrice}</Col>
        <Col>{props.resalePrice}</Col>
        <Col>{props.email}</Col>
      </Row>
 </Container>
  )
}

export default Sneaker;

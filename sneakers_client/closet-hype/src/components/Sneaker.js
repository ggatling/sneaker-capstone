import React from "react";
import {
  Row, Col, Container
} from 'react-bootstrap';

const Sneaker = props => {
  return(
    <Container className="allSneaker" style={
      { padding: "5px" }}>
      <Row>
        <Col style={{ border: "1px solid black" }}>{props.brand}</Col>
        <Col style={{ border: "1px solid black" }}>{props.name}</Col>
        <Col style={{ border: "1px solid black" }}>{props.gender}</Col>
        <Col style={{ border: "1px solid black" }}>{props.size}</Col>
        <Col style={{ border: "1px solid black" }}>{props.condition}</Col>
        <Col style={{ border: "1px solid black" }}>{props.releaseDate}</Col>
        <Col style={{ border: "1px solid black" }}>${props.retailPrice}</Col>
        <Col style={{ border: "1px solid black" }}>${props.resalePrice}</Col>
        <Col style={{ border: "1px solid black" }}><a href={`mailto:${props.email}`}>E-mail</a></Col>
      </Row>
 </Container>
  )
}

export default Sneaker;

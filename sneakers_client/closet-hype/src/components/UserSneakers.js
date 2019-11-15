import React from "react";
import {
  Row, Col, Container
} from 'react-bootstrap';

const UserSneakers = props => {
  return(
    <Container className="userSneaker" style={
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
      </Row>
 </Container>
  )
}

export default UserSneakers;

import React from "react";
import {
  Row, Col, Container
} from 'react-bootstrap';

const Sneaker = props => {
  return(
    <Container className="allSneaker" style={
      { padding: "5px",}
    }>
      <Row>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>{props.brand}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>{props.name}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>{props.gender}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>{props.size}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>{props.condition}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>{props.releaseDate}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>${props.retailPrice}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}>${props.resalePrice}</Col>
        <Col style={{border: "1px solid black",boxShadow: "2px 2px #888888"}}><a href={`mailto:${props.email}`}>E-mail</a></Col>
      </Row>
 </Container>
  )
}

export default Sneaker;

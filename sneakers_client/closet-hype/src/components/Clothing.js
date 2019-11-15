import React from "react";
import {
  Row, Col, Container
} from 'react-bootstrap';

const Clothing = props => {
  return(

    <Container className="allClothing" style={
      { padding: "5px" }}>
      <Row>
        <Col style={{ border: "1px solid black" }}>{props.brand}</Col>
        <Col style={{ border: "1px solid black" }}>{props.name}</Col>
        <Col style={{ border: "1px solid black" }}>{props.color}</Col>
        <Col style={{ border: "1px solid black" }}>{props.gender}</Col>
        <Col style={{ border: "1px solid black" }}>{props.size}</Col>
        <Col style={{ border: "1px solid black" }}>${props.retailPrice}</Col>
        <Col style={{ border: "1px solid black" }}>${props.rentalPrice}</Col>
        <Col style={{ border: "1px solid black" }}> <a href={`mailto:${props.email}`}>E-mail</a></Col>
      </Row>
 </Container>
  )
}

export default Clothing;

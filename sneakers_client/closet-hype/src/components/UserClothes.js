import React from "react";
import {
  Row, Col, Container
} from 'react-bootstrap';

const UserClothes = props => {
  return(

    <Container className="userClothing">
      <Row>
        <Col>{props.brand}</Col>
        <Col>{props.name}</Col>
        <Col>{props.color}</Col>
        <Col>{props.gender}</Col>
        <Col>{props.size}</Col>
        <Col>{props.retailPrice}</Col>
        <Col>{props.rentalePrice}</Col>
      </Row>
 </Container>
  )
}

export default UserClothes;

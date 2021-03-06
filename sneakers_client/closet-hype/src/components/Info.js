import React from "react";
import {
  Row, Card
} from 'react-bootstrap';

const Info = props => {
  return(

  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
      <Card.Title>Welcome To Your Closet</Card.Title>
      <Row><Card.Text> Email: {props.email} </Card.Text></Row>
      <Row><Card.Text> City: {props.city} </Card.Text></Row>
      <Row><Card.Text> State: {props.state} </Card.Text></Row>
      <Row><Card.Text> Zipcode: {props.zipcode} </Card.Text></Row>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
 //    <Container className="profile">
 //      <Row>
 //        <Col>{props.email}</Col>
 //        <Col>{props.city}</Col>
 //        <Col>{props.state}</Col>
 //        <Col>{props.zipcode}</Col>
 //      </Row>
 // </Container>
  )
}

export default Info;

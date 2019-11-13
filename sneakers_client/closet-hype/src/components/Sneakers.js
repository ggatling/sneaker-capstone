import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Sneaker from "./Sneaker.js";
import {
  Row, Col, Container
} from 'react-bootstrap';

class Sneakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      seeSneakers: false,
      user: localStorage.getItem("user")
    }
  }
  componentDidMount = () => {
    this.getSneakers();

  }

  getSneakers = () => {
    console.log(this.state.user)
    fetch("http://localhost:8080/sneakers/list/all",{
      method: "Get",
      headers: new Headers({
        'Authorization': "Bearer " + this.state.user,
        "Content-Type": "application/json"
      })
    })

    .then(res => {
      // console.log(res.json())
      return res.json()
      // set the state to be an array of sneakers
    })
    .then(res => {
      this.setState({
        sneakers: res,
        seeSneakers: true
      })
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
      <Container className="allSneaker">
      <Row>
        <Col>Brand</Col>
        <Col>Name</Col>
        <Col>Gender</Col>
        <Col>Size</Col>
        <Col>Condition</Col>
        <Col>Release Date</Col>
        <Col>Retail Price</Col>
        <Col>Resale price</Col>
      </Row>
      </Container>
         {this.state.sneakers.length > 0 && this.state.sneakers.map(sneaker => {
          return (

            <Sneaker
             brand = {sneaker.brand}
             name = {sneaker.name}
             gender = {sneaker.gender}
             size = {sneaker.size}
             condition = {sneaker.condition}
             releaseDate = {sneaker.releaseDate}
             retailPrice = {sneaker.retailPrice}
             resalePrice = {sneaker.resalePrice}
             />
          )

        })}
      </div>
    )
  }
}

export default Sneakers;

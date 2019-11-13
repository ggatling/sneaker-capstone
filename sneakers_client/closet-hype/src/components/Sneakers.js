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
      user: [],
      seeSneakers: false,
      users: localStorage.getItem("user")
    }
  }
  usersArr = [];
  componentDidMount = () => {
    this.getSneakers();

  }

  getSneakers = () => {
    console.log(this.state.user)
    fetch("http://localhost:8080/user/list",{
      method: "Get",
      headers: new Headers({
        'Authorization': "Bearer " + this.state.users,
        "Content-Type": "application/json"
      })
    })

    .then(res => {
      // console.log(res.json())
      return res.json()
      // set the state to be an array of sneakers
    })
    .then(res => {
      this.setState({user: res});
      console.log("first user id "+this.state.user[0].sneakers[0].brand)
      return res;
    })
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return(
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
          <Col>E-mail</Col>
        </Row>
        </Container>

          { this.state.user.length > 0 && this.state.user.map(currUser => {
              return currUser.sneakers.length>0 && currUser.sneakers.map(sneaker=>{
               console.log(currUser.userProfile.email);
                return (
                  <div>
                  <Sneaker
                   brand = {sneaker.brand}
                   name = {sneaker.name}
                   gender = {sneaker.gender}
                   size = {sneaker.size}
                   condition = {sneaker.condition}
                   releaseDate = {sneaker.releaseDate}
                   retailPrice = {sneaker.retailPrice}
                   resalePrice = {sneaker.resalePrice}
                   email = {currUser.userProfile.email}
                   />
                   </div>
                )
              })
          })}

      </div>
    )
  }
}

export default Sneakers;

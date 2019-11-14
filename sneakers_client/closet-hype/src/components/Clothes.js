import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, Jumbotron } from "reactstrap";
import Clothing from "./Clothing.js";
import {
  Row, Col, Container
} from 'react-bootstrap';
import clotheshanging from '../assets/clothes-hanging.jpg'

class Clothes extends Component {
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
    this.getClothes();

  }

  getClothes = () => {
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
      return res;
    })
    .catch(err => {
      console.log(err);
    });

  }



  render() {
    return (
      <div>
      <Jumbotron style={
        { backgroundImage: `url(${clotheshanging})`,
         backgroundSize: 'cover',
         overlayColor: 'black',
         height: 350
        }}>
        <Container className= "jumbo2">
          <h1>Rent, Rock, Return, Repeat</h1>
          <p>
            Dummy Text
          </p>
        </Container>
    </Jumbotron>
        <Container className="allClothing">
        <Row>
          <Col>Brand</Col>
          <Col>Name</Col>
          <Col>Gender</Col>
          <Col>Size</Col>
          <Col>Condition</Col>
          <Col>Retail Price</Col>
          <Col>Rental price</Col>
          <Col>E-mail</Col>
        </Row>
        </Container>

          { this.state.user.length > 0 && this.state.user.map(currUser => {
              return currUser.clothes.length>0 && currUser.clothes.map(clothing=>{
                return (
                  <div>
                  <Clothing
                   brand = {clothing.brand}
                   name = {clothing.name}
                   color = {clothing.gender}
                   gender = {clothing.size}
                   size = {clothing.size}
                   retailPrice = {clothing.retailPrice}
                   rentalPrice = {clothing.rentalPrice}
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

export default Clothes;

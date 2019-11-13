import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Sneaker from "./Sneaker.js";

class Sneakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      seeSneakers: false
    }
  }
  componentDidMount = () => {
    this.getSneakers();

  }

  getSneakers = () => {
    fetch("http://localhost:8080/sneakers/list/all",{
      method: "Get",
      headers: new Headers({
        'Authorization': "Bearer " + localStorage.getItem("user"),
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

import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Clothing from "./Clothing.js";

class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    }
  }
  componentDidMount = () => {
    this.getClothes();

  }

  getClothes = () => {
    fetch("http://localhost:8080/clothes/list/all",{
      method: "Get",
      headers: new Headers({
        'Authorization': "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      })
    })

    .then(res => {
      // console.log(res.json())
      return res.json()
      // set the state to be an array of clothes
    })
    .then(res => {
      this.setState({ clothes: res })
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1> Rent, Return, Repeat </h1>
         {this.state.clothes.length > 0 && this.state.clothes.map(clothing => {
          return (
            <Clothing
             brand = {clothing.brand}
             name = {clothing.name}
             gender = {clothing.gender}
             size = {clothing.size}
             color = {clothing.color}
             retailPrice = {clothing.retailPrice}
             rentalPrice = {clothing.rentalPrice}
             />
          )

        })}
      </div>
    )
  }
}

export default Clothes;

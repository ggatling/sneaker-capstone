import React,{Component} from "react";
import UserSneakers from "./UserSneakers.js"
import UserClothes from "./UserClothes.js"
import Info from "./Info.js";
import AddSneaker from "./AddSneaker.js"
import { Button, Form, FormGroup, Label, Input, Modal } from "reactstrap";


class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      city:'',
      state: '',
      zipcode: '',
      sneakers: [],
      clothes: [],
      brand: '',
      name: '',
      gender: '',
      size: '',
      condition: '',
      releaseDate: '',
      retailPrice: '',
      resalePrice: '',
      email: ''
      }

    }

  componentDidMount =() =>{
    this.getProfile();
    this.getProfileSneakers();
    this.getProfileClothes();
    // this.addSneaker();
  }

  getProfile =() =>{
    fetch("http://localhost:8080/profile",{
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
        email: res.email,
        city: res.city,
        state: res.state,
        zipcode: res.zipcode
      })
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getProfileSneakers=()=>{
    fetch("http://localhost:8080/sneakers/list",{
      method: "Get",
      headers: new Headers({
        'Authorization': "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      })
    })
    .then(res => {
      // console.log(res.json())
      return res.json()
      // set the state to be an array of user sneakers
    })
    .then(res => {
      this.setState({
        sneakers: res
      })
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getProfileClothes=()=>{
    fetch("http://localhost:8080/clothes/list",{
      method: "Get",
      headers: new Headers({
        'Authorization': "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      })
    })
    .then(res => {
      // console.log(res.json())
      return res.json()
      // set the state to be an array of user sneakers
    })
    .then(res => {
      this.setState({
        clothes: res
      })
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  }

  // addSneaker=(e)=>{
  //   e.preventDefault();
  //   fetch("http://localhost:8080/sneakers",{
  //     method: "Post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       brand: this.state.brand,
  //       name: this.state.name,
  //       gender: this.state.gender,
  //       size: this.state.size,
  //       condition: this.state.condition,
  //       releaseDate: this.state.releaseDate,
  //       retailPrice: this.state.retailPrice,
  //       resalePrice: this.state.resalePrice,
  //       email: this.state.email
  //     })
  //   })
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then( res => {
  //     this.setState({
  //       brand: res.brand,
  //       name: res.name,
  //       gender: res.gender,
  //       size: res.size,
  //       condition: res.condition,
  //       releaseDate: res.releaseDate,
  //       retailPrice: res.retailPrice,
  //       resalePrice: res.resalePrice,
  //       email: res.email
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  handleBrandChange = e => {
    this.setState({brand: e.target.value }
    );
  };

  render() {
    return(
      <div>
          <Info
            email = {this.state.email}
            city = {this.state.city}
            state = {this.state.state}
            zipcode = {this.state.zipcode}
            />



         {this.state.sneakers.length > 0 && this.state.sneakers.map(sneaker => {
          return (

            <UserSneakers
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
          {this.state.clothes.length > 0 && this.state.clothes.map(clothing => {
           return (
             <UserClothes
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

export default Profile;

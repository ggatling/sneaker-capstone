import React,{Component} from "react";
import UserSneakers from "./UserSneakers.js"
import UserClothes from "./UserClothes.js"
import Info from "./Info.js";

class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      city:'',
      state: '',
      zipcode: '',
      sneakers: [],
      clothes: []
    }
  }
  componentDidMount =() =>{
    this.getProfile();
    this.getProfileSneakers();
    this.getProfileClothes();
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

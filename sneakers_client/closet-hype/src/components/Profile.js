import React,{Component} from "react";
import Info from "./Info.js"

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
    // this.getProfileSneakers();
    // this.getProfileClothes();
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

  // getProfileSneakers(){
  //   fetch("http://localhost:8080/profile")
  // }

  render(){
    return(
      <Info
        email = {this.state.email}
        city = {this.state.city}
        state = {this.state.state}
        zipcode = {this.state.zipcode}
      />
    )
  }
}

export default Profile;

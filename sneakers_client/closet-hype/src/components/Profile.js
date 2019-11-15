import React,{Component} from "react";
import UserSneakers from "./UserSneakers.js";
import UserClothes from "./UserClothes.js";
import Info from "./Info.js";
import AddSneaker from "./AddSneaker.js";
import AddClothes from "./AddClothes.js";
import {
  Row, Col, Container
} from 'react-bootstrap';

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
      rentalPrice: '',
      color: '',
      users: localStorage.getItem("user")
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

  addSneaker=(e)=>{
    e.preventDefault();
    console.log(e)
    fetch("http://localhost:8080/sneakers",{
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + localStorage.getItem("user")
      },
      body: JSON.stringify({
        brand: this.state.brand,
        name: this.state.name,
        gender: this.state.gender,
        size: this.state.size,
        condition: this.state.condition,
        releaseDate: this.state.releaseDate,
        retailPrice: this.state.retailPrice,
        resalePrice: this.state.resalePrice,
      })
    })
    .then(res => {
      return res.json();
    })
    .then( res => {
      console.log(res)
      const sneakerObj = {
        brand: res.brand,
        name: res.name,
        gender: res.gender,
        size: res.size,
        condition: res.condition,
        releaseDate: res.releaseDate,
        retailPrice: res.retailPrice,
        resalePrice: res.resalePrice
      }
      this.setState({
        brand: res.brand,
        name: res.name,
        gender: res.gender,
        size: res.size,
        condition: res.condition,
        releaseDate: res.releaseDate,
        retailPrice: res.retailPrice,
        resalePrice: res.resalePrice,
        sneakers: [...this.state.sneakers, sneakerObj]
      })

    })
    .catch(err => {
      console.log(err);
    });
  }


  addClothes=(e)=>{
    e.preventDefault();
    console.log(e)
    fetch("http://localhost:8080/clothes",{
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + localStorage.getItem("user")
      },
      body: JSON.stringify({
        brand: this.state.brand,
        name: this.state.name,
        gender: this.state.gender,
        size: this.state.size,
        color: this.state.color,
        retailPrice: this.state.retailPrice,
        rentalPrice: this.state.rentalPrice,
      })
    })
    .then(res => {
      return res.json();
    })
    .then( res => {
      console.log(res)
      const clothesObj = {
        brand: res.brand,
        name: res.name,
        gender: res.gender,
        size: res.size,
        color: res.color,
        retailPrice: res.retailPrice,
        rentalPrice: res.rentalPrice
      }
      this.setState({
        brand: res.brand,
        name: res.name,
        gender: res.gender,
        size: res.size,
        color: res.color,
        retailPrice: res.retailPrice,
        rentalPrice: res.rentalPrice,
        clothes: [...this.state.clothes, clothesObj]
      })

    })
    .catch(err => {
      console.log(err);
    });
  }

  handleBrandChange = e => {
    this.setState({brand: e.target.value }
    );
  };

  handleNameChange = e => {
    this.setState({name: e.target.value }
    );
  };
  handleGenderChange = e => {
    this.setState({gender: e.target.value }
    );
  };

  handleSizeChange = e => {
    this.setState({size: e.target.value }
    );
  };
  handleConditionChange = e => {
    this.setState({condition: e.target.value }
    );
  };

  handleReleaseChange = e => {
    this.setState({releaseDate: e.target.value }
    );
  };
  handleRetailChange = e => {
    this.setState({retailPrice: e.target.value }
    );
  };

  handleResaleChange = e => {
    this.setState({resalePrice: e.target.value }
    );
  };

  handleColorChange = e => {
    this.setState({color: e.target.value }
    );
  };

  handleRentalChange = e => {
    this.setState({rentalPrice: e.target.value }
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

        <Container>
          <Row>
            <Col>
              <AddSneaker
                brand = {this.state.brand}
                name = {this.state.name}
                gender = {this.state.gender}
                size = {this.state.size}
                conditon = {this.state.conditon}
                releaseDate = {this.state.releaseDate}
                retailPrice = {this.state.retailPrice}
                resalePrice = {this.state.resalePrice}
                handleNameChange = {this.handleNameChange}
                handleBrandChange = {this.handleBrandChange}
                handleGenderChange = {this.handleGenderChange}
                handleSizeChange = {this.handleSizeChange}
                handleConditionChange = {this.handleConditionChange}
                handleReleaseChange = {this.handleReleaseChange}
                handleRetailChange = {this.handleRetailChange}
                handleResaleChange = {this.handleResaleChange}
                addSneaker = {e => this.addSneaker(e)}
              />
            </Col>
            <Col>
              <AddClothes
                brand = {this.state.brand}
                name = {this.state.name}
                color = {this.state.color}
                gender = {this.state.gender}
                size = {this.state.size}
                retailPrice = {this.state.retailPrice}
                rentalPrice = {this.state.rentalPrice}
                handleNameChange = {this.handleNameChange}
                handleBrandChange = {this.handleBrandChange}
                handleColorChange = {this.handleColorChange}
                handleGenderChange = {this.handleGenderChange}
                handleSizeChange = {this.handleSizeChange}
                handleRetailChange = {this.handleRetailChange}
                handleRentalChange = {this.handleRentalChange}
                addClothes = {e => this.addClothes(e)}
              />
            </Col>
          </Row>
        </Container>

        <Container className="allSneaker">
        <Row>
          <Col>Brand</Col>
          <Col>Name</Col>
          <Col>Gender</Col>
          <Col>Size</Col>
          <Col>Condition</Col>
          <Col>Release Date</Col>
          <Col>Retail Price</Col>
          <Col>Resale Price</Col>
        </Row>
        </Container>

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
        <br/>
        <br/>
        <br/>
        <Container className="allClothing">
        <Row>
          <Col>Brand</Col>
          <Col>Name</Col>
          <Col>Color</Col>
          <Col>Gender</Col>
          <Col>Size</Col>
          <Col>Retail Price</Col>
          <Col>Rental Price</Col>
        </Row>
        </Container>

          {this.state.clothes.length > 0 && this.state.clothes.map(clothing => {
           return (
             <UserClothes
              brand = {clothing.brand}
              name = {clothing.name}
              color = {clothing.color}
              gender = {clothing.gender}
              size = {clothing.size}
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

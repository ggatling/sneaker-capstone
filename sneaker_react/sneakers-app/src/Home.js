import React, {Component} from 'react';
import {
  Row, Col, Container, CardImg, Card, Form, Button,
} from 'react-bootstrap';
import yeezy from "./assets/yeezy4.jpg";
import clothesgrey from "./assets/clothes-grey.jpg";
import clotheshanging from "./assets/clothes-hanging.jpg";
import Signup from "./Signup";
import Login from "./Login";
import reactDOM from "react-dom";
import signlogin from "./signlogin.scss";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSignupOpen: true,
      isLoginOpen: false
      };
    }
    showSignUpBox(){
      this.setState({isSignupOpen: true, isLoginOpen: false});
    }
    showLoginBox(){
      this.setState({isLoginOpen: true, isSignupOpen: false});
    }

  render(){
      return (
        <div>
          <h1> Closet Hype</h1>
          <p>
            Welcome to Cloest Hype, where your closest is constantly on display and
            we aim to optimize peer 2 peer selling and lending of all the most sought
            after items in your closet. Let your closet make you money!
          </p>

            <div className="box-container">
              <div className={"controller" + (this.state.isSignupOpen ? "selected-controller" :"")}
              onClick={this
                .showSignUpBox
                .bind(this)}>SignUp
                </div>
              <div className={"controller" + (this.state.isLoginOpen ? "selected-controller" :"")}
               onClick={this
                 .showLoginBox
                 .bind(this)}>Login
                 </div>
                 <div>
                   {this.state.isSignupOpen && <Signup />}
                   {this.state.isLoginOpen && <Login />}
                 </div>

          </div>

          <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="bottom" top-width="100%" src={yeezy} alt="yeezy" / >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">View Profile</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="bottom" top-width="100%" src={clothesgrey} alt="yeezy" / >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">View Profile</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="bottom" top-width="100%" src={clotheshanging} alt="yeezy" / >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="primary">View Profile</Button>
            </Card.Body>
          </Card>
          </Col>
          </Row>






        </div>

      );
    }
  }


  reactDOM.render(
    <Home />, document.getElementById("root"));

export default Home;

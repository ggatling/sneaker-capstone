import React, { Component } from "react";
import { Jumbotron } from "./Jumbotron.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { Redirect } from "react-router-dom";
import {
  Row, Col, Container
} from 'react-bootstrap';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userProfile:{
          email: ""
        },
        username: "",
        password: "",
      },
      loggedIn: false

    };
  }
  submitLogin = e => {
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res, "this better be a token");
        console.log(this.state.user);
        this.setState({
          user: { ...this.state.user, res },
          loggedIn: true
        }, () => localStorage.setItem('user', res.token));

      })
      .catch(err => {
        console.log(err);
      });
  };

  submitSignup = e => {
    e.preventDefault();
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userProfile:{
          email: this.state.user.userProfile.email
        },
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res, "this better be a token");
        localStorage.setItem("user", res.token)
        this.setState({
          user: { ...this.state.user, res },
          loggedIn: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };



  handleUsernameChange = e => {
    this.setState({ user: { ...this.state.user, username: e.target.value }
    });
  };
  handleEmailChange = e =>{
    console.log(`e is ${e}, e.target is ${e.target}, e.target.value is ${e.target.value}`)
    this.setState({ user: { ...this.state.user, userProfile:{email: e.target.value}}
    });
  };

  handlePasswordChange = e => {
    this.setState({
      user: { ...this.state.user, password: e.target.value }
    });
  };



  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <Jumbotron />
        <Container>
        <Row>
          <Col>
            <Login
              username={this.state.username}
              password={this.state.password}
              handleUsernameChange={this.handleUsernameChange}
              handlePasswordChange={this.handlePasswordChange}
              submitLogin={e => this.submitLogin(e)}
            />
          </Col>
          <Col>
            <Signup
              username={this.state.username}
              password={this.state.password}
              email={this.state.user.userProfile.email}
              handleUsernameChange={this.handleUsernameChange}
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
              submitSignup={e => this.submitSignup(e)}
            />
          </Col>
        </Row>
        </Container>


      </div>
    );
  }
}
export default Home;

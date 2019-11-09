import React,{Component} from 'react';
import {
  Row, Col, Container, CardImg, Card, Form, Button,
} from 'react-bootstrap';
import signlogin from "./signlogin.scss";


class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitSignup(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          SignUp
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitSignup
            .bind(this)}>SignUp</button>
        </div>
      </div>
    );
  }
}

export default Signup;

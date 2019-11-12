import React, {Component} from 'react';
import {
  Row, Col, Container, CardImg, Card, Form, Button,
} from 'react-bootstrap';
import signlogin from "./signlogin.scss";
import axios from 'axios';

class Login extends Component{

  constructor(props) {
      super(props);
      this.state = {username:"",
      password:"",
      errors:[]};
    }

    showValidationError(element, message){
      this.setState((prevState) => ({errors: [...prevState.errors,{element,message}]}));
    }

    clearValidationError(element){
      this.setState((prevState) =>{
        let newArr=[];
        for(let error of prevState.errors){
          if(element !== error.element){
          newArr.push(error);
          }
        }
        return {errors: newArr};
      });
    }

    onUsernameChange(e){
      this.setState({username: e.target.value});
       this.clearValidationError("username");

    }

    onPasswordChange(e){
      this.setState({password: e.target.value});
       this.clearValidationError("password");
     }

    submitLogin = (e) => {
      console.log(this.state);

      if(this.state.username === ""){

          this.showValidationError("username","Username Cannot be empty!");
        }
        if (this.state.password === ""){
          this.showValidationError("password","Password Cannot be empty!");
        }

        axios.post('http://localhost:8080/login/', this.state)
        .then(response => {
          console.log(response.data.token)
          this.setState({token: "lol"})
        })
          .catch(error => {
            console.log(error)
          })
          console.log(this.state)
    }

    render() {
      let usernameError = null, passwordError= null, emailError = null;
      for(let error of this.state.errors){
        if(error.element === "username"){
          usernameError = error.message;
        }if (error.element === "password"){
          passwordError = error.message;
        }
      }

      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                onChange={this
                  .onUsernameChange
                  .bind(this)}/>
                <small className="danger-error">{usernameError ? usernameError : ""}</small>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                onChange={this
                  .onPasswordChange
                  .bind(this)}
                />
                <small className="danger-error">{passwordError ? passwordError : ""}</small>
            </div>

            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
      );
    }

  }
export default Login;

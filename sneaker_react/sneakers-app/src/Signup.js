import React,{Component} from 'react';
import {
  Row, Col, Container, CardImg, Card, Form, Button,
} from 'react-bootstrap';
import axios from 'axios';



class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {username:"",
    userProfile:{
      email:""
    }
    ,password:""
    ,errors:[]
    ,pwdState: null,};
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
  onEmailChange(e){
    const {userProfile} = {...this.state};
    const currentState = userProfile;
    const {name, value} = e.target;
    currentState[name] = value;

    this.setState({email: currentState});
     this.clearValidationError("email");
  }
  onPasswordChange(e){
    this.setState({password: e.target.value});
     this.clearValidationError("password");

     this.setState({pwdState: "weak"});
     if(e.target.value.length > 6){
       this.setState({pwdState: "medium"})
     }else if (e.target.value.length > 10){
       this.setStaate({pwdState: "strong"});
     }
  }

  submitSignup(e){
    e.preventDefault()
    console.log(this.state);

    if(this.state.username === ""){

        this.showValidationError("username","Username Cannot be empty!");
      }
      if (this.state.email === ""){
        this.showValidationError("email","Email Cannot be empty!");
      }
      if (this.state.password === ""){
        this.showValidationError("password","Password Cannot be empty!");
      }


      axios.post('http://localhost:8080/signup/', this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

    }

  render() {
    let usernameError = null, passwordError= null, emailError = null;
    for(let error of this.state.errors){
      if(error.element === "username"){
        usernameError = error.message;
      }if (error.element === "password"){
        passwordError = error.message;
      }if (error.element === "email"){
        emailError = error.message;
      }
    }

    let pwdWeak = false, pwdMedium = false, pwdStrong = false;
    if(this.state.pwdState === "weak"){
      pwdWeak =true;
    } else if (this.state.pwdState === "medium"){
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState === "strong"){
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }


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
              placeholder="Username"
              onChange={this
                .onUsernameChange
                .bind(this)}
              />
              <small className="danger-error">{usernameError ? usernameError : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this
                .onEmailChange
                .bind(this)}
              />
              <small className="danger-error">{emailError ? emailError : ""}</small>
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

              {this.state.password && <div className="password-state">
              <div
                className={"pwd pwd-weak " + (pwdWeak
                ? "show"
                : "")}></div>
              <div
                className={"pwd pwd-medium " + (pwdMedium
                ? "show"
                : "")}></div>
              <div
                className={"pwd pwd-strong " + (pwdStrong
                ? "show"
                : "")}></div>
            </div>}

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

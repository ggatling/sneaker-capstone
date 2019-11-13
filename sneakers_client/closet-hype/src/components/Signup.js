import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const Signup = props => {
  // console.log(`we are inside signup, email prop is ${props.email}`)
  return (

    <div>
      <h2> SignUp </h2>
      <Form onSubmit={e => props.submitSignup(e)}>
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input
            type="username"
            name="username"
            id="username"
            value={props.username}
            onChange={props.handleUsernameChange}
            placeholder="username"
          />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={props.email}
              onChange={props.handleEmailChange}
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="spassword"
              id="password"
              value={props.password}
              onChange={props.handlePasswordChange}
              placeholder="password"
            />
        </FormGroup>
        <Button className="btn btn-primary btn-block">Sign Up</Button>
      </Form>
    </div>
  );
};
export default Signup;

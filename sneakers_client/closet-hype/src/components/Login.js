import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const Login = props => {
  return (
    <div>
      <h2> Login </h2>
      <Form onSubmit={e => props.submitLogin(e)}>
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
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={props.password}
            onChange={props.handlePasswordChange}
            placeholder="password"
          />
        </FormGroup>
        <Button className="btn btn-primary btn-block">Log in</Button>
      </Form>
    </div>
  );
};
export default Login;

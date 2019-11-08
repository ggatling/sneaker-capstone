import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Home extends Component {
  render(){
      return (
        <div>
          <h1> Closet Hype</h1>
          <p>
            Welcome to Cloest Hype, where your closest is constantly on display and
            we aim to optimize peer 2 peer selling and lending of all the most sought
            after items in your closet. Let your closet make you money!
          </p>

          <div>
          <Container>
            <Row>
              <Col>
              <div>
                <h3>Sign Up</h3>
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="info" type="submit">
                  Submit
                </Button>
            </Form>
              </Col>
              <Col>
              <div>
                <h3>Login</h3>
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="info" type="submit">
                  Submit
                </Button>
                </Form>
              </Col>
            </Row>
          </Container>

        </div>

        </div>
      );
    }
  }


export default Home;

import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Modal from 'react-bootstrap/Modal';

const AddSneaker = props => {
  return(
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Add A Sneaker</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <Form onSubmit={e => props.addSneaker(e)}>
            <FormGroup>
              <Label for="Brand">Username</Label>
              <Input
                type="brand"
                name="brand"
                id="brand"
                value={props.brand}
                onChange={props.handleBrandChange}
                placeholder="brand"
              />
            </FormGroup>
              <Button className="btn btn-primary btn-block">Log in</Button>
          </Form>
      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
  </Modal.Dialog>
)}

export default AddSneaker;

// <Button variant="secondary">Close</Button>
// <Button variant="primary">Save changes</Button>

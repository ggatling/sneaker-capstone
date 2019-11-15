import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const UpdateProfile = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Update Profile</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Update Profile</ModalHeader>
        <ModalBody>
        <Form onSubmit={e => props.updateProfile(e)}>
          <FormGroup>
            <Input
              type="text"
              value={props.city}
              onChange={props.handleCityChange}
              placeholder="city"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.state}
              onChange={props.handleStateChange}
              placeholder="state"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.zipcode}
              onChange={props.handleZipcodeChange}
              placeholder="zipcode"
            />
          </FormGroup>
            <Button type="submit" onClick={toggle} className="btn btn-primary btn-block">Update Profile</Button>
        </Form>
        </ModalBody>
        <ModalFooter>

        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UpdateProfile;

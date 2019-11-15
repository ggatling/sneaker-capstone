import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const AddSneaker = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Post a Sneaker</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Sneaker</ModalHeader>
        <ModalBody>
        <Form onSubmit={e => props.addSneaker(e)}>
          <FormGroup>
            <Input
              type="text"
              name="brand"
              id="brand"
              value={props.brand}
              onChange={props.handleBrandChange}
              placeholder="brand"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.name}
              onChange={props.handleNameChange}
              placeholder="name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.gender}
              onChange={props.handleGenderChange}
              placeholder="gender"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.size}
              onChange={props.handleSizeChange}
              placeholder="size"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.conditon}
              onChange={props.handleConditionChange}
              placeholder="condition"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.releaseDate}
              onChange={props.handleReleaseChange}
              placeholder="release date"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.retailPrice}
              onChange={props.handleRetailChange}
              placeholder="retail price"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              value={props.resalePrice}
              onChange={props.handleResaleChange}
              placeholder="resale price"
            />
          </FormGroup>
            <Button type="submit" onClick={toggle} className="btn btn-primary btn-block">Add Sneaker</Button>
        </Form>
        </ModalBody>
        <ModalFooter>

        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddSneaker;

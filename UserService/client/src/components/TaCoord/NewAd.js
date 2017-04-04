import React from "react";
import { Modal, FormControl, Button } from "react-bootstrap";

export default class NewAd extends React.Component {

  render() {
    return (
        <Modal.Header closeButton>
          <Modal.Title>
            New Ad
          </Modal.Title>
          <Modal.Body>
            <FormControl type="text" placeholder="Course ID" />
            <FormControl type="text" placeholder="Start Date" />
            <FormControl type="text" placeholder="End Date" />

            <Button>Submit</Button>
          </Modal.Body>
        </Modal.Header>
    );
  }
}

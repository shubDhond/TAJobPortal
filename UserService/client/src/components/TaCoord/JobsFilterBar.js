import React from "react";
import {Button, Col, FormControl, FormGroup, Row, DropdownButton, MenuItem} from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default class JobsFilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  close() {
    this.setState({
      showModal: false
    });
  }

    render() {
        return (
            <FormGroup style={{margin: 0}}>
            <Row>
                <Col xs={8}  style={{paddingRight:0}}>
                        <FormControl bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={2}>
                    <DropdownButton title="Sort By" bsSize="large"  pullRight id="split-button-pull-right">
                        <MenuItem eventKey="1">Year</MenuItem>
                        <MenuItem eventKey="2">Program</MenuItem>
                    </DropdownButton>
                </Col>
                <Col xs={2}>

                    <Button type="submit" style={{padding:12}} bsStyle="primary" block={true} onClick={this.open}>New Ad+</Button>

                    <Modal show={this.state.showModal} onHide={this.close}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Hello
                        </Modal.Title>
                      </Modal.Header>
                    </Modal>

                </Col>
            </Row>
            </FormGroup>
        );
    }
}

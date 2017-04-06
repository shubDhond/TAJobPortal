import React from "react";
import { Modal, FormControl, Button } from "react-bootstrap";
import RichTextEditor from 'react-rte';

export default class NewAd extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({...this.state, value: value});
  }

  render() {
    console.log(this.state.value.toString('html'));
    return (
        <Modal.Header closeButton>
          <Modal.Title>
            New Ad
          </Modal.Title>
          <Modal.Body>
            <FormControl type="text" placeholder="Course ID" />
            <FormControl type="text" placeholder="Start Date" />
            <FormControl type="text" placeholder="End Date" />
            <RichTextEditor value={this.state.value} onChange={this.onChange}/>

            <Button>Submit</Button>
          </Modal.Body>
        </Modal.Header>
    );
  }
}

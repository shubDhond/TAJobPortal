import React from "react";
import { Button,ButtonGroup,Panel } from "react-bootstrap";

export default class Listing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline
    }
  }

  render() {
    return (
        <Panel header={this.state.title}>
          {this.state.description}
          <br/>
          Apply by: {this.state.deadline}

          <ButtonGroup vertical block>
            <Button bsStyle="success">Apply Now</Button>
          </ButtonGroup>
        </Panel>
    );
  }
}

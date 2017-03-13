import React from "react";
import { Button,FormGroup,FormControl } from "react-bootstrap";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
          <Button type="submit">Search</Button>
        </FormGroup>

      </div>
    );
  }
}

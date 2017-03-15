import React from "react";
import SearchBar from "./SearchBar";
import { Row,Col } from "react-bootstrap";

export default class Jobs extends React.Component {

  render() {

    return (
      <div>
        <SearchBar  />
        <Row>
          <Col md={8}>
          {this.props.children}
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    );
  }
}

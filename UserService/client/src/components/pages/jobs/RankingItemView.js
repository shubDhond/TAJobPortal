import React from "react";
import { connect } from "react-redux";

import { Button,Row,Col } from "react-bootstrap";

@connect((store) => {
  console.log(store);
  return {
    course : store.application.course
  };
})

export default class RankingItemView extends React.Component {
  render() {
    const { course } = this.props;
    const containerStyle={
        background:"#bdbdbd",
        padding:24
    };
    return (
      <div style={containerStyle}>
          <h4>CSC302</h4>
      </div>
    );
  }
}

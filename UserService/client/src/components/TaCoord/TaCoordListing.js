import React from "react";
import {connect} from "react-redux";
import TaCoordJobView from "./TaCoordJobView";
import TaCoordSingleView from "./TaCoordSingleView";

@connect((store) => {
  return {
    courses : store.courses
  };
})

export default class TaCoordListing extends React.Component {
  render() {
    return (
      <div>
        {this.props.courses.showComponent ?
          <TaCoordSingleView /> :
          <TaCoordJobView />
        }
      </div>
    );
  }
}

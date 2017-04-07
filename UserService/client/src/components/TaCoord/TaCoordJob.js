import React from "react";
import ListItem from "../pages/views/ListItem";
import { toggleComponent } from "../../actions/courseListingsActions";
import { setSingleCourse } from "../../actions/courseListingsActions";
import { connect } from "react-redux";
import {Glyphicon} from "react-bootstrap";

@connect((store) => {
  return {
    courses : store.courses
  };
})

export default class TaCoordJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course_name: this.props.course_name,
      requirements: this.props.requirements,
      end_date: this.props.end_date,
      start_date: this.props.start_date,
      showComponent: this.props.showComponent,
      course_id: this.props.course_id,
      posting_id: this.props.posting_id
    };
  }

  toggleView() {
    this.props.dispatch(setSingleCourse(this.state));
    this.props.dispatch(toggleComponent());

  }

  render() {
    return (
      <div>
        <ListItem >

          <div style={{display:'flex'}}>
            <h3 style={{flexGrow:1,marginTop:0,marginBottom:16}}><a onClick={this.toggleView.bind(this)} >{this.state.course_name}</a></h3>
            <h5 style={{marginTop:0,marginRight:16,alignSelf:"flex-start"}}>Start: {(this.state.start_date).slice(0,10)}</h5>
            <h5 style={{marginTop:0,alignSelf:"flex-start"}}>End: {this.state.end_date}</h5>
          </div>

          <h7>{this.state.requirements}</h7>

          <div style={{display:'flex',justifyContent:"flex-end",marginTop:16}}>
          <a className="see-more" onClick={this.toggleView.bind(this)}>View<Glyphicon glyph="chevron-right"/></a>
          </div>
        </ListItem>
      </div>
    );
  }
}

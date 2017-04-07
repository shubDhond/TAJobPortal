import React from "react";
import {Button, Glyphicon} from "react-bootstrap";
import {updateAssignments, getAssignments} from "../../actions/assignmentsActions";
import {taCoordClient} from "../../axiosClient";
import { connect } from "react-redux";

@connect((store) => {
  return {
    user: store.user,
    assignments: store.assignments
  };
})

export default class ApplicantListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student_id: this.props.student_id,
      course_id: this.props.course_id
    }
  }

  handleRemoveClick = () => {
      var config = {
          headers: {
            'x-access-token': this.props.user.user.user_token
          }
      };

      this.props.dispatch(updateAssignments(
          taCoordClient.delete("/assignment/"+ this.state.course_id + '?student_id=' + this.state.student_id, config)
      ));
  }

    render() {
      if(this.props.assignments.updated){
        var config = {
          headers: {'x-access-token': this.props.user.user.user_token}
        };
        this.props.dispatch(getAssignments(
          taCoordClient.get('/assignment', config)
        ));
      }

        return (
          <div>
            <h5>{this.state.student_id}</h5>
            <a>Send Offer</a>
            <Button onClick={this.handleRemoveClick.bind(this)} className="right-align invisible-button" style={{padding:8}} >
            <Glyphicon glyph="remove"/>
            </Button>
          </div>
        );
    }
}

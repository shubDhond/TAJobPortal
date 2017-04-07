import React from "react";
import {Button, Glyphicon} from "react-bootstrap";
import {updateAssignments, getAssignments} from "../../actions/assignmentsActions";
import {taCoordClient} from "../../axiosClient";
import { connect } from "react-redux";
import {sendOffer} from '../../actions/offersActions';

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

  sendOffer = () => {
    var config = {
        headers: {
          'x-access-token': this.props.user.user.user_token
        }
    };

    let data = {
      user_id: this.props.user_id,
      application_id: this.props.application_id,
      course_id: this.props.course_id,
      posting_id: this.props.posting_id
    }

    this.props.dispatch(sendOffer(
        taCoordClient.post("/offers/send/offer", data, config)
    ));
  }

// send these information user_id, application_id, course_id, posting_id, deadline
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
            <Button onClick={this.sendOffer.bind(this)}>Send Offer</Button>
            <Button onClick={this.handleRemoveClick.bind(this)} className="right-align invisible-button" style={{padding:8}} >
            <Glyphicon glyph="remove"/>
            </Button>
          </div>
        );
    }
}

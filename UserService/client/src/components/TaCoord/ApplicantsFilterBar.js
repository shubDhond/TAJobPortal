import React from "react";
import {connect} from 'react-redux';
import {Col, FormControl, FormGroup, Row, DropdownButton, MenuItem} from "react-bootstrap";
import {setApplicants} from "../../actions/applicantsActions";
import sortBy from 'lodash/sortBy';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

@connect((store) => {
    return {
        applicants : store.applicants.applicants
    };
})
export default class ApplicantsFilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        var sorted_applicants = filter(this.props.applicants, function(n) {
            return includes(n.first_name.toLowerCase() + ' '.concat(n.last_name).toLowerCase()+' '.concat(n.student_number), event.target.value.toLowerCase());
        });
        this.props.dispatch(setApplicants(sorted_applicants));

    }


    YearInc(e) {
        e.preventDefault();
        var sorted_applicants = sortBy(this.props.applicants, [function(n) {
            return n.year_of_study;
        }]);
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    YearDes(e) {
        e.preventDefault();
        var sorted_applicants = orderBy(this.props.applicants, [function(n) {return n.year_of_study;}], ['desc']);
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    UG(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants, function(n) {
            return n.program === "UG";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    MSC(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants, function(n) {
            return n.program === "MSC";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    MSAC(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants, function(n) {
            return n.program === "MSAC";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    PHD(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants, function(n) {
            return n.program === "PHD";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    GetAll(e) {
        e.preventDefault();
        this.props.dispatch(setApplicants(this.props.applicants));
    }


    render() {
        var header = null;
        if (this.state.value != ""){
            header = <h4>Searching for {this.state.value}</h4>
        }

        return (

            <FormGroup style={{marginBottom:0}}>
            <Row>
                <Col xs={9}  style={{paddingRight:0}}>
                        <FormControl
                            bsSize="large"
                            type="text"
                            placeholder="Search Applicant"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                </Col>
                <Col xs={2}>
                    <DropdownButton bsSize="large" title=" Filter By" pullRight id="split-button-pull-right">
                        <MenuItem eventKey="1" onClick={this.YearInc.bind(this)}>Year (ascending)</MenuItem>
                        <MenuItem eventKey="2" onClick={this.YearDes.bind(this)}>Year (descending)</MenuItem>
                        <MenuItem eventKey="3" onClick={this.UG.bind(this)}>UG</MenuItem>
                        <MenuItem eventKey="4" onClick={this.MSC.bind(this)}>MSC</MenuItem>
                        <MenuItem eventKey="5" onClick={this.MSAC.bind(this)}>MSAC</MenuItem>
                        <MenuItem eventKey="6" onClick={this.PHD.bind(this)}>PHD</MenuItem>
                        <MenuItem eventKey="7">Unassigned</MenuItem>
                        <MenuItem eventKey="8" onClick={this.GetAll.bind(this)}>All Applicants</MenuItem>

                    </DropdownButton>
                </Col>
            </Row>
                {header}
            </FormGroup>

        );
    }
}

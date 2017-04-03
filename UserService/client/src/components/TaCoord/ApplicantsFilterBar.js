import React from "react";
import {connect} from 'react-redux';
import {Col, FormControl, FormGroup, Row, DropdownButton, MenuItem} from "react-bootstrap";
import {setApplicants} from "../../actions/applicantsActions";
import sortBy from 'lodash/sortBy';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';

@connect((store) => {
    return {
        applicants : store.applicants
    };
})
export default class ApplicantsFilterBar extends React.Component {
    YearInc(e) {
        e.preventDefault();
        console.log(this.props.applicants.applicants);
        var sorted_applicants = sortBy(this.props.applicants.applicants, [function(n) {
            return n.year_of_study;
        }]);
        console.log(sorted_applicants);
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    YearDes(e) {
        e.preventDefault();
        var sorted_applicants = orderBy(this.props.applicants.applicants, [function(n) {return n.year_of_study;}], ['desc']);
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    UG(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants.applicants, function(n) {
            return n.program === "UG";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    MSC(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants.applicants, function(n) {
            return n.program === "MSC";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    MSAC(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants.applicants, function(n) {
            return n.program === "MSAC";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }
    PHD(e) {
        e.preventDefault();
        var sorted_applicants = filter(this.props.applicants.applicants, function(n) {
            return n.program === "PHD";
        });
        this.props.dispatch(setApplicants(sorted_applicants));
    }


    render() {
        return (
            <FormGroup style={{marginBottom:0}}>
            <Row>
                <Col xs={9}  style={{paddingRight:0}}>
                        <FormControl bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={2}>
                    <DropdownButton bsSize="large" title=" Sort By" pullRight id="split-button-pull-right">
                        <MenuItem eventKey="1" onClick={this.YearInc.bind(this)}>Year (ascending)</MenuItem>
                        <MenuItem eventKey="2" onClick={this.YearDes.bind(this)}>Year (descending)</MenuItem>
                        <MenuItem eventKey="3" onClick={this.UG.bind(this)}>UG</MenuItem>
                        <MenuItem eventKey="4" onClick={this.MSC.bind(this)}>MSC</MenuItem>
                        <MenuItem eventKey="5" onClick={this.MSAC.bind(this)}>MSAC</MenuItem>
                        <MenuItem eventKey="5" onClick={this.PHD.bind(this)}>PHD</MenuItem>
                        <MenuItem eventKey="5" onClick={this.UG.bind(this)}>Unassigned</MenuItem>

                    </DropdownButton>
                </Col>
            </Row>
            </FormGroup>
        );
    }
}

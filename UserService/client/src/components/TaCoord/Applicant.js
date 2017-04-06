import React from "react";
import ApplicantsFilterBar from "./ApplicantsFilterBar";
import ApplicantListview from './ApplicantListview';
import {Col} from 'react-bootstrap';


export default class Applicant extends React.Component {

    render() {
        return (
            <Col xs={12} style={{padding:0,borderRight:"1px solid #E0E0E0"}}>
                <div style={{background: "#fff", padding: 15, borderBottom: " 1px solid #E0E0E0"}}>
                    <h3 style={{margin: 8}}>Applicants</h3>
                    <ApplicantsFilterBar />
                </div>

                    <ApplicantListview />
            </Col>
        );
    }
}
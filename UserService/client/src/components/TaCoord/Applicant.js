import React from "react";

import ApplicantsFilterBar from "./ApplicantsFilterBar";
import ApplicantList from "./Applicant-list";

export default class Applicant extends React.Component {

    render() {

        return (
            <div style={{borderRight: "1px solid #E0E0E0"}}>
                <div style={{background: "#fff",padding:15,  borderBottom:" 1px solid #E0E0E0"}}>
                    <h3 style={{margin: 8}}>Applicants</h3>
                    <ApplicantsFilterBar  />
                </div>
                <div style={{padding:15}}>
                    <ApplicantList />
                </div>
            </div>
        );
    }
}
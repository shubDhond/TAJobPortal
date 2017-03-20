import React from "react";

import SearchBar from "./SearchBar";
import ApplicantList from "./applicant-list";

export default class Applicant extends React.Component {

    render() {

        return (
            <div style={{borderRight: "1px solid #E0E0E0"}}>
                <div style={{background: "#fff",padding:15,  borderBottom:" 1px solid #E0E0E0"}}>
                    <h2 style={{margin: 32}}>Applicants</h2>
                    <SearchBar  />
                </div>
                <div style={{padding:15}}>
                    <ApplicantList />
                </div>
            </div>
        );
    }
}
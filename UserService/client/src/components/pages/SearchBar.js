import React from "react";
import {Button, Col, FormControl, FormGroup, Row} from "react-bootstrap";
import { connect } from "react-redux";
import { queryListings } from "../../actions/listingsActions"

@connect((store) => {
    return {
        listings : store.listings
    };
})

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }


    query(){
        this.props.dispatch(queryListings(this.state.query))
        this.setState({
            ...this.state,
            query: ""
        })
    }

    queryChange(event){
        this.setState({
            ...this.state,
            query : event.target.value
        })
    }

    render() {
        var header = null
        if(this.state.query != ""){
            header = <h4>Showing results for {this.state.query}</h4>
        }

        return (
            <FormGroup>
            <Row>
                <Col xs={10}  style={{paddingRight:0}}>
                        <FormControl onChange={this.queryChange.bind(this)} bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={2}>
                <Button onClick={this.query.bind(this)} bsSize="large" block={true}>Search</Button>
                </Col>
            </Row>
            <Row>
                {header}
            </Row>
            </FormGroup>
        );
    }
}

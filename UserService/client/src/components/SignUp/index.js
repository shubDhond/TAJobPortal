import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import { connect } from 'react-redux';
import { 
  setUserType, 
  userEmailError, 
  userPasswordError,
  userAccessKeyError,
  userEmailValid,
  userPasswordValid,
  userAccessKeyValid,
  userAuthenticate
} from '../../actions/userActions';
import {Button, Col, Form, FormControl, Grid, Jumbotron, Row} from "react-bootstrap";
import axios from 'axios';
import './style.css';

let studentUserClient = axios.create({
  baseURL: 'http://localhost:3002/students',
  timeout: 1000
});

let coordinatorUserClient = axios.create({
  baseURL: 'http://localhost:3002/ta-coordinators',
  timeout: 1000
});

@connect((store) => {
  console.log(store);
  return {
    user: store.user
  }
})
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.setType = this.setType.bind(this);
    this.validate = this.validate.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(setUserType('student'));
  }

  setType(event) {
    this.props.dispatch(setUserType(event.target.value));
  }

  validate() {
    if (!this.validateEmail(this.refs.email.componentRef.value)) {
      this.props.dispatch(userEmailError('Invalid Email Address'));
    } else {
      this.props.dispatch(userEmailValid());
    }
    if (!this.validatePassword(this.refs.password.componentRef.value)) {
      this.props.dispatch(userPasswordError('Invalid Password'));
    } else if (this.refs.password.componentRef.value !== this.refs.confirm_password.componentRef.value) {
      this.props.dispatch(userPasswordError('Confirm password does not match'));
    } else {
      this.props.dispatch(userPasswordValid());
    }
    if (this.props.user.user.user_type === 'ta-coordinator') {
      if (!this.refs.accessKey.componentRef.value) {
        this.props.dispatch(userAccessKeyError('Enter an Access Key'));
      }  else {
        this.props.dispatch(userAccessKeyValid());
      }
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  }

  signUp(event) {
    event.preventDefault();
    this.validate();
    if (!this.props.user.emailError && !this.props.user.passwordError && !this.props.user.accessKeyError) {
      if (this.props.user.user.user_type === 'ta-coordinator') {
        this.props.dispatch(userAuthenticate(
          coordinatorUserClient.post('/sign-up', {
            email: this.refs.email.componentRef.value,
            password: this.refs.password.componentRef.value
          }, {
            headers: {
              'x-coordinator-account-key': this.refs.accessKey.componentRef.value
            }
          })
        ));
      } else {
        this.props.dispatch(userAuthenticate(
          studentUserClient.post('/sign-up', {
            email: this.refs.email.componentRef.value,
            password: this.refs.password.componentRef.value
          })
        ));
      }
    }
  }

  render() {
        const jumboStyle = {
            height: "100%",
            background: "none"
        };

        return (
            <Grid fluid style={{height: "100%"}}>
                <Row style={{padding:64}}>
                    <Col xs={12} sm="9">
                        <Jumbotron style={jumboStyle}>
                            <h1 style={{marginBottom: 16, marginTop: 64}}>Apply to be a TA</h1>
                            <h2 style={{marginBottom: 48}}>Lorem Ipsum Lorem Ipsum</h2>

                        </Jumbotron>
                    </Col>
                    <Col xs={12} sm="3">
                        <Form horizontal className="card" >
                            <Row>
                                <Col xs={12} style={{marginBottom:24}}>
                                    <h2 style={{teaxtAlign:"center", margin:0}}> Sign In</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h6> EMAIL</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormControl type="text" placeholder="Password"/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <h6> PASSWORD</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormControl type="password" placeholder="Password"/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <Button block  bsStyle="primary"
                                            bsSize="large" href="/app/profile">Sign In</Button>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col xs={12}>
                                    <a className="see-more centered"><h5>Create an Account</h5></a>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

                {this.props.children}
            </Grid>
        );
    }
}

export default SignUp;

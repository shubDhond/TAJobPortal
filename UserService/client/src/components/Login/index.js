import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import {Button, Col, Form, FormControl, Grid, Jumbotron, Row} from "react-bootstrap";
import { 
  setUserType, 
  userEmailError, 
  userPasswordError,
  userEmailValid,
  userPasswordValid,
  userAuthenticate
} from '../../actions/userActions';
import Label from 'grommet/components/Label';
import { Link } from 'react-router';
import axios from 'axios';

let studentUserClient = axios.create({
  baseURL: 'http://localhost:3002/students',
  timeout: 1000
});

let coordinatorUserClient = axios.create({
  baseURL: 'http://localhost:3002/ta-coordinators',
  timeout: 1000
});

@connect((store) => {
  return {
    user: store.user
  }
})
class Login extends Component {
  constructor(props) {
    super(props);
    this.setType = this.setType.bind(this);
    this.validate = this.validate.bind(this);
    this.login = this.login.bind(this);
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
    } else {
      this.props.dispatch(userPasswordValid());
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password) {
    return Boolean(password.length);
  }

  login(event) {
    event.preventDefault();
    this.validate();

    if (!this.props.user.emailError && !this.props.user.passwordError) {
      if (this.props.user.user.user_type === 'ta-coordinator') {
        this.props.dispatch(userAuthenticate(
          coordinatorUserClient.post('/authenticate', {
            email: this.refs.email.componentRef.value,
            password: this.refs.password.componentRef.value
          })
        ));
      } else {
        this.props.dispatch(userAuthenticate(
          studentUserClient.post('/authenticate', {
            email: this.refs.email.componentRef.value,
            password: this.refs.password.componentRef.value
          })
        ));
      }
    }
  }

  render() {
    let SuccessLabel;
    if (this.props.user.status === 200) {
      let successStyle = {
        color: '#228B22'
      }
      SuccessLabel = <Label style={successStyle}>{'Welcome ' + this.props.user.user.email}</Label>
    }

    let ErrorLabel;
    if (this.props.user.error) {
      let errorStyles = {
        color: '#FF0000'
      }
      ErrorLabel = <Label style={errorStyles}>{this.props.user.error}</Label>
    }

    if (this.props.user.authenticating) {
      return (

        <h1>AUTHENTICATING</h1>
      );
    }
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
    // return (
    //   <Box align='center' full={true}>
    //     <Box align='center' pad='medium'>
    //       <Card heading='Login' colorIndex='light-1'>
    //         {SuccessLabel}
    //         {ErrorLabel}
    //         <Form onSubmit={this.login}>
    //           <FormField>
    //             <RadioButton id='is_student'
    //               label='Student'
    //               checked={this.props.user.user.user_type === 'student'}
    //               onChange={this.setType}
    //               value='student' />
    //             <RadioButton id='is_coordinator'
    //               label='Coordinator'
    //               checked={this.props.user.user.user_type === 'ta-coordinator'}
    //               onChange={this.setType}
    //               value='ta-coordinator' />
    //           </FormField>
    //           <FormField error={this.props.user.emailError}>
    //             <TextInput placeHolder='Email'
    //                        id='email'
    //                        name='email'
    //                        type='email'
    //                        ref='email'
    //                        required />
    //           </FormField>
    //           <FormField error={this.props.user.passwordError} help='Your password must be at least 8 characters with 1 alphabet character and 1 number.'>
    //             <TextInput placeHolder='Password'
    //                        id='password'
    //                        name='password'
    //                        type='password'
    //                        ref='password'
    //                        required />
    //           </FormField>
    //           <Link to='/sign-up'>Don't have an account? Sign up here.</Link>
    //           <Footer pad={{"vertical": "medium"}}>
    //             <Button label='Login'
    //               type='submit'
    //               primary={true}
    //               onClick={this.login} />
    //           </Footer>
    //         </Form>
    //       </Card>
    //     </Box>
    //   </Box>
    // );
  }
}

export default Login;

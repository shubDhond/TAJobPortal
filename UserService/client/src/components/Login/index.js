import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import RadioButton from 'grommet/components/RadioButton';
import { 
  setUserType, 
  userEmailError, 
  userPasswordError,
  userAuthenticate
} from '../../actions/userActions';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Spinning from 'grommet/components/icons/Spinning';
import Footer from 'grommet/components/Footer';
import Label from 'grommet/components/Label';
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
    }
    if (!this.validatePassword(this.refs.password.componentRef.value)) {
      this.props.dispatch(userPasswordError('Invalid Password'));
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
        <Box align='center' full={true}>
          <Box align='center' pad='large'>
            <Card align='center' heading='Login' colorIndex='light-1'>
              <Spinning />
            </Card>
          </Box>
        </Box>
      );
    }

    return (
      <Box align='center' full={true}>
        <Box align='center' pad='medium'>
          <Card heading='Login' colorIndex='light-1'>
            {SuccessLabel}
            {ErrorLabel}
            <Form onSubmit={this.login}>
              <FormField>
                <RadioButton id='is_student'
                  label='Student'
                  checked={this.props.user.user.user_type === 'student'}
                  onChange={this.setType}
                  value='student' />
                <RadioButton id='is_coordinator'
                  label='Coordinator'
                  checked={this.props.user.user.user_type === 'ta-coordinator'}
                  onChange={this.setType}
                  value='ta-coordinator' />
              </FormField>
              <FormField error={this.props.user.emailError}>
                <TextInput placeHolder='Email'
                           id='email'
                           name='email'
                           type='email'
                           ref='email' 
                           required />
              </FormField>
              <FormField error={this.props.user.passwordError} help='Your password must be at least 8 characters with 1 alphabet character and 1 number.'>
                <TextInput placeHolder='Password'
                           id='password'
                           name='password' 
                           type='password'
                           ref='password'
                           required />
              </FormField>
              <Footer pad={{"vertical": "medium"}}>
                <Button label='Login'
                  type='submit'
                  primary={true}
                  onClick={this.login} />
              </Footer>
            </Form>
          </Card>
        </Box>
      </Box>
    );
  }
}

export default Login;

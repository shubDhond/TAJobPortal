import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import { connect } from 'react-redux';
import Input from 'react-toolbox/lib/input';
import './style.css';

const styles = {
  centered: {
    height: '400px',
    width: '600px',
    margin: '200px auto'
  }
}

@connect((store) => {
  return {
    user: store.user
  }
})
class App extends Component {
  render() {
    return (
      <div style={styles.centered}>
        <Card>
          <form action="this.submit()">
            <Input type='email' label='Email address' icon='email' />
            <Input type="password" label="Password"/>
          </form>
        </Card>
      </div>
    );
  }
}

export default App;

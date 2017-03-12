import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import './style.css';

@connect((store) => {
  return {
    user: store.user
  }
})
class App extends Component {
  render() {
    return (
      <Box align='center' full={true}>
        <Card label='Sample Label'
              heading='Sample Heading'
              description='Sample description providing more details.' />
      </Box>
    );
  }
}

export default App;

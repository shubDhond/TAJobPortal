import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../node_modules/grommet/scss/vanilla/index.scss';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import App from 'grommet/components/App';

import Routes from './routes';
import store from './store';

import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Routes history={browserHistory} />
    </App>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import { Provider } from 'react-redux';
import { store } from './store/store';

import { YoutubeApp } from './components/YoutubeApp';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <YoutubeApp />
  </Provider>,
  document.getElementById('root'),
);

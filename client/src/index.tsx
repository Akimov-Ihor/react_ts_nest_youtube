import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { YoutubeApp } from './components/YoutubeApp';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <YoutubeApp />
    </Provider>
  </BrowserRouter>, document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';

import {YoutubeApp} from './components/YoutubeApp';
import {reportWebVitals} from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'
import './index.css';


ReactDOM.render(
    <YoutubeApp />,
  document.getElementById('root')
);

reportWebVitals();

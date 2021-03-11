import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper';
import { Login } from './Login/Login';

import './YoutubeApp.css';

export const YoutubeApp:React.FC = () => {
  return (
    <Switch>
      <Route component={PrivateRoutesWrapper} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

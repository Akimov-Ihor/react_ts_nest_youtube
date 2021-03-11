import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './Login/Login';

import './YoutubeApp.css';
// import { Header } from './Header/Header';

export const YoutubeApp:React.FC = () => {
  return (
    <div className="youtubeApp">
      <Switch>
        {/* <Header /> */}
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

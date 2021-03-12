/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper';
import { Login } from './Login/Login';

import './YoutubeApp.css';

export const YoutubeApp:React.FC = () => {
  return (

    <div
      css={css`
         width: 100%;
         height: 100vh;`}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route component={PrivateRoutesWrapper} />
      </Switch>
    </div>

  );
};

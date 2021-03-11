import React, { useEffect } from 'react';

import { Switch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Home } from './Home/Home';
import { Trending } from './Trending/Trending';
import { Recommendation } from './Recomendation/Recomendation';
import { NavbarMenu } from './Navbar/NavbarMenu/NavbarMenu';
import { NavbarVideo } from './Navbar/NavbarVideo/NavbarVideo';
import { Video } from './Video/Video';

import { PrivateRoute } from '../PrivateRoutesWrapper/PrivateRoute/PrivateRoute';

import { MainStoreINT } from '../../interface/mainStoreInterface';
import { UserDataINF } from '../../interface/userInterface';

export const Container:React.FC = () => {
  const history = useHistory();
  const isVerifyingAuth: boolean = useSelector((state: MainStoreINT) => state.user.isVerifyingAuth);
  const userData: UserDataINF = useSelector((state: MainStoreINT) => state.user.userData);

  useEffect(() => {
    console.log('test');
    history.push('/home');
  }, [history]);

  return (
    <div>
      <NavbarMenu />
      <Switch>
        <PrivateRoute
          userData={userData}
          Component={Home}
          isVerifyingAuth={isVerifyingAuth}
          path="/home"
        />

        <PrivateRoute
          userData={userData}
          Component={Trending}
          isVerifyingAuth={isVerifyingAuth}
          path="/trending"
        />
        <PrivateRoute
          userData={userData}
          Component={Recommendation}
          isVerifyingAuth={isVerifyingAuth}
          path="/recommendation"
        />
        <PrivateRoute
          userData={userData}
          Component={Video}
          isVerifyingAuth={isVerifyingAuth}
          path="/watch:1"
        />

      </Switch>

      ;
      <NavbarVideo />

    </div>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

import { MainStoreINT } from '../../interface/mainStoreInterface';
import { UserINF } from '../../interface/userInterface';

export const PrivateRoutesWrapper:React.FC = () => {
  const userState:UserINF = useSelector((state:MainStoreINT) => state.user);

  const { isVerifyingAuth, userData } = userState;

  return (
    <>
      <Header
        isVerifyingAuth={isVerifyingAuth}
        userData={userData}
      />
      <PrivateRoute
        userData={userData}
        Component={Container}
        isVerifyingAuth={isVerifyingAuth}
        path="/"
      />
    </>
  );
};

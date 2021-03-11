import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

import { MainStoreINT } from '../../interface/mainStoreInterface';
import { UserINF } from '../../interface/userInterface';
// import { UserDataINF } from '../../interface/userInterface';

export const PrivateRoutesWrapper:React.FC = () => {
  // const isVerifyingAuth: boolean = useSelector((state: MainStoreINT) => state.user.isVerifyingAuth);
  // const userData: UserDataINF = useSelector((state: MainStoreINT) => state.user.userData);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userState:UserINF = useSelector((state:MainStoreINT) => state.user);

  // console.log(userState);
  const { isVerifyingAuth, userData } = userState;
  // const isVerifyingAuth = true;
  // // eslint-disable-next-line no-restricted-globals
  // const userData = { name: 'd', email: 'email', picture: 'picture' };

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
      />
    </>
  );
};

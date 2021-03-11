import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../Header/Header';
import { MainStoreINT } from '../../interface/mainStoreInterface';
import { UserINF } from '../../interface/userInterface';

export const PrivateRoutesWrapper:React.FC = () => {
  // const isVerifyingAuth: boolean = useSelector((state: MainStoreINT) => state.user.isVerifyingAuth);
  // const userData: UserDataINF = useSelector((state: MainStoreINT) => state.user.userData);
  const userState:UserINF = useSelector((state:MainStoreINT) => state.user);

  const { isVerifyingAuth, userData } = userState;
  return (
    <>
      <Header
        isVerifyingAuth={isVerifyingAuth}
        userData={userData}
      />
    </>
  );
};

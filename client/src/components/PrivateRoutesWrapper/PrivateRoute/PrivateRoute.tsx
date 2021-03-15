import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserDataINF } from '../../../interface/userInterface';

interface PrivateRouteINT {
  userData: UserDataINF;
  Component: React.ElementType;
  setCurrentId?:(arg:any) => any,
  isVerifyingAuth: boolean;
  path:string;

}

export const PrivateRoute:React.FC<PrivateRouteINT> = ({
  Component, setCurrentId, userData, isVerifyingAuth, path, ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!userData && !isVerifyingAuth) {
          return <Redirect to={{ pathname: '/login' }} />;
        }
        if (Object.keys(userData).length && !isVerifyingAuth) {
          return <Component {...props} setCurrentId={setCurrentId} />;
        }
        return false;
      }}
    />
  );
};

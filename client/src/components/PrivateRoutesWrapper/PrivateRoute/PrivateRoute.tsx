import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserDataINF } from '../../../interface/userInterface';

interface PrivateRouteINT {
  userData: UserDataINF,
  Component: React.ElementType,
  isVerifyingAuth: boolean

}

export const PrivateRoute:React.FC<PrivateRouteINT> = ({
  Component, userData, isVerifyingAuth, ...rest
}) => {
  console.log(!userData && !isVerifyingAuth, userData && !isVerifyingAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userData && !isVerifyingAuth) {
          return <Redirect to={{ pathname: '/login' }} />;
        }
        if (userData && !isVerifyingAuth) {
          console.log(props, rest);
          return <Component {...props} />;
        }
        return false;
      }}
    />
  );
};

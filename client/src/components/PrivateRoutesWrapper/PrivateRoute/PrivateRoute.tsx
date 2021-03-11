import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteINT {
  userData: object,
  Component: React.ElementType,
  isVerifyingAuth: boolean
}

export const PrivateRoute:React.FC<PrivateRouteINT> = ({
  Component, userData, isVerifyingAuth, ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userData && !isVerifyingAuth) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        if (userData && !isVerifyingAuth) {
          return <Component {...props} />;
        }
        return false;
      }}
    />
  );
};

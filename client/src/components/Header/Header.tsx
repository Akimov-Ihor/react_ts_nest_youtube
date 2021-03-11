import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

export const Header:React.FC = () => {
  const isLoggingIn = useSelector<RootStateOrAny>((state) => state.user.userData.isLoggingIn);
  return (
    <>
      {isLoggingIn
        ? <div>Header</div>
        : null}
    </>
  );
};

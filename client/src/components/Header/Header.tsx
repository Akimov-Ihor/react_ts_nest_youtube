import React from 'react';

import { HeaderINT } from './header.interface';

export const Header = ({ isVerifyingAuth, userData }:HeaderINT) => {
  console.log(isVerifyingAuth, userData);
  return (
    <>
      <div>Header</div>

    </>
  );
};

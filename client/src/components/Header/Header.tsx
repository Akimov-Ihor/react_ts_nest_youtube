/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

import { HeaderLogoContainer } from './HeaderLogoContainer/HeaderLogoContainer';
import { HeaderInput } from './HeaderInput/HeaderInput';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';

import { HeaderINT } from './header.interface';

export const Header:React.FC<HeaderINT> = ({ isVerifyingAuth, userData }) => {
  const color = 'white';

  return (
    <React.Fragment>
      {userData && !isVerifyingAuth && (
        <div
          css={css`
               align-items: center;
               display: flex;
               justify-content: space-between;
               width: 100%;
               height: 56px;
               padding: 0 2%;
               background-color: #868686f2;
               font-size: 24px;
               &:hover {
                  color: ${color};
               }`}
        >
          <HeaderLogoContainer />
          <HeaderInput />
          <HeaderProfile userData={userData} />
        </div>
      )}
    </React.Fragment>

  );
};

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

import logo from '../../../assets/header/header.container/yt_logo_rgb_light.png';

export const HeaderLogoContainer:React.FC = () => {
  return (
    <div
      css={css`
        min-width: 120px;
        min-height: 50px;
        height: 100%;
     `}
    >
      <div
        css={css`
        background: center/contain no-repeat  url(${logo}) ;
        height: 100%;
        width: 100%;
    `}
      >
      </div>

    </div>
  );
};

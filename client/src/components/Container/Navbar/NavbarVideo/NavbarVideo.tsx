/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

import { useLocation } from 'react-router-dom';

export const NavbarVideo:React.FC = () => {
  const location = useLocation();
  console.log(location.pathname === 'watch:1', location);
  const showNavbar = location.pathname === '/watch:1' ? 'flex' : 'none';

  return (
    <div
      css={css`
        width: 15%;
        display: ${showNavbar};

`}
    >
      Videos here ...
    </div>
  );
};

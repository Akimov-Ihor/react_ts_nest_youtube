/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavbarMenu:React.FC = () => {
  return (
    <div css={css`
         width: 20%;
    `}
    >
      <nav className="navbar-nav ui vertical fluid tabular menu">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trending">Trending</NavLink>
          </li>
          <li>
            <NavLink to="/recommendation">Recommendation</NavLink>
          </li>
          <li>
            <NavLink to="/watch:1">Video test</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

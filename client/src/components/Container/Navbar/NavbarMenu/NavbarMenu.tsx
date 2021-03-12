/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export const NavbarMenu:React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeItem, setActiveItem] = useState('home');
  return (
    <div css={css`
         //width: 20%;
         min-width: 208px;
    `}
    >
      <Menu pointing vertical>
        <Menu.Item
          icon="home"
          as={NavLink}
          name="Home"
          to="/home"
          active={activeItem === 'home'}
          onClick={() => setActiveItem('home')}
        />
        <Menu.Item
          icon="fire"
          as={NavLink}
          name="Trending"
          to="/trending"
          active={activeItem === 'trending'}
          onClick={() => setActiveItem('trending')}
        />
        <Menu.Item
          icon="eye"
          as={NavLink}
          name="Recommendation"
          to="/recommendation"
          active={activeItem === 'recommendation'}
          onClick={() => setActiveItem('recommendation')}
        />
        <Menu.Item
          icon="video"
          as={NavLink}
          name="Video"
          to="/watch:1"
          active={activeItem === 'video'}
          onClick={() => setActiveItem('video')}
        />

      </Menu>

    </div>
  );
};

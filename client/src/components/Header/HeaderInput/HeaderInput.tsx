/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { Input } from 'semantic-ui-react';
import { css, jsx } from '@emotion/react';

export const HeaderInput:React.FC = () => {
  return (
    <div css={css`   
         max-width: 435px;
         width: 100%;
         min-height: 34px;
         height: 65%;
         display: flex;
          .input_semantic{
             width: 100%;
          }
        `}
    >
      <Input className="input_semantic" action={{ icon: 'search' }} placeholder="Search..." />
    </div>
  );
};

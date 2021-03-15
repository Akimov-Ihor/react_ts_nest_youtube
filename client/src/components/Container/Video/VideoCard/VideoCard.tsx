/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { trendingINF } from './videoCart.interface';

export const VideoCard:React.FC<trendingINF> = ({
  id, snippet, statistics, setCurrentId,
}) => {
  const [image, title, channel, description, views] = [
    snippet.thumbnails.medium.url,
    snippet.localized.title,
    snippet.channelTitle,
    snippet.description,
    statistics.viewCount,

  ];
  return (
    <div
      key={id}
      onClick={() => setCurrentId(id)}
      css={css`
           display: flex;
           flex-wrap: wrap;
           padding: 26px;`}
    >
      <img src={image} alt="" />
      <div css={css` width: 60%`}>
        <div>
          <h3>{title}</h3>
          <p css={css`padding: 5px`}>
            {channel}
            {' '}
            •
            &nbsp;
            {views}
            &nbsp;
            views •
          </p>
          <p css={css`   
           white-space: nowrap;
           overflow: hidden;
           padding: 5px;
           text-overflow: ellipsis;`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VideoCard } from '../Video/VideoCard/VideoCard';
import { trendingINF } from './trending.interface';

export const Trending:React.FC<any> = ({ setCurrentId }) => {
  const [trendVideos, setTrendVideous] = useState([]);

  useEffect(() => {
    axios
      // eslint-disable-next-line max-len
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=UA&key=${process.env.REACT_APP_YOUTUBE_KEY}`)

      .then((response) => {
        console.log(response.data.items, response.data.items.snippet);
        setTrendVideous(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="trending">
      {
        trendVideos.length
          ? trendVideos.map(({ snippet, statistics, id }:trendingINF) => {
            return (
              <VideoCard
                key={id}
                id={id}
                snippet={snippet}
                statistics={statistics}
                setCurrentId={setCurrentId}
              />
            );
          })
          : null
      }
      Trending
    </div>
  );
};

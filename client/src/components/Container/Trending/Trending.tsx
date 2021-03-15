import React, { useEffect, useState } from 'react';
import { VideoCard } from '../Video/VideoCard/VideoCard';
import { trendingINF } from './trending.interface';
import { axiosService } from '../../../services/api';

export const Trending:React.FC<any> = ({ setCurrentId }) => {
  const [trendVideos, setTrendVideous] = useState([]);

  useEffect(() => {
    async function getListOfChannels() {
      const listOfChannels = await axiosService.get('/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=UA');
      setTrendVideous(listOfChannels.data.items);
    }
    getListOfChannels();
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

import React, { useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  useEffect(() => {
    axios
      // eslint-disable-next-line max-len
      .get(`https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCa6eupGBkdTjbxDCBGfZ6NA&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
      .then((response) => {
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home">Home</div>
  );
};

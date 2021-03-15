import React, { useEffect } from 'react';
import { axiosService } from '../../../services/api';

export const Home:React.FC = () => {
  useEffect(() => {
    async function getListOfChannels() {
      // eslint-disable-next-line max-len
      const listOfChannels = await axiosService.get(`/activitiespart=snippet%2CcontentDetails&channelId=${process.env['REACT_APP_CHANEL_ID ']}&maxResults=25&regionCode=tw)`);

      console.log(listOfChannels);
    }
    getListOfChannels();
  }, []);
  return (
    <div className="home">Home</div>
  );
};

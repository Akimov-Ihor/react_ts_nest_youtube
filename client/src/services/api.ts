import axios from 'axios';

export const axiosService = axios.create({
  baseURL: 'http://localhost:5000',
  params:
    {
      part: 'snippet',
      maxResults: 9,
      key: process.env.REACT_APP_YOUTUBE_KEY,
    },
});

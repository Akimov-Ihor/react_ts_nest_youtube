import axios from 'axios';

export const axiosService = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params:
    {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      key: process.env.REACT_APP_YOUTUBE_KEY,
    },
});

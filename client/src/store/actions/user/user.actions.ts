import { Dispatch } from 'redux';
// import { axiosService } from '../../../services/api';
import axios from 'axios';

export const LOGIN_SUCCESS = '[USER] LOGIN SUCCESS';

export const startLogin = ({ token }: { token: string }) => {
  return async (dispatch: Dispatch) => {
    const data = await axios.post('http://localhost:5000/google', { token }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  };
};

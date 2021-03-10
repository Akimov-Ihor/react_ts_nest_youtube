import { Dispatch } from 'redux';
import { axiosService } from '../../../services/api';

export const LOGIN_SUCCESS = '[USER] LOGIN SUCCESS';

export const startLogin = ({ token }: { token: string }) => {
  return async (dispatch: Dispatch) => {
    const data = await axiosService.post('/google', { token }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  };
};

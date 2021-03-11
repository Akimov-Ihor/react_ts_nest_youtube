import { LOGIN_SUCCESS } from '../../actions/user/user.actions';

const initialState = {
  userData: undefined,
  isVerifyingAuth: false,
};

export const userReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isVerifyingAuth: true,
        userData: data,
      };
    }
    default:
      return state;
  }
};
